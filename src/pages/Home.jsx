import React from 'react';
import { Compass, Zap, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home({ setActivePage }) {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '85vh',
      textAlign: 'center',
      gap: '2.5rem',
      position: 'relative',
      zIndex: 10
    }}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}
      >
        <div style={{ display: 'inline-flex' }}>
          <span className="badge badge-primary" style={{ gap: '0.4rem', padding: '0.5rem 1rem' }}>
            <Zap size={14} fill="currentColor" />
            PrepEase
          </span>
        </div>

        <h1 style={{ fontSize: '4.5rem', lineHeight: 1.1, fontWeight: 850, letterSpacing: '-0.04em' }}>
          Your <span className="gradient-text">Interviewer</span>
        </h1>

        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
          Experience the most advanced, supportive, voice-driven AI interview. Enter the specific company training to land your dream role.
        </p>

        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button 
            className="btn btn-primary" 
            onClick={() => setActivePage('company-library')}
            style={{ padding: '1rem 2rem', fontSize: '1.1rem', borderRadius: '30px', cursor: 'pointer' }}
          >
            <Compass size={20} />
            Start the Preparation
          </button>

          <button 
            className="btn btn-primary" 
            onClick={() => setActivePage('aptitude-prep')}
            style={{ padding: '1rem 2rem', fontSize: '1.1rem', borderRadius: '30px', cursor: 'pointer', background: 'var(--accent-secondary)' }}
          >
            <Zap size={20} />
            Aptitude Practice
          </button>
          
          <button 
            className="btn btn-secondary" 
            onClick={() => setActivePage('resume-analyzer')}
            style={{ padding: '1rem 2rem', fontSize: '1.1rem', borderRadius: '30px', cursor: 'pointer' }}
          >
            <FileText size={20} />
            Resume Analyser
          </button>
        </div>
      </motion.div>
    </div>
  );
}
