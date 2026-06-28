import React from 'react';
import { Cpu, Github } from 'lucide-react';

export default function Footer({ setActivePage }) {
  const navigateTo = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      borderTop: '1px solid var(--glass-border)',
      background: 'rgba(5, 3, 12, 0.65)',
      padding: '3rem 0 2rem 0',
      marginTop: '4rem'
    }}>
      <div className="container" style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem'
      }}>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '2rem'
        }}>
          {/* Logo and Tagline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: '350px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{
                background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                borderRadius: '6px',
                padding: '0.3rem',
                color: '#fff',
                display: 'flex',
                alignItems: 'center'
              }}>
                <Cpu size={16} />
              </div>
              <span style={{ fontSize: '1.1rem', fontWeight: 800 }}>InterviewVerse AI</span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              Everything you need to crack your next interview—AI mock interviews, coding practice, resume analysis, company guides, and career preparation—all in one place, no signup required.
            </p>
          </div>

          {/* Quick Links */}
          <div style={{ display: 'flex', gap: '4rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-primary)' }}>Prepare</span>
              <span onClick={() => navigateTo('interview-generator')} style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', cursor: 'pointer' }} className="footer-link">AI Mock Interviews</span>
              <span onClick={() => navigateTo('coding-interview')} style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', cursor: 'pointer' }} className="footer-link">Coding Sandbox</span>
              <span onClick={() => navigateTo('resume-analyzer')} style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', cursor: 'pointer' }} className="footer-link">ATS Resume Audit</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-secondary)' }}>Practice</span>
              <span onClick={() => navigateTo('dsa-hub')} style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', cursor: 'pointer' }} className="footer-link">DSA Hub</span>
              <span onClick={() => navigateTo('aptitude-prep')} style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', cursor: 'pointer' }} className="footer-link">Aptitude Tests</span>
              <span onClick={() => navigateTo('communication-practice')} style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', cursor: 'pointer' }} className="footer-link">Voice Coach</span>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid var(--glass-border)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} InterviewVerse AI. Open-source MVP.
          </span>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.4rem', 
              fontSize: '0.8rem', 
              color: 'var(--text-secondary)',
              transition: 'color 0.2s'
            }}
            className="footer-link"
          >
            <Github size={14} />
            GitHub Project
          </a>
        </div>
      </div>
      
      <style>{`
        .footer-link:hover {
          color: var(--text-primary) !important;
        }
      `}</style>
    </footer>
  );
}
