import React, { useState } from 'react';
import { UploadCloud, FileText, CheckCircle2, AlertTriangle, RefreshCw, Star, Zap } from 'lucide-react';

export default function ResumeAnalyzer() {
  const [file, setFile] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [results, setResults] = useState(null);

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setIsScanning(true);
      
      // Simulate scanning delay
      setTimeout(() => {
        setIsScanning(false);
        setResults({
          score: 68,
          improvements: [
            {
              original: "Responsible for managing a team of 5 people.",
              issue: "Weak Action Verb & Missing Metrics",
              corrected: "Directed a cross-functional team of 5, increasing delivery efficiency by 40%."
            },
            {
              original: "Helped make the website faster.",
              issue: "Vague Description",
              corrected: "Optimized frontend rendering paths, reducing load times by 1.2s and boosting conversion by 15%."
            },
            {
              original: "Worked on the backend database.",
              issue: "Passive Voice",
              corrected: "Architected scalable PostgreSQL database schemas supporting 10k+ concurrent users."
            }
          ]
        });
      }, 2500);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', padding: '1rem' }}>
      
      <div style={{ textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', marginBottom: '1rem' }}>
          <span className="badge badge-primary" style={{ gap: '0.4rem', padding: '0.5rem 1rem' }}>
            <Zap size={14} fill="currentColor" />
            PrepEase ATS Engine
          </span>
        </div>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1rem' }}>Resume Analyser & Auto-Corrector</h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
          Upload your resume to receive an instant ATS score and let our AI rewrite your weak bullet points into high-impact, metric-driven statements.
        </p>
      </div>

      {!results && !isScanning && (
        <div 
          className="glass-card hover-lift"
          style={{ 
            maxWidth: '600px', 
            margin: '0 auto', 
            padding: '4rem 2rem', 
            textAlign: 'center',
            border: '2px dashed rgba(139, 92, 246, 0.4)',
            cursor: 'pointer',
            position: 'relative'
          }}
        >
          <input 
            type="file" 
            accept=".pdf,.doc,.docx"
            onChange={handleFileUpload}
            style={{ 
              position: 'absolute', 
              top: 0, left: 0, width: '100%', height: '100%', 
              opacity: 0, cursor: 'pointer' 
            }}
          />
          <UploadCloud size={48} style={{ color: 'var(--accent-primary)', margin: '0 auto 1rem' }} />
          <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Drag & Drop your Resume</h3>
          <p style={{ color: 'var(--text-secondary)' }}>Supports PDF, DOCX (Max 5MB)</p>
        </div>
      )}

      {isScanning && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', padding: '4rem 0' }}>
          <RefreshCw size={48} className="spin-slow" style={{ color: 'var(--accent-primary)' }} />
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Analyzing Document...</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Extracting semantic meaning, checking action verbs, and evaluating ATS parsability.</p>
          </div>
          {/* Progress bar simulation */}
          <div style={{ width: '300px', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
             <div style={{ width: '60%', height: '100%', background: 'var(--accent-primary)', transition: 'width 2s ease-out' }} />
          </div>
        </div>
      )}

      {results && (
        <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '3rem', maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
          
          {/* Score Header */}
          <div className="glass-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '3rem', background: 'radial-gradient(circle at right, rgba(139,92,246,0.15) 0%, transparent 60%)' }}>
             <div>
                <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Scan Complete</h2>
                <p style={{ color: 'var(--text-secondary)' }}><FileText size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.25rem' }} /> {file?.name}</p>
             </div>
             <div style={{ textAlign: 'center' }}>
               <div style={{ fontSize: '3.5rem', fontWeight: 800, color: results.score > 75 ? '#10b981' : '#f59e0b', lineHeight: 1 }}>
                 {results.score}<span style={{ fontSize: '1.5rem' }}>/100</span>
               </div>
               <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>ATS Match Score</span>
             </div>
          </div>

          {/* Auto-Corrections */}
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Star size={24} style={{ color: 'var(--accent-primary)' }} />
              AI Auto-Corrections
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {results.improvements.map((imp, idx) => (
                <div key={idx} style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '1.5rem', alignItems: 'stretch' }} className="correction-grid">
                  
                  {/* Before */}
                  <div className="glass-card" style={{ borderLeft: '3px solid #ef4444', opacity: 0.8 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ef4444', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 700 }}>
                      <AlertTriangle size={16} /> ORIGINAL (WEAK)
                    </div>
                    <p style={{ color: 'var(--text-secondary)' }}>"{imp.original}"</p>
                    <div style={{ marginTop: '1rem', fontSize: '0.75rem', padding: '0.25rem 0.5rem', background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', borderRadius: '4px', display: 'inline-block' }}>
                      Issue: {imp.issue}
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
                    <RefreshCw size={24} style={{ transform: 'rotate(90deg)' }} />
                  </div>

                  {/* After */}
                  <div className="glass-card" style={{ borderLeft: '3px solid #10b981', background: 'rgba(16, 185, 129, 0.05)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#10b981', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 700 }}>
                      <CheckCircle2 size={16} /> PREPEASE CORRECTED
                    </div>
                    <p style={{ fontSize: '1.05rem', fontWeight: 500, color: 'var(--text-primary)' }}>"{imp.corrected}"</p>
                  </div>

                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
            <button className="btn btn-primary" onClick={() => { setResults(null); setFile(null); }}>
              Analyze Another Resume
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 800px) {
          .correction-grid {
            grid-template-columns: 1fr !important;
          }
          .correction-grid > div:nth-child(2) {
            transform: rotate(90deg);
          }
        }
      `}</style>
    </div>
  );
}
