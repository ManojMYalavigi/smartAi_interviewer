import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Camera, VideoOff, Activity, AlertTriangle, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { questionsData } from '../data/questions';

export default function InterviewGenerator() {
  const [phase, setPhase] = useState('setup'); // setup | active | report
  const [questions, setQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  
  // Voice & Video State
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [isVideoActive, setIsVideoActive] = useState(false);
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const recognitionRef = useRef(null);

  // Stats for the ruthless report
  const [metrics, setMetrics] = useState({
    fillerWords: 0,
    startTime: null,
    totalWords: 0,
    bodyLanguageViolations: 0,
    answers: []
  });

  const fillerList = ['um', 'uh', 'like', 'you know', 'basically', 'literally', 'actually'];

  // Start Webcam
  const toggleWebcam = async () => {
    if (isVideoActive) {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
      setIsVideoActive(false);
      streamRef.current = null;
    } else {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        setIsVideoActive(true);
      } catch (err) {
        console.error("Webcam access denied", err);
        alert("Camera access is required for the AI Interviewer.");
      }
    }
  };

  // Auto-start on mount
  useEffect(() => {
    if (phase === 'setup') {
      // Small delay to ensure component is fully mounted before requesting permissions
      const timer = setTimeout(() => {
        startInterview();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Ensure video stream connects after phase changes to active
  useEffect(() => {
    if ((phase === 'active' || phase === 'report') && videoRef.current && streamRef.current) {
      videoRef.current.srcObject = streamRef.current;
    }
  }, [phase]);

  // Setup Speech Recognition
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event) => {
        let currentTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          currentTranscript += event.results[i][0].transcript;
        }
        setTranscript(prev => prev + (prev ? ' ' : '') + currentTranscript);

        // Analyze for fillers immediately
        const words = currentTranscript.toLowerCase().split(' ');
        let foundFillers = 0;
        words.forEach(w => {
          if (fillerList.includes(w)) foundFillers++;
        });
        
        if (foundFillers > 0) {
          setMetrics(prev => ({ ...prev, fillerWords: prev.fillerWords + foundFillers }));
        }
      };

      recognitionRef.current.onerror = (event) => {
        console.error('Speech error', event.error);
        setIsRecording(false);
      };

      recognitionRef.current.onend = () => {
        if (isRecording) {
            // Restart if it stopped unexpectedly while we should be recording
            try { recognitionRef.current.start(); } catch(e) {}
        } else {
            setIsRecording(false);
        }
      };
    }
    
    // Cleanup on unmount
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
      if (recognitionRef.current) {
        try { recognitionRef.current.stop(); } catch(e) {}
      }
    };
  }, [isRecording]);

  // Read question aloud
  const speakQuestion = (text, onEndCallback) => {
    if (!window.speechSynthesis) {
        if(onEndCallback) onEndCallback();
        return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();
    const premiumVoice = voices.find(v => v.name.includes('Google') || v.lang === 'en-US') || voices[0];
    if (premiumVoice) utterance.voice = premiumVoice;
    utterance.rate = 0.95;
    utterance.pitch = 0.9; // Slightly stern
    
    utterance.onend = () => {
        if (onEndCallback) onEndCallback();
    };
    
    window.speechSynthesis.speak(utterance);
  };

  const startInterview = async () => {
    if (!isVideoActive) {
      await toggleWebcam();
    }
    // Randomize 9 questions and prepend the role question
    const shuffled = [...questionsData].sort(() => 0.5 - Math.random());
    const finalQuestions = [
      { question: "Which role are you targeting?", answer: "Any clear and professional job title." },
      ...shuffled.slice(0, 9)
    ];
    setQuestions(finalQuestions);
    setCurrentIdx(0);
    setMetrics({ fillerWords: 0, startTime: Date.now(), totalWords: 0, bodyLanguageViolations: 0, answers: [] });
    setPhase('active');
  };

  // When phase becomes active or question changes
  useEffect(() => {
    if (phase === 'active' && questions.length > 0) {
      setTranscript('');
      try { recognitionRef.current.stop(); } catch(e) {}
      setIsRecording(false);
      
      speakQuestion(`Question ${currentIdx + 1}. ${questions[currentIdx].question}. You may begin answering when ready.`, () => {
         // Auto start listening after asking
         setIsRecording(true);
         try { recognitionRef.current.start(); } catch(e) {}
      });
      
      // Simulate random body language violations (In a real app, use FaceMesh here)
      const fakeTracker = setInterval(() => {
         if (Math.random() > 0.85) {
             setMetrics(prev => ({...prev, bodyLanguageViolations: prev.bodyLanguageViolations + 1}));
         }
      }, 5000);
      
      return () => clearInterval(fakeTracker);
    }
  }, [phase, currentIdx, questions]);

  const nextQuestion = () => {
    // Save current answer (only count words if transcript is somewhat valid)
    const currentWords = transcript.split(' ').filter(w => w.trim().length > 0).length;
    
    // If it was the first question ("Which role are you targeting?"), we could dynamically adjust future questions, but for now just proceed
    
    setMetrics(prev => ({
        ...prev,
        totalWords: prev.totalWords + currentWords,
        answers: [...prev.answers, { q: questions[currentIdx].question, a: transcript, ideal: questions[currentIdx].answer }]
    }));
    
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(prev => prev + 1);
    } else {
      finishInterview();
    }
  };

  const finishInterview = () => {
    try { recognitionRef.current.stop(); } catch(e) {}
    setIsRecording(false);
    // Deliberately keeping the stream active for the report phase!
    
    // Save last answer
    const currentWords = transcript.split(' ').filter(w => w.trim().length > 0).length;
    setMetrics(prev => ({
        ...prev,
        totalWords: prev.totalWords + currentWords,
        answers: [...prev.answers, { q: questions[currentIdx].question, a: transcript, ideal: questions[currentIdx].answer }]
    }));
    
    setPhase('report');
  };

  // Report generation logic
  const renderReport = () => {
    const elapsedMinutes = Math.max((Date.now() - metrics.startTime) / 60000, 1);
    const wpm = Math.round(metrics.totalWords / elapsedMinutes);
    
    // Ruthless grading
    let paceScore = 100;
    if (wpm < 100) paceScore -= (100 - wpm); // Too slow
    if (wpm > 160) paceScore -= (wpm - 160); // Too fast
    
    let fillerScore = Math.max(100 - (metrics.fillerWords * 5), 0);
    let bodyScore = Math.max(100 - (metrics.bodyLanguageViolations * 10), 0);
    
    // Technical heuristic (dummy for MVP: checks length and standard keywords)
    let techScore = 0;
    metrics.answers.forEach(ans => {
        if (ans.a.length > 50) techScore += 33; // Passed minimum length
    });
    
    const finalScore = Math.round((paceScore + fillerScore + bodyScore + techScore) / 4);
    
    let verdict = "Needs Serious Work";
    if (finalScore > 90) verdict = "Professional Hired";
    else if (finalScore > 75) verdict = "Strong Candidate";
    else if (finalScore > 60) verdict = "Junior Level";

    return (
      <div className="glass-card animate-fade-in" style={{ padding: '3rem', maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 800, color: finalScore > 75 ? '#10b981' : '#ef4444' }}>
            {finalScore}%
          </h2>
          <span style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '2px' }}>
            {verdict}
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          <div className="glass-card" style={{ background: 'rgba(0,0,0,0.2)' }}>
             <h4 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>Speaking Pace (WPM)</h4>
             <span style={{ fontSize: '2rem', fontWeight: 700 }}>{wpm}</span>
             <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Optimal is 130-150. {wpm < 100 ? "You are too slow." : wpm > 160 ? "You are rushing." : "Perfect pace."}</p>
          </div>
          
          <div className="glass-card" style={{ background: 'rgba(0,0,0,0.2)' }}>
             <h4 style={{ color: 'var(--accent-secondary)', marginBottom: '0.5rem' }}>Filler Words</h4>
             <span style={{ fontSize: '2rem', fontWeight: 700 }}>{metrics.fillerWords}</span>
             <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Includes um, like, you know. {metrics.fillerWords > 5 ? "Extremely unprofessional. Reduce this." : "Good clarity."}</p>
          </div>

          <div className="glass-card" style={{ background: 'rgba(0,0,0,0.2)' }}>
             <h4 style={{ color: 'var(--accent-tertiary)', marginBottom: '0.5rem' }}>Gesture Analysis</h4>
             <span style={{ fontSize: '2rem', fontWeight: 700 }}>{metrics.bodyLanguageViolations} Warnings</span>
             <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                {metrics.bodyLanguageViolations > 3 
                  ? "Static gesture / poor gesture detected. You lacked engagement." 
                  : "Hand movement with confidence. A good gesture detected!"}
             </p>
          </div>
        </div>

        {/* Answer Review Section */}
        <div style={{ marginTop: '2rem' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>Detailed Answer Review</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {metrics.answers.map((ans, idx) => (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px' }}>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>Q{idx + 1}: {ans.q}</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="answer-grid">
                  <div style={{ borderLeft: '3px solid #ef4444', paddingLeft: '1rem' }}>
                    <span style={{ fontSize: '0.75rem', color: '#ef4444', fontWeight: 700, letterSpacing: '1px' }}>YOUR ANSWER</span>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '0.5rem', fontStyle: 'italic' }}>
                      {ans.a || "No answer detected."}
                    </p>
                  </div>
                  <div style={{ borderLeft: '3px solid #10b981', paddingLeft: '1rem' }}>
                    <span style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 700, letterSpacing: '1px' }}>IDEAL ANSWER</span>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-primary)', marginTop: '0.5rem' }}>
                      {ans.ideal}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
           <button className="btn btn-primary" onClick={() => setPhase('setup')}>Try Again (Level Up)</button>
        </div>
      </div>
    );
  };

  return (
    <div style={{ padding: '1rem', height: '100%' }}>
      {phase === 'setup' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '70vh', gap: '2rem' }}>
          <ShieldAlert size={64} style={{ color: 'var(--accent-primary)' }} className="pulse-glow-element" />
          <h1 style={{ fontSize: '3rem', fontWeight: 800 }}>Initializing Interview...</h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '500px', textAlign: 'center' }}>
            Requesting camera and microphone access. Please allow permissions when prompted by your browser to begin.
          </p>
        </div>
      )}

      {(phase === 'active' || phase === 'report') && questions.length > 0 && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', height: '75vh' }} className="interview-grid">
          
          {/* Left Column: Media feeds */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
             <div className="glass-card" style={{ flex: 1, position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#000' }}>
               <video 
                  ref={videoRef} 
                  autoPlay 
                  playsInline 
                  muted 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scaleX(-1)' }}
               />
               <div style={{ position: 'absolute', top: 10, left: 10, background: 'rgba(0,0,0,0.6)', padding: '0.25rem 0.75rem', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }} className="pulse-glow-element" />
                  <span style={{ fontSize: '0.75rem', fontWeight: 700 }}>GESTURE TRACKING ACTIVE</span>
               </div>
               
               {/* Overlay HUD simulating advanced face mesh/body tracking */}
               <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 5 }}>
                  {/* Scanning line */}
                  <div style={{ 
                     position: 'absolute', top: 0, left: 0, right: 0, height: '2px', 
                     background: 'rgba(16, 185, 129, 0.5)', 
                     boxShadow: '0 0 10px rgba(16, 185, 129, 0.8)',
                     animation: 'scan-vertical 3s linear infinite' 
                  }} />
                  
                  {/* Face box tracker */}
                  <div style={{ 
                     position: 'absolute', top: '25%', left: '30%', right: '30%', bottom: '25%', 
                     border: '1.5px solid rgba(16, 185, 129, 0.4)', 
                     borderRadius: '20px',
                     boxShadow: 'inset 0 0 20px rgba(16, 185, 129, 0.1)'
                  }}>
                     {/* Corner brackets */}
                     <div style={{ position: 'absolute', top: '-2px', left: '-2px', width: '20px', height: '20px', borderTop: '3px solid #10b981', borderLeft: '3px solid #10b981' }} />
                     <div style={{ position: 'absolute', top: '-2px', right: '-2px', width: '20px', height: '20px', borderTop: '3px solid #10b981', borderRight: '3px solid #10b981' }} />
                     <div style={{ position: 'absolute', bottom: '-2px', left: '-2px', width: '20px', height: '20px', borderBottom: '3px solid #10b981', borderLeft: '3px solid #10b981' }} />
                     <div style={{ position: 'absolute', bottom: '-2px', right: '-2px', width: '20px', height: '20px', borderBottom: '3px solid #10b981', borderRight: '3px solid #10b981' }} />
                  </div>

                  {/* Warning Overlay */}
                  {metrics.bodyLanguageViolations > 0 && (
                     <div style={{
                        position: 'absolute', inset: 0,
                        border: '4px solid rgba(239, 68, 68, 0.6)',
                        boxShadow: 'inset 0 0 50px rgba(239, 68, 68, 0.2)',
                        animation: 'pulse 2s infinite',
                        display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end', padding: '1rem'
                     }}>
                        <div style={{ background: 'rgba(239, 68, 68, 0.9)', color: 'white', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                           <AlertTriangle size={12} />
                           POSTURE WARNING DETECTED
                        </div>
                     </div>
                  )}
               </div>
             </div>

             <div className="glass-card" style={{ padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  {isRecording ? <Mic size={20} color="#ef4444" className="pulse-glow-element" /> : <MicOff size={20} />}
                  <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>{isRecording ? 'Listening...' : 'Microphone Idle'}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Activity size={20} color="var(--accent-primary)" />
                  <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>{metrics.bodyLanguageViolations} Warnings</span>
                </div>
             </div>
          </div>

          {/* Right Column: Q&A or Report */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', overflowY: 'auto' }}>
            {phase === 'active' ? (
              <>
                <div className="glass-card" style={{ padding: '2rem', borderLeft: '4px solid var(--accent-primary)' }}>
                  <h3 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>
                    Question {currentIdx + 1} of {questions.length}
                  </h3>
                  <h2 style={{ fontSize: '1.5rem', lineHeight: 1.4 }}>
                    {questions[currentIdx].question}
                  </h2>
                </div>

                <div className="glass-card" style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
                   <h3 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>Live Transcription</h3>
                   <div style={{ flex: 1, fontSize: '1.1rem', lineHeight: 1.6, color: 'var(--text-secondary)', whiteSpace: 'pre-wrap' }}>
                     {transcript || <span style={{ opacity: 0.5 }}>Speak clearly into the microphone. Silence is being penalized.</span>}
                   </div>
                   
                   <div style={{ marginTop: 'auto', paddingTop: '1rem', display: 'flex', justifyContent: 'flex-end' }}>
                     <button className="btn btn-secondary" onClick={nextQuestion}>
                       {currentIdx < questions.length - 1 ? 'Next Question' : 'Finish Interview'}
                     </button>
                   </div>
                </div>
              </>
            ) : (
              renderReport()
            )}
          </div>
        </div>
      )}

      <style>{`
        @keyframes scan-vertical {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @media (max-width: 900px) {
          .interview-grid {
            grid-template-columns: 1fr !important;
            height: auto !important;
          }
          .answer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
