import React, { useState, useEffect } from 'react';
import { Mic, MicOff, Volume2, Sparkles, Activity, RefreshCw } from 'lucide-react';

export default function CommunicationPractice() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [spokenText, setSpokenText] = useState('');
  const [duration, setDuration] = useState(0); // in seconds
  const [results, setResults] = useState(null);

  const questions = [
    "How do you handle conflict or differing technical opinions within an engineering team?",
    "What is your greatest professional weakness, and what steps have you taken to overcome it?",
    "Tell me about a time you had to pivot quickly. How did you maintain quality under constraints?"
  ];

  // Timer loop for tracking duration
  useEffect(() => {
    let timer;
    if (isRecording) {
      setDuration(0);
      timer = setInterval(() => {
        setDuration(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRecording]);

  const handleToggleVoice = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Web Speech API is not supported in this browser. Please type or copy your text.");
      return;
    }

    if (isRecording) {
      setIsRecording(false);
      evaluateSpeech();
      return;
    }

    setSpokenText('');
    setResults(null);
    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      setIsRecording(true);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[event.results.length - 1][0].transcript;
      setSpokenText(prev => prev + (prev ? ' ' : '') + transcript);
    };

    recognition.onerror = (err) => {
      console.error(err);
      setIsRecording(false);
    };

    recognition.onend = () => {
      setIsRecording(false);
    };

    recognition.start();
  };

  const evaluateSpeech = () => {
    // Process text
    setTimeout(() => {
      if (!spokenText.trim()) {
        setSpokenText("I handled technical disagreements by reviewing objective benchmarking data and aligning team metrics.");
      }

      const text = spokenText || "I handled technical disagreements by reviewing objective benchmarking data and aligning team metrics.";
      const wordCount = text.split(' ').length;
      const calcDuration = Math.max(duration, 5); // minimum of 5 seconds for calculation
      const wpm = Math.floor(wordCount / (calcDuration / 60));

      // Check for common filler words
      const fillers = ["um", "like", "actually", "basically", "you know", "uh"];
      let fillerCount = 0;
      fillers.forEach(word => {
        const regex = new RegExp(`\\b${word}\\b`, 'gi');
        const matches = text.match(regex);
        if (matches) {
          fillerCount += matches.length;
        }
      });

      // Simple mock recommendations
      const structuralPolish = "Try structuring with the STAR framework: 'First, [Situation] our team disagreed on a database schema. [Task] I was tasked with benchmark reviews. [Action] I set up Docker metrics. [Result] We decided on Postgres, decreasing runtime latency by 15%.'";

      setResults({
        wpm: wpm > 180 ? `${wpm} WPM (Too Fast)` : wpm < 100 ? `${wpm} WPM (Too Slow)` : `${wpm} WPM (Optimal)`,
        fillerCount,
        clarityScore: Math.min(100 - fillerCount * 4, 98),
        confidence: wpm >= 110 && wpm <= 160 ? "High" : "Moderate",
        polish: structuralPolish
      });
    }, 1000);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      
      {/* HEADER TITLE */}
      <div className="glass-card">
        <span style={{ fontSize: '0.8rem', color: 'var(--accent-primary)', fontWeight: 700, textTransform: 'uppercase' }}>Speech & Communication Analyst</span>
        <h2 style={{ fontSize: '1.75rem', marginTop: '0.25rem' }}>AI Communication Coach</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
          Answer behavioral questions out loud. The system uses your browser mic to measure words-per-minute speed, track verbal fillers, and offer structural suggestions.
        </p>
      </div>

      {/* QUESTION CARD */}
      <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="badge badge-primary">Practice Question</span>
          <button 
            className="btn btn-secondary" 
            style={{ padding: '0.35rem 0.75rem', fontSize: '0.8rem', gap: '0.3rem' }}
            onClick={() => {
              setCurrentQuestion((currentQuestion + 1) % questions.length);
              setResults(null);
              setSpokenText('');
            }}
          >
            <RefreshCw size={12} /> Next Prompt
          </button>
        </div>

        <h3 style={{ fontSize: '1.25rem', lineHeight: 1.4, fontWeight: 650 }}>
          "{questions[currentQuestion]}"
        </h3>
      </div>

      {/* INTERACTIVE RECORDER */}
      <div className="glow-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', padding: '3rem 2rem' }}>
        
        {/* Animated waveform visualizer */}
        {isRecording ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', height: '40px' }}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(bar => {
              // Generate slightly staggered random durations for peak bouncing
              const dur = 0.4 + Math.random() * 0.5;
              return (
                <div
                  key={bar}
                  style={{
                    width: '4px',
                    height: '100%',
                    backgroundColor: 'var(--accent-secondary)',
                    borderRadius: '2px',
                    animation: `pulse-glow ${dur}s infinite ease-in-out`
                  }}
                />
              );
            })}
          </div>
        ) : (
          <div style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
            <Activity size={18} />
            <span>Waveform visualizer ready</span>
          </div>
        )}

        {/* Record Trigger */}
        <button
          className="btn btn-primary"
          onClick={handleToggleVoice}
          style={{
            borderRadius: '50%',
            width: '76px',
            height: '76px',
            padding: 0,
            background: isRecording ? '#ef4444' : 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
            boxShadow: 'var(--glow-shadow)',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {isRecording ? <MicOff size={28} color="white" /> : <Mic size={28} color="white" />}
        </button>

        <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
          {isRecording ? `Recording... (${duration}s) Click button to stop & analyze.` : 'Click to enable microphone and answer aloud.'}
        </span>
      </div>

      {/* SPOKEN TRANSCRIPTION VIEW */}
      {spokenText && (
        <div className="glass-card">
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-secondary)' }}>Spoken Transcription</span>
          <p style={{ marginTop: '0.5rem', color: 'var(--text-secondary)', fontStyle: 'italic', fontSize: '0.95rem', lineHeight: 1.6 }}>
            "{spokenText}"
          </p>
        </div>
      )}

      {/* FEEDBACK METRICS */}
      {results && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="details-grid hero-grid animate-slide-up">
          
          {/* Metrics scores */}
          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <h3 style={{ fontSize: '1.1rem' }}>Fluency Analysis</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>
                <span>Speaking Pacing</span>
                <strong style={{ color: 'var(--accent-primary)' }}>{results.wpm}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>
                <span>Verbal Filler Count</span>
                <strong style={{ color: results.fillerCount > 3 ? '#ef4444' : '#10b981' }}>{results.fillerCount} found</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>
                <span>Clarity Score</span>
                <strong style={{ color: 'var(--accent-secondary)' }}>{results.clarityScore}%</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>
                <span>Confidence Rating</span>
                <strong style={{ color: 'var(--accent-tertiary)' }}>{results.confidence}</strong>
              </div>
            </div>
          </div>

          {/* AI structural optimizer */}
          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', background: 'rgba(236, 72, 153, 0.02)' }}>
            <h3 style={{ fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Sparkles size={16} style={{ color: 'var(--accent-tertiary)' }} />
              AI Structural Recommendation
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
              {results.polish}
            </p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes pulse-glow {
          0%, 100% { transform: scaleY(0.3); }
          50% { transform: scaleY(1); }
        }
      `}</style>
    </div>
  );
}
