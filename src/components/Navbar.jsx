import React, { useState } from 'react';
import { Sun, Moon, Cpu, Menu, X, Grid } from 'lucide-react';

export default function Navbar({ activePage, setActivePage, isLight, setIsLight }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hubOpen, setHubOpen] = useState(false);

  const toggleTheme = () => {
    setIsLight(!isLight);
    const htmlElement = document.documentElement;
    if (!isLight) {
      htmlElement.classList.add('light');
    } else {
      htmlElement.classList.remove('light');
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'interview-generator', label: 'AI Mock' },
    { id: 'coding-interview', label: 'Code Lab' },
    { id: 'resume-analyzer', label: 'Resume Review' }
  ];

  const tools = [
    { id: 'company-library', name: 'Company Library', desc: 'Hiring guides & FAQs' },
    { id: 'role-prep', name: 'Role Prep', desc: 'Roadmaps & skill grids' },
    { id: 'dsa-hub', name: 'DSA Hub', desc: 'Theory & code animations' },
    { id: 'aptitude-prep', name: 'Aptitude Practice', desc: 'Timed reasoning tests' },
    { id: 'communication-practice', name: 'Voice Prep', desc: 'Filler word counters' },
    { id: 'body-language-demo', name: 'Biometric Tracker', desc: 'Webcam scanner HUD' },
    { id: 'roadmap-generator', name: 'Roadmap Maker', desc: 'AI custom timeline' },
    { id: 'question-library', name: 'Question Bank', desc: '500+ questions filtered' },
    { id: 'career-assistant', name: 'Career Chat', desc: 'Instant salary Q&A' },
    { id: 'learning-resources', name: 'Study Chest', desc: 'Curated cheat sheets' }
  ];

  const navigateTo = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    setHubOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="glass-panel" style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      borderBottom: '1px solid var(--glass-border)',
      padding: '0.85rem 0'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
        {/* Logo */}
        <div 
          onClick={() => navigateTo('home')} 
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', userSelect: 'none' }}
        >
          <div style={{
            background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
            borderRadius: '8px',
            padding: '0.4rem',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Cpu size={20} />
          </div>
          <span style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.03em' }}>
            Interview<span className="gradient-text">Verse</span> <span style={{ fontSize: '0.8rem', padding: '0.1rem 0.4rem', borderRadius: '4px', background: 'rgba(6, 182, 212, 0.1)', color: 'var(--accent-secondary)', fontWeight: 'bold' }}>AI</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }} className="desktop-only">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => navigateTo(item.id)}
              className="btn btn-secondary"
              style={{
                background: activePage === item.id ? 'rgba(var(--accent-primary-rgb), 0.15)' : 'transparent',
                borderColor: activePage === item.id ? 'var(--accent-primary)' : 'transparent',
                padding: '0.45rem 0.9rem',
                fontSize: '0.9rem'
              }}
            >
              {item.label}
            </button>
          ))}

          {/* Hub Dropdown Trigger */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setHubOpen(!hubOpen)}
              className="btn btn-secondary"
              style={{
                background: tools.some(t => t.id === activePage) ? 'rgba(var(--accent-primary-rgb), 0.15)' : 'transparent',
                borderColor: tools.some(t => t.id === activePage) ? 'var(--accent-primary)' : 'rgba(255,255,255,0.05)',
                padding: '0.45rem 0.9rem',
                fontSize: '0.9rem',
                gap: '0.25rem'
              }}
            >
              <Grid size={15} />
              AI Tools
            </button>

            {/* Hub Dropdown Card */}
            {hubOpen && (
              <div 
                className="glass-card" 
                style={{
                  position: 'absolute',
                  top: '110%',
                  right: 0,
                  width: '450px',
                  gridTemplateColumns: '1fr 1fr',
                  display: 'grid',
                  gap: '0.75rem',
                  padding: '1rem',
                  background: 'rgba(10, 8, 25, 0.95)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                  border: '1px solid var(--glass-border-hover)'
                }}
              >
                {tools.map((tool) => (
                  <div
                    key={tool.id}
                    onClick={() => navigateTo(tool.id)}
                    className="glass-item"
                    style={{
                      padding: '0.5rem 0.75rem',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      gap: '0.1rem',
                      borderWidth: activePage === tool.id ? '1px' : '1px',
                      borderColor: activePage === tool.id ? 'var(--accent-primary)' : 'var(--glass-border)'
                    }}
                  >
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>{tool.name}</span>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{tool.desc}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div style={{ width: '1px', height: '24px', backgroundColor: 'var(--glass-border)', margin: '0 0.25rem' }} />

          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme} 
            className="btn btn-secondary" 
            style={{ borderRadius: '50%', width: '38px', height: '38px', padding: 0 }}
          >
            {isLight ? <Moon size={16} /> : <Sun size={16} />}
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }} className="mobile-only">
          <button 
            onClick={toggleTheme} 
            className="btn btn-secondary" 
            style={{ borderRadius: '50%', width: '34px', height: '34px', padding: 0 }}
          >
            {isLight ? <Moon size={14} /> : <Sun size={14} />}
          </button>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="btn btn-secondary" 
            style={{ padding: '0.4rem' }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Full Screen Menu */}
        {mobileMenuOpen && (
          <div className="glass-panel" style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            padding: '1.5rem',
            borderBottom: '1px solid var(--glass-border)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
            maxHeight: '80vh',
            overflowY: 'auto'
          }}>
            <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>Primary Modules</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => navigateTo(item.id)}
                  className="btn btn-secondary"
                  style={{ justifyContent: 'flex-start', width: '100%', background: activePage === item.id ? 'rgba(var(--accent-primary-rgb), 0.1)' : 'transparent' }}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.05em', marginTop: '0.5rem' }}>Additional AI Tools</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
              {tools.map(tool => (
                <button
                  key={tool.id}
                  onClick={() => navigateTo(tool.id)}
                  className="btn btn-secondary"
                  style={{ 
                    fontSize: '0.75rem', 
                    padding: '0.5rem', 
                    justifyContent: 'flex-start',
                    background: activePage === tool.id ? 'rgba(var(--accent-primary-rgb), 0.1)' : 'transparent' 
                  }}
                >
                  {tool.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* CSS Helper for responsive controls inside JS directly */}
      <style>{`
        @media (min-width: 801px) {
          .mobile-only { display: none !important; }
        }
        @media (max-width: 800px) {
          .desktop-only { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
