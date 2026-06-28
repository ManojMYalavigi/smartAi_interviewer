import React, { useState, useEffect } from 'react';
import { Briefcase, CheckCircle2, Map, ListCollapse, FolderGit2, BookOpen } from 'lucide-react';
import { rolesData } from '../data/roles';

export default function RolePrep() {
  const [selectedRole, setSelectedRole] = useState('frontend-developer');
  const roleKeys = Object.keys(rolesData);
  const data = rolesData[selectedRole];

  // Retrieve cached role from search bar
  useEffect(() => {
    const cached = localStorage.getItem('selectedRolePrep');
    if (cached && rolesData[cached]) {
      setSelectedRole(cached);
      localStorage.removeItem('selectedRolePrep'); // Consume key
    }
  }, []);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: '2rem' }} className="role-layout">
      
      {/* SIDEBAR LIST */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', maxHeight: '80vh', overflowY: 'auto', paddingRight: '0.25rem' }}>
        <h3 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '0.5rem', paddingLeft: '0.5rem' }}>
          Tech Careers
        </h3>
        {roleKeys.map((key) => (
          <button
            key={key}
            onClick={() => setSelectedRole(key)}
            className="btn btn-secondary"
            style={{
              justifyContent: 'flex-start',
              background: selectedRole === key ? 'rgba(var(--accent-primary-rgb), 0.15)' : 'transparent',
              borderColor: selectedRole === key ? 'var(--accent-primary)' : 'transparent',
              width: '100%',
              padding: '0.5rem 0.75rem',
              fontSize: '0.85rem'
            }}
          >
            <Briefcase size={14} />
            {rolesData[key].title}
          </button>
        ))}
      </div>

      {/* DASHBOARD DETAILS */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }} className="animate-fade-in">
        
        {/* Core Header Card */}
        <div className="glass-card">
          <span style={{ fontSize: '0.8rem', color: 'var(--accent-primary)', fontWeight: 700, textTransform: 'uppercase' }}>Preparation Hub</span>
          <h2 style={{ fontSize: '2rem', marginTop: '0.25rem' }}>{data.title}</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
            A comprehensive, custom curriculum outlining essential skills, practice topics, structured guides, and recommended study notes.
          </p>
        </div>

        {/* Required Skills Grid */}
        <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h3 style={{ fontSize: '1.15rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <CheckCircle2 size={18} style={{ color: 'var(--accent-secondary)' }} />
            Core Competency Checklist
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {data.skills.map((skill, idx) => (
              <span key={idx} className="badge badge-primary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Roadmap Steps */}
        <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h3 style={{ fontSize: '1.15rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Map size={18} style={{ color: 'var(--accent-primary)' }} />
            Milestone Timeline Roadmap
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', position: 'relative', paddingLeft: '1.5rem', borderLeft: '2px dashed var(--glass-border)' }}>
            {data.roadmap.map((phase, idx) => (
              <div key={idx} style={{ position: 'relative' }}>
                {/* Bullet */}
                <div style={{
                  position: 'absolute',
                  left: '-31px',
                  top: '4px',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: 'var(--accent-primary)',
                  boxShadow: 'var(--glow-shadow)'
                }} />
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
                    <h4 style={{ fontSize: '1rem' }}>{phase.phase}</h4>
                    <span className="badge badge-secondary" style={{ fontSize: '0.7rem' }}>{phase.duration}</span>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.25rem' }}>
                    {phase.topics.map((t, i) => (
                      <span key={i} style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--glass-border)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Practice Coding Topics & Projects */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '1.5rem' }} className="skills-grid-row">
          
          {/* Coding Topics */}
          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3 style={{ fontSize: '1.15rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <ListCollapse size={18} style={{ color: 'var(--accent-secondary)' }} />
              High-Frequency Coding Topics
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', listStyle: 'none', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              {data.codingTopics.map((topic, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-secondary)' }} />
                  {topic}
                </li>
              ))}
            </ul>
          </div>

          {/* Target Projects */}
          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <h3 style={{ fontSize: '1.15rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FolderGit2 size={18} style={{ color: 'var(--accent-tertiary)' }} />
              Recommended Capstone Projects
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {data.projects.map((proj, idx) => (
                <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', background: 'rgba(255,255,255,0.01)', border: '1px solid var(--glass-border)', padding: '0.75rem', borderRadius: '8px' }}>
                  <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)' }}>{proj.name}</span>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>{proj.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: '0.4rem' }}>
                    {proj.tech.map((t, i) => (
                      <span key={i} style={{ fontSize: '0.7rem', color: 'var(--accent-tertiary)', border: '1px solid rgba(236, 72, 153, 0.2)', padding: '0.05rem 0.35rem', borderRadius: '4px' }}>{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Resources */}
        <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h3 style={{ fontSize: '1.15rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <BookOpen size={18} style={{ color: 'var(--accent-primary)' }} />
            Curated Study chest Links
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            {data.resources.map((res, idx) => (
              <a
                key={idx}
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-item"
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.25rem', padding: '0.75rem 1rem' }}
              >
                <span className="badge badge-secondary" style={{ fontSize: '0.65rem' }}>{res.type}</span>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '0.25rem' }}>{res.title}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .role-layout {
            grid-template-columns: 1fr !important;
          }
          .skills-grid-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
