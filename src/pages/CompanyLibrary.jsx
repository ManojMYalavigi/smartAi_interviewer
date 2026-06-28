import React, { useState } from 'react';
import { Building2, Clock, ShieldCheck, HelpCircle, Lightbulb, TrendingUp } from 'lucide-react';
import { companiesData } from '../data/companies';

export default function CompanyLibrary({ setActivePage }) {
  const [selectedComp, setSelectedComp] = useState('google');
  const [searchTerm, setSearchTerm] = useState('');
  
  const allKeys = Object.keys(companiesData);
  const compKeys = allKeys.filter(key => 
    companiesData[key].name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const data = companiesData[selectedComp] || companiesData['google'];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: '2rem' }} className="company-layout">
      
      {/* SIDEBAR TABS */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%', maxHeight: '80vh' }}>
        <div>
          <h3 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '0.5rem', paddingLeft: '0.5rem' }}>
            Select Company
          </h3>
          <input 
            type="text" 
            placeholder="Search companies..." 
            className="glass-input" 
            style={{ width: '100%', padding: '0.5rem 0.75rem', fontSize: '0.85rem' }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', overflowY: 'auto', paddingRight: '0.5rem', flex: 1 }} className="custom-scrollbar">
          {compKeys.map((key) => (
            <button
              key={key}
              onClick={() => setSelectedComp(key)}
              className="btn btn-secondary"
              style={{
                justifyContent: 'flex-start',
                background: selectedComp === key ? 'rgba(var(--accent-primary-rgb), 0.15)' : 'transparent',
                borderColor: selectedComp === key ? 'var(--accent-primary)' : 'transparent',
                width: '100%',
                textTransform: 'capitalize',
                flexShrink: 0
              }}
            >
              <Building2 size={16} />
              {companiesData[key].name}
            </button>
          ))}
          {compKeys.length === 0 && <span style={{fontSize:'0.85rem', color: 'var(--text-muted)'}}>No companies found.</span>}
        </div>
      </div>

      {/* DETAILS VIEW */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }} className="animate-fade-in">
        
        {/* Header Block */}
        <div className="glass-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span style={{ fontSize: '0.8rem', color: 'var(--accent-secondary)', fontWeight: 700, textTransform: 'uppercase' }}>Specific Company Training</span>
            <h2 style={{ fontSize: '2rem', marginTop: '0.25rem' }}>{data.name} Prep Guide</h2>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.9rem' }}>
              <Clock size={16} style={{ color: 'var(--accent-primary)' }} />
              <span>Timeline: <strong>{data.timeline}</strong></span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.9rem' }}>
              <ShieldCheck size={16} style={{ color: 'var(--accent-secondary)' }} />
              <span>Difficulty: <strong>{data.difficulty}</strong></span>
            </div>
          </div>
        </div>

        {/* Action Gateways */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
          <button 
            className="glass-card hover-lift" 
            style={{ padding: '1.5rem', textAlign: 'center', border: '1px solid var(--accent-secondary)', background: 'rgba(6, 182, 212, 0.05)', cursor: 'pointer', color: '#fff' }}
            onClick={() => setActivePage('coding-interview')}
          >
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Mock Test</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Coding & DSA algorithms</p>
          </button>

          <button 
            className="glass-card hover-lift" 
            style={{ padding: '1.5rem', textAlign: 'center', border: '1px solid var(--accent-tertiary)', background: 'rgba(236, 72, 153, 0.05)', cursor: 'pointer', color: '#fff' }}
            onClick={() => setActivePage('aptitude-prep')}
          >
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Aptitude Round</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Logical & Quantitative</p>
          </button>

          <button 
            className="glass-card hover-lift" 
            style={{ padding: '1.5rem', textAlign: 'center', border: '1px solid var(--accent-primary)', background: 'rgba(139, 92, 246, 0.1)', cursor: 'pointer', color: '#fff' }}
            onClick={() => setActivePage('interview-generator')}
          >
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>AI Interviewer</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Authentic Voice & Gesture analysis</p>
          </button>
        </div>

        {/* Interview Process and Tips */}

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '1.5rem' }} className="details-grid">
          
          {/* Left Column: Process & OA */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h3 style={{ fontSize: '1.15rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <TrendingUp size={18} style={{ color: 'var(--accent-primary)' }} />
                Interview Process Steps
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
                {data.process.map((step, idx) => (
                  <p key={idx} style={{ color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {step}
                  </p>
                ))}
              </div>
            </div>

            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h3 style={{ fontSize: '1.15rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ShieldCheck size={18} style={{ color: 'var(--accent-secondary)' }} />
                Online Assessment (OA) Pattern
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                {data.oaPattern}
              </p>
            </div>
          </div>

          {/* Right Column: Tips */}
          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <h3 style={{ fontSize: '1.15rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Lightbulb size={18} style={{ color: 'var(--accent-tertiary)' }} />
              Pro Tips
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.85rem' }}>
              {data.tips.map((tip, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <span style={{ 
                    background: 'rgba(236, 72, 153, 0.1)', 
                    color: 'var(--accent-tertiary)', 
                    borderRadius: '50%',
                    width: '18px',
                    height: '18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    flexShrink: 0
                  }}>
                    {idx + 1}
                  </span>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.4 }}>{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Salary Insights - Custom Styled Chart */}
        <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <h3 style={{ fontSize: '1.15rem' }}>Salary Insights (Total Comp Breakdown)</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
              Average compensation metrics sorted by organizational grading levels.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {data.salaries.map((sal, idx) => {
              // Parse total comp numeric value
              const totalVal = parseInt(sal.total.replace('k', ''));
              // Scale relative to staff max (~640)
              const barPercent = Math.min((totalVal / 650) * 100, 100);

              return (
                <div key={idx} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', alignItems: 'center', gap: '1rem' }} className="salary-row">
                  <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>{sal.level}</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                    <div style={{ 
                      height: '24px', 
                      background: 'rgba(255,255,255,0.03)', 
                      borderRadius: '6px', 
                      overflow: 'hidden', 
                      position: 'relative' 
                    }}>
                      <div style={{ 
                        width: `${barPercent}%`, 
                        height: '100%', 
                        background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))',
                        borderRadius: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        paddingRight: '0.75rem',
                        color: '#fff',
                        fontSize: '0.8rem',
                        fontWeight: 'bold',
                        transition: 'width 0.5s ease-out'
                      }}>
                        ${sal.total}
                      </div>
                    </div>
                    {/* TC Segmentations details */}
                    <div style={{ display: 'flex', gap: '1rem', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                      <span>Base: ${sal.base}</span>
                      <span>•</span>
                      <span>Equity: ${sal.equity}</span>
                      <span>•</span>
                      <span>Bonus: ${sal.bonus}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* FAQs */}
        <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <h3 style={{ fontSize: '1.15rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <HelpCircle size={18} style={{ color: 'var(--accent-primary)' }} />
            Frequently Asked Questions
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {data.faqs.map((faq, idx) => (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>Q: {faq.q}</span>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, paddingLeft: '1rem' }}>
                  A: {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .company-layout {
            grid-template-columns: 1fr !important;
          }
          .details-grid {
            grid-template-columns: 1fr !important;
          }
          .salary-row {
            grid-template-columns: 1fr !important;
            gap: 0.25rem !important;
          }
        }
      `}</style>
    </div>
  );
}
