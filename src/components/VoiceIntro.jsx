import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function VoiceIntro({ onComplete }) {
  const [phase, setPhase] = useState('initial'); // 'initial' | 'asking' | 'listening' | 'welcoming' | 'done'
  const [transcript, setTranscript] = useState('');
  const [role, setRole] = useState('');
  const canvasRef = useRef(null);
  const recognitionRef = useRef(null);

  // Initialize Speech Recognition
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event) => {
        let currentTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          currentTranscript += event.results[i][0].transcript;
        }
        setTranscript(currentTranscript);
        if (event.results[0].isFinal) {
          handleRoleSelected(currentTranscript);
        }
      };

      recognitionRef.current.onerror = (event) => {
        console.error('Speech recognition error', event.error);
        if (event.error === 'not-allowed') {
          // fallback to skip if mic not allowed
          handleRoleSelected('Software Engineer');
        }
      };
      
      recognitionRef.current.onend = () => {
         // If ended but not completed phase, maybe retry or timeout.
         if (phase === 'listening' && !role) {
             // Fallback
             setTimeout(() => handleRoleSelected('Software Engineer'), 2000);
         }
      };
    } else {
        // Fallback for unsupported browsers
        setTimeout(() => handleRoleSelected('Software Engineer'), 3000);
    }
  }, [phase, role]);

  const speak = (text, onEndCallback) => {
    if (!window.speechSynthesis) {
        if (onEndCallback) onEndCallback();
        return;
    }
    const utterance = new SpeechSynthesisUtterance(text);
    // Find a good voice
    const voices = window.speechSynthesis.getVoices();
    const premiumVoice = voices.find(v => v.name.includes('Google') || v.name.includes('Samantha') || v.lang === 'en-US') || voices[0];
    if (premiumVoice) utterance.voice = premiumVoice;
    
    utterance.rate = 0.95;
    utterance.pitch = 1.0;
    
    utterance.onend = () => {
      if (onEndCallback) onEndCallback();
    };
    
    window.speechSynthesis.speak(utterance);
  };

  const startSequence = () => {
    setPhase('asking');
    speak("Which role are you targeting?", () => {
      setPhase('listening');
      if (recognitionRef.current) {
          try {
            recognitionRef.current.start();
          } catch(e) {
              console.error(e);
              handleRoleSelected('Software Engineer');
          }
      }
    });
  };

  const handleRoleSelected = (detectedRole) => {
      if (phase === 'welcoming') return;
      if (recognitionRef.current) {
          try { recognitionRef.current.stop(); } catch(e) {}
      }
      setRole(detectedRole);
      setPhase('welcoming');
      speak(`Welcome, ${detectedRole}. Let's begin.`, () => {
          setPhase('done');
          setTimeout(() => {
              if (onComplete) onComplete(detectedRole);
          }, 1000);
      });
  };

  // Canvas visualizer logic (abstract rings)
  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    let time = 0;
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();
    
    const render = () => {
      time += 0.05;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      
      // Ring animation based on phase
      const ringCount = phase === 'listening' ? 5 : (phase === 'welcoming' ? 7 : 3);
      const baseRadius = phase === 'listening' ? 120 + Math.sin(time*2)*20 : 100;
      
      for(let i = 0; i < ringCount; i++) {
          ctx.beginPath();
          const r = baseRadius + (i * 30) + (Math.sin(time + i) * 15);
          ctx.arc(cx, cy, r, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(139, 92, 246, ${0.8 - (i * 0.15)})`;
          ctx.lineWidth = 2 + (Math.sin(time + i)*2);
          if (phase === 'listening') {
              ctx.setLineDash([15, 15]);
              ctx.lineDashOffset = -time * 20;
          } else {
              ctx.setLineDash([]);
          }
          ctx.stroke();
      }
      
      animationFrameId = requestAnimationFrame(render);
    };
    render();
    
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [phase]);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: '#05030A',
      zIndex: 9999,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      color: 'white',
      fontFamily: "'Outfit', sans-serif"
    }}>
      <canvas 
        ref={canvasRef} 
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }} 
      />
      
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <AnimatePresence mode="wait">
            {phase === 'initial' && (
                <motion.div
                   key="initial"
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -20 }}
                >
                    <button 
                        className="btn btn-primary" 
                        onClick={startSequence}
                        style={{ padding: '1rem 2.5rem', fontSize: '1.2rem', borderRadius: '30px' }}
                    >
                        Initialize
                    </button>
                </motion.div>
            )}

            {phase === 'asking' && (
                <motion.div
                   key="asking"
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0 }}
                >
                    <h1 style={{ fontSize: '3rem', fontWeight: 600, letterSpacing: '-0.03em' }}>
                        Which role are you targeting?
                    </h1>
                </motion.div>
            )}

            {phase === 'listening' && (
                <motion.div
                   key="listening"
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
                   style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}
                >
                    <h1 style={{ fontSize: '3rem', fontWeight: 600, opacity: 0.7 }}>
                        Listening...
                    </h1>
                    <p style={{ fontSize: '1.5rem', color: 'var(--primary-color)', minHeight: '40px' }}>
                        {transcript || "Speak now..."}
                    </p>
                </motion.div>
            )}

            {phase === 'welcoming' && (
                <motion.div
                   key="welcoming"
                   initial={{ opacity: 0, scale: 0.8 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 1.2 }}
                >
                    <h1 style={{ fontSize: '4rem', fontWeight: 700, background: 'linear-gradient(135deg, #fff, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                        Hi, {role}
                    </h1>
                </motion.div>
            )}
        </AnimatePresence>
      </div>
    </div>
  );
}
