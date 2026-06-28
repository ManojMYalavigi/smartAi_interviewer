import React, { useState, useEffect } from 'react';
import { HelpCircle, Clock, CheckCircle2, XCircle, RefreshCw } from 'lucide-react';
import { aptitudeData } from '../data/aptitude';

export default function AptitudePrep() {
  const [activeCategory, setActiveCategory] = useState('quantitative');
  
  // State: 'intro' | 'quiz' | 'completed'
  const [quizState, setQuizState] = useState('intro');
  const [questions, setQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState({}); // idx -> selectedOptionIndex
  const [timeLeft, setTimeLeft] = useState(60);

  // Load questions for selected category
  const startQuiz = () => {
    setQuestions(aptitudeData[activeCategory] || []);
    setCurrentIdx(0);
    setAnswers({});
    setTimeLeft(60);
    setQuizState('quiz');
  };

  // Countdown timer loop
  useEffect(() => {
    if (quizState !== 'quiz') return;
    if (timeLeft <= 0) {
      // Auto submit next or end
      handleNextQuestion();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, quizState]);

  const handleSelectOption = (optIdx) => {
    setAnswers({ ...answers, [currentIdx]: optIdx });
  };

  const handleNextQuestion = () => {
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx(currentIdx + 1);
      setTimeLeft(60);
    } else {
      setQuizState('completed');
    }
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, idx) => {
      if (answers[idx] === q.answerIndex) {
        score++;
      }
    });
    return { score, total: questions.length };
  };

  return (
    <div style={{ maxWidth: '750px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      
      {/* HEADER CARD */}
      <div className="glass-card">
        <span style={{ fontSize: '0.8rem', color: 'var(--accent-primary)', fontWeight: 700, textTransform: 'uppercase' }}>Aptitude Training</span>
        <h2 style={{ fontSize: '1.75rem', marginTop: '0.25rem' }}>Timed Aptitude Assessments</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
          Practice quantitative, logical, and verbal sections. Sharpen problem solving with instant mathematical proofs and explanations.
        </p>
      </div>

      {/* INTRO SCREEN */}
      {quizState === 'intro' && (
        <div className="glow-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h3 style={{ fontSize: '1.25rem' }}>Select Assessment Category</h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="details-grid">
            {[
              { id: 'quantitative', label: 'Quantitative Aptitude', desc: 'Work, time, speed, interest computations' },
              { id: 'logical', label: 'Logical Reasoning', desc: 'Syllogisms, patterns, logical deducing' },
              { id: 'verbal', label: 'Verbal Ability', desc: 'Synonyms, grammatical errors, logic structures' },
              { id: 'data-interpretation', label: 'Data Interpretation', desc: 'Pie charts, bar readings, statistics' }
            ].map(cat => (
              <div 
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="glass-item"
                style={{ 
                  flexDirection: 'column', 
                  alignItems: 'flex-start', 
                  gap: '0.25rem',
                  borderColor: activeCategory === cat.id ? 'var(--accent-primary)' : 'var(--glass-border)',
                  background: activeCategory === cat.id ? 'rgba(var(--accent-primary-rgb), 0.05)' : 'rgba(255,255,255,0.01)'
                }}
              >
                <span style={{ fontSize: '0.95rem', fontWeight: 700 }}>{cat.label}</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{cat.desc}</span>
              </div>
            ))}
          </div>

          <button className="btn btn-primary" onClick={startQuiz} style={{ padding: '0.9rem', borderRadius: '12px' }}>
            Start Timed Test (60s / question)
          </button>
        </div>
      )}

      {/* QUIZ ACTIVE SCREEN */}
      {quizState === 'quiz' && questions.length > 0 && (
        <div className="glass-card animate-slide-up" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Progress Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.75rem' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>
              {activeCategory} Section
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: timeLeft < 15 ? '#ef4444' : 'var(--accent-secondary)' }}>
              <Clock size={16} />
              <span style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>{timeLeft}s remaining</span>
            </div>
          </div>

          {/* Question Text */}
          <div>
            <span className="badge badge-secondary" style={{ marginBottom: '0.5rem' }}>Question {currentIdx + 1} of {questions.length}</span>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 600, lineHeight: 1.5 }}>
              {questions[currentIdx].question}
            </h3>
          </div>

          {/* Options */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {questions[currentIdx].options.map((opt, oIdx) => {
              const isSelected = answers[currentIdx] === oIdx;
              return (
                <div
                  key={oIdx}
                  onClick={() => handleSelectOption(oIdx)}
                  className="glass-item"
                  style={{
                    padding: '0.9rem 1.25rem',
                    fontSize: '0.9rem',
                    borderColor: isSelected ? 'var(--accent-primary)' : 'var(--glass-border)',
                    background: isSelected ? 'rgba(var(--accent-primary-rgb), 0.1)' : 'rgba(255,255,255,0.01)'
                  }}
                >
                  <span style={{ 
                    width: '20px', 
                    height: '20px', 
                    borderRadius: '50%', 
                    border: '1.5px solid', 
                    borderColor: isSelected ? 'var(--accent-primary)' : 'var(--text-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    marginRight: '0.25rem',
                    flexShrink: 0
                  }}>
                    {String.fromCharCode(65 + oIdx)}
                  </span>
                  <span>{opt}</span>
                </div>
              );
            })}
          </div>

          {/* Controls */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem' }}>
            <button className="btn btn-secondary" onClick={() => setQuizState('intro')}>
              Quit Test
            </button>
            <button 
              className="btn btn-primary" 
              onClick={handleNextQuestion}
              disabled={answers[currentIdx] === undefined}
            >
              {currentIdx + 1 === questions.length ? 'Submit Test' : 'Next Question'}
            </button>
          </div>
        </div>
      )}

      {/* COMPLETED RESULTS SCREEN */}
      {quizState === 'completed' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }} className="animate-slide-up">
          
          {/* Summary Scorecard */}
          <div className="glow-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <h3 style={{ fontSize: '1.5rem' }}>Test Summary</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                You completed the timed aptitude quiz. Correct answers unlock detailed step explanations.
              </p>
              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                <button className="btn btn-primary" onClick={startQuiz} style={{ gap: '0.4rem' }}>
                  <RefreshCw size={14} />
                  Retake
                </button>
                <button className="btn btn-secondary" onClick={() => setQuizState('intro')}>
                  Choose Section
                </button>
              </div>
            </div>

            <div style={{
              padding: '1.5rem 2rem',
              borderRadius: '16px',
              border: '1px solid var(--glass-border)',
              background: 'rgba(255,255,255,0.02)',
              textAlign: 'center'
            }}>
              <span style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--accent-secondary)' }}>
                {calculateScore().score} / {calculateScore().total}
              </span>
              <p style={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--text-muted)', marginTop: '0.25rem' }}>SCORE</p>
            </div>
          </div>

          {/* Breakdown list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h3 style={{ fontSize: '1.15rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>Questions Review</h3>

            {questions.map((q, idx) => {
              const userAnsIdx = answers[idx];
              const isCorrect = userAnsIdx === q.answerIndex;

              return (
                <div key={idx} className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                    <h4 style={{ fontSize: '1rem', lineHeight: 1.4 }}>{idx + 1}. {q.question}</h4>
                    {isCorrect ? (
                      <span className="badge badge-secondary" style={{ gap: '0.25rem', padding: '0.3rem 0.6rem', color: '#10b981', background: 'rgba(16, 185, 129, 0.1)', borderColor: 'rgba(16, 185, 129, 0.2)' }}>
                        <CheckCircle2 size={12} /> Correct
                      </span>
                    ) : (
                      <span className="badge badge-primary" style={{ gap: '0.25rem', padding: '0.3rem 0.6rem', color: '#ef4444', background: 'rgba(239, 68, 68, 0.1)', borderColor: 'rgba(239, 68, 68, 0.2)' }}>
                        <XCircle size={12} /> Incorrect
                      </span>
                    )}
                  </div>

                  <div style={{ fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                    <span>Your Answer: <strong style={{ color: isCorrect ? '#10b981' : '#ef4444' }}>{userAnsIdx !== undefined ? q.options[userAnsIdx] : 'None'}</strong></span>
                    <span>Correct Answer: <strong style={{ color: '#10b981' }}>{q.options[q.answerIndex]}</strong></span>
                    
                    <div style={{ marginTop: '0.75rem', padding: '0.75rem', borderRadius: '8px', background: 'rgba(0,0,0,0.15)', border: '1px solid var(--glass-border)' }}>
                      <span style={{ fontWeight: 'bold', color: 'var(--accent-primary)', display: 'block', marginBottom: '0.25rem' }}>AI Explanation:</span>
                      <p style={{ lineHeight: 1.5 }}>{q.explanation}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* STYLES COLLAPSE FOR FORM GRID */}
      <style>{`
        @media (max-width: 600px) {
          .details-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
