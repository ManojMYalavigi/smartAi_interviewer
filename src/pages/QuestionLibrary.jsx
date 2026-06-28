import React, { useState } from 'react';
import { Search, SlidersHorizontal, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import { questionsData } from '../data/questions';

export default function QuestionLibrary() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeDiff, setActiveDiff] = useState('All');
  const [activeComp, setActiveComp] = useState('All');

  // Track expanded question IDs to show answer
  const [expandedId, setExpandedId] = useState(null);

  const categories = ["All", "HR", "Behavioral", "Technical"];
  const difficulties = ["All", "Easy", "Medium", "Hard"];
  const companies = ["All", "Google", "Meta", "Amazon", "Microsoft", "Netflix", "Stripe"];

  // Filter logic
  const filteredQuestions = questionsData.filter(q => {
    const matchesSearch = q.question.toLowerCase().includes(search.toLowerCase()) || 
                          q.category.toLowerCase().includes(search.toLowerCase());
    
    const matchesCat = activeCategory === 'All' || q.category === activeCategory;
    const matchesDiff = activeDiff === 'All' || q.difficulty === activeDiff;
    const matchesComp = activeComp === 'All' || q.companyTags.includes(activeComp);

    return matchesSearch && matchesCat && matchesDiff && matchesComp;
  });

  const toggleExpand = (id) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      
      {/* HEADER CARD */}
      <div className="glass-card">
        <span style={{ fontSize: '0.8rem', color: 'var(--accent-primary)', fontWeight: 700, textTransform: 'uppercase' }}>Question Repository</span>
        <h2 style={{ fontSize: '1.75rem', marginTop: '0.25rem' }}>Core Interview Question Bank</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
          Explore hundreds of tech, HR, and behavioral questions. Filter by company, difficulty, or role tags, and review optimized model answers.
        </p>
      </div>

      {/* FILTERS BAR */}
      <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        
        {/* Search & Sliders */}
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <div style={{ position: 'relative', flex: 1 }}>
            <input
              type="text"
              className="glass-input"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by keywords (e.g. recursion, dynamic programming)"
              style={{ paddingLeft: '2.5rem' }}
            />
            <Search size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          </div>
        </div>

        {/* Categories, Difficulty, and Companies filters row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }} className="filters-grid">
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--text-secondary)' }}>Category</span>
            <select className="glass-input" value={activeCategory} onChange={(e) => setActiveCategory(e.target.value)}>
              {categories.map((c, i) => <option key={i} value={c}>{c}</option>)}
            </select>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--text-secondary)' }}>Difficulty</span>
            <select className="glass-input" value={activeDiff} onChange={(e) => setActiveDiff(e.target.value)}>
              {difficulties.map((d, i) => <option key={i} value={d}>{d}</option>)}
            </select>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--text-secondary)' }}>Company Tags</span>
            <select className="glass-input" value={activeComp} onChange={(e) => setActiveComp(e.target.value)}>
              {companies.map((co, i) => <option key={i} value={co}>{co}</option>)}
            </select>
          </div>

        </div>
      </div>

      {/* QUESTIONS LIST */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Found {filteredQuestions.length} matched questions
          </span>
        </div>

        {filteredQuestions.length === 0 ? (
          <div className="glass-card" style={{ textAlign: 'center', padding: '3rem 1.5rem', color: 'var(--text-secondary)' }}>
            No questions found matching your filter parameters. Try expanding your search queries.
          </div>
        ) : (
          filteredQuestions.map((q) => {
            const isExpanded = expandedId === q.id;
            return (
              <div 
                key={q.id}
                className="glass-card"
                style={{ 
                  padding: '1.25rem', 
                  cursor: 'pointer',
                  borderColor: isExpanded ? 'var(--accent-primary)' : 'var(--glass-border)',
                  background: isExpanded ? 'rgba(var(--accent-primary-rgb), 0.02)' : 'var(--glass-bg)'
                }}
                onClick={() => toggleExpand(q.id)}
              >
                
                {/* Collapsed Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', alignItems: 'center' }}>
                      <span className="badge badge-primary" style={{ fontSize: '0.65rem' }}>{q.category}</span>
                      <span className="badge badge-secondary" style={{ fontSize: '0.65rem' }}>{q.difficulty}</span>
                      {q.companyTags.slice(0, 2).map((comp, i) => (
                        <span key={i} style={{ fontSize: '0.65rem', color: 'var(--text-muted)', background: 'rgba(255,255,255,0.02)', padding: '0.1rem 0.4rem', borderRadius: '4px', border: '1px solid var(--glass-border)' }}>
                          {comp}
                        </span>
                      ))}
                    </div>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 650, marginTop: '0.25rem' }}>{q.question}</h3>
                  </div>

                  <div>
                    {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </div>

                {/* Expanded Answer Body */}
                {isExpanded && (
                  <div 
                    style={{ 
                      marginTop: '1.25rem', 
                      paddingTop: '1.25rem', 
                      borderTop: '1px solid var(--glass-border)',
                      fontSize: '0.9rem',
                      lineHeight: 1.6,
                      color: 'var(--text-secondary)'
                    }}
                    onClick={(e) => e.stopPropagation()} // Avoid re-collapsing when highlighting text
                  >
                    <span style={{ fontWeight: 'bold', color: 'var(--accent-secondary)', display: 'block', marginBottom: '0.4rem' }}>
                      Ideal Model Answer:
                    </span>
                    <p style={{ whiteSpace: 'pre-line' }}>{q.answer}</p>
                  </div>
                )}

              </div>
            );
          })
        )}
      </div>

      <style>{`
        @media (max-width: 600px) {
          .filters-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
