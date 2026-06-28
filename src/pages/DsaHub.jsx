import React, { useState } from 'react';
import { LayoutGrid, ChevronLeft, ChevronRight, Play, Award, Zap, HelpCircle } from 'lucide-react';
import { dsaData } from '../data/dsa';

export default function DsaHub() {
  const [selectedTopic, setSelectedTopic] = useState('arrays');
  const topicKeys = Object.keys(dsaData);
  const data = dsaData[selectedTopic];

  // Visualizer step tracker
  const [stepIdx, setStepIdx] = useState(0);
  const steps = data.stepsData.steps;
  const currentStep = steps[stepIdx];

  const handleNext = () => {
    if (stepIdx < steps.length - 1) {
      setStepIdx(stepIdx + 1);
    }
  };

  const handleBack = () => {
    if (stepIdx > 0) {
      setStepIdx(stepIdx - 1);
    }
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '230px 1fr', gap: '2rem' }} className="dsa-layout">
      
      {/* SIDEBAR TABS */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
        <h3 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '0.5rem', paddingLeft: '0.5rem' }}>
          DSA Modules
        </h3>
        {topicKeys.map((key) => (
          <button
            key={key}
            onClick={() => {
              setSelectedTopic(key);
              setStepIdx(0);
            }}
            className="btn btn-secondary"
            style={{
              justifyContent: 'flex-start',
              background: selectedTopic === key ? 'rgba(var(--accent-primary-rgb), 0.15)' : 'transparent',
              borderColor: selectedTopic === key ? 'var(--accent-primary)' : 'transparent',
              width: '100%',
              fontSize: '0.85rem'
            }}
          >
            <LayoutGrid size={14} />
            {dsaData[key].title}
          </button>
        ))}
      </div>

      {/* DETAILED DSA WORKSPACE */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }} className="animate-fade-in">
        
        {/* Title and Theory */}
        <div className="glass-card">
          <span style={{ fontSize: '0.8rem', color: 'var(--accent-secondary)', fontWeight: 700, textTransform: 'uppercase' }}>DSA Visualization Suite</span>
          <h2 style={{ fontSize: '1.75rem', marginTop: '0.25rem' }}>{data.title}</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem', lineHeight: 1.5 }}>
            {data.theory}
          </p>
        </div>

        {/* ALGORITHM STEP-BY-STEP ANIMATION VISUALIZER */}
        <div className="glow-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div>
              <h3 style={{ fontSize: '1.1rem' }}>Interactive Execution Trace</h3>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{data.stepsData.title}</span>
            </div>
            
            {/* Step Controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <button 
                className="btn btn-secondary" 
                onClick={handleBack} 
                disabled={stepIdx === 0}
                style={{ padding: '0.35rem 0.65rem' }}
              >
                <ChevronLeft size={16} />
              </button>
              <span style={{ fontSize: '0.85rem', fontWeight: 'bold', width: '80px', textAlign: 'center' }}>
                Step {stepIdx + 1} / {steps.length}
              </span>
              <button 
                className="btn btn-secondary" 
                onClick={handleNext} 
                disabled={stepIdx === steps.length - 1}
                style={{ padding: '0.35rem 0.65rem' }}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Tracer Screen */}
          <div style={{ 
            background: 'rgba(0, 0, 0, 0.25)', 
            padding: '2.5rem 1.5rem', 
            borderRadius: '12px', 
            border: '1px solid var(--glass-border)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
            minHeight: '200px'
          }}>
            
            {/* Array Box Trace */}
            {currentStep.array && (
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                {currentStep.array.map((val, idx) => {
                  const isLeft = currentStep.pointers?.left === idx || currentStep.pointers?.low === idx;
                  const isRight = currentStep.pointers?.right === idx || currentStep.pointers?.high === idx;
                  const isMid = currentStep.pointers?.mid === idx;

                  // Define borders and colors based on active pointer
                  let borderCol = 'var(--glass-border)';
                  let bgCol = 'rgba(255, 255, 255, 0.02)';
                  let textCol = 'var(--text-primary)';

                  if (isLeft) {
                    borderCol = 'var(--accent-primary)';
                    bgCol = 'rgba(139, 92, 246, 0.15)';
                    textCol = 'var(--accent-primary)';
                  } else if (isRight) {
                    borderCol = 'var(--accent-secondary)';
                    bgCol = 'rgba(6, 182, 212, 0.15)';
                    textCol = 'var(--accent-secondary)';
                  } else if (isMid) {
                    borderCol = 'var(--accent-tertiary)';
                    bgCol = 'rgba(236, 72, 153, 0.15)';
                    textCol = 'var(--accent-tertiary)';
                  }

                  return (
                    <div 
                      key={idx} 
                      style={{ 
                        width: '50px', 
                        height: '50px', 
                        borderRadius: '10px', 
                        border: `1.5px solid ${borderCol}`,
                        backgroundColor: bgCol,
                        color: textCol,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                        fontSize: '1.15rem',
                        position: 'relative',
                        boxShadow: isLeft || isRight || isMid ? 'var(--glow-shadow)' : 'none',
                        transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                      }}
                    >
                      {val}
                      
                      {/* Pointer Labels */}
                      {isLeft && (
                        <span style={{ position: 'absolute', bottom: '-22px', fontSize: '0.65rem', fontWeight: 'bold', color: 'var(--accent-primary)' }}>
                          {currentStep.pointers.left !== undefined ? 'L' : 'LOW'}
                        </span>
                      )}
                      {isRight && (
                        <span style={{ position: 'absolute', bottom: '-22px', fontSize: '0.65rem', fontWeight: 'bold', color: 'var(--accent-secondary)' }}>
                          {currentStep.pointers.right !== undefined ? 'R' : 'HIGH'}
                        </span>
                      )}
                      {isMid && (
                        <span style={{ position: 'absolute', bottom: '-22px', fontSize: '0.65rem', fontWeight: 'bold', color: 'var(--accent-tertiary)' }}>
                          MID
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Queue Queue Tracer */}
            {currentStep.queue && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', width: '100%', maxWidth: '400px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--text-muted)' }}>QUEUE:</span>
                  <div style={{ display: 'flex', gap: '0.5rem', flex: 1, background: 'rgba(255,255,255,0.02)', padding: '0.5rem', borderRadius: '8px', border: '1px solid var(--glass-border)', minHeight: '38px' }}>
                    {currentStep.queue.map((node, i) => (
                      <span key={i} className="badge badge-primary">{node}</span>
                    ))}
                    {currentStep.queue.length === 0 && <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>[Empty]</span>}
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--text-muted)' }}>VISITED:</span>
                  <div style={{ display: 'flex', gap: '0.5rem', flex: 1, background: 'rgba(255,255,255,0.02)', padding: '0.5rem', borderRadius: '8px', border: '1px solid var(--glass-border)', minHeight: '38px' }}>
                    {currentStep.visited.map((node, i) => (
                      <span key={i} className="badge badge-secondary">{node}</span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Dynamic Step description */}
            <p style={{ 
              fontSize: '0.9rem', 
              color: 'var(--text-secondary)', 
              textAlign: 'center', 
              lineHeight: 1.5, 
              maxWidth: '500px',
              borderTop: '1px solid rgba(255,255,255,0.05)',
              paddingTop: '1rem',
              marginTop: '0.5rem'
            }}>
              {currentStep.description}
            </p>
          </div>
        </div>

        {/* Practice Questions and AI Explanation */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '1.5rem' }} className="dsa-details-grid">
          
          {/* Practice Questions list */}
          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3 style={{ fontSize: '1.15rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Award size={18} style={{ color: 'var(--accent-secondary)' }} />
              High-Frequency Questions
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {data.questions.map((q, idx) => (
                <a
                  key={idx}
                  href={q.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-item"
                  style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 1rem' }}
                >
                  <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>{q.title}</span>
                  <span className={`badge ${q.difficulty === 'Easy' ? 'badge-secondary' : 'badge-primary'}`} style={{ fontSize: '0.7rem' }}>
                    {q.difficulty}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* AI Explanation details */}
          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', background: 'rgba(var(--accent-primary-rgb), 0.02)' }}>
            <h3 style={{ fontSize: '1.15rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Zap size={18} style={{ color: 'var(--accent-primary)' }} />
              AI Algorithm Insight
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              {data.explanation}
            </p>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 800px) {
          .dsa-layout {
            grid-template-columns: 1fr !important;
          }
          .dsa-details-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
