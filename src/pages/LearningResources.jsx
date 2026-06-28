import React, { useState } from 'react';
import { BookOpen, Video, FileSpreadsheet, ExternalLink } from 'lucide-react';

export default function LearningResources() {
  const [activeTab, setActiveTab] = useState('coding');

  const resourceLists = {
    'coding': [
      { title: "NeetCode Practice Sheet", desc: "A curated list of LeetCode questions categorized by difficulty and data structure patterns.", type: "Practice Link", url: "https://neetcode.io" },
      { title: "Big-O Cheat Sheet", desc: "A reference card highlighting the time and space complexity of sorting, searching, and structures.", type: "Cheat Sheet", url: "https://www.bigocheatsheet.com" },
      { title: "Visualgo Algorithm Animations", desc: "Interactive visualization animations showing sorting, binary heaps, and graph traversals in action.", type: "Visualizer", url: "https://visualgo.net" }
    ],
    'frontend': [
      { title: "MDN Web Docs - JS Guide", desc: "The definitive guide to JavaScript fundamentals, DOM API bindings, event loops, and asynchronous behaviors.", type: "Docs", url: "https://developer.mozilla.org" },
      { title: "React Dev Documentation", desc: "Official guidelines detailing React state hooks, context, custom actions, and render optimizations.", type: "Docs", url: "https://react.dev" },
      { title: "CSS-Tricks Flexbox Guide", desc: "A comprehensive structural visual guide to configuring flexible boxes and grids on modern web layout targets.", type: "Cheat Sheet", url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox" }
    ],
    'systems': [
      { title: "System Design Primer", desc: "An open-source github repository outlining design fundamentals, databases, horizontal scaling, and network protocols.", type: "GitHub Guide", url: "https://github.com/donnemartin/system-design-primer" },
      { title: "ByteByteGo YouTube Channel", desc: "Excellent short animated videos detailing message queues, load balancers, CDN architectures, and caching.", type: "Video Tutorial", url: "https://www.youtube.com/@ByteByteGo" },
      { title: "Designing Data-Intensive Applications", desc: "A widely praised textbook analyzing core database engines, replication patterns, and transactional schemas.", type: "Book", url: "https://www.oreilly.com" }
    ]
  };

  const tabs = [
    { id: 'coding', label: 'Algorithms & DSA' },
    { id: 'frontend', label: 'Frontend Hub' },
    { id: 'systems', label: 'System Design & Backend' }
  ];

  return (
    <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      
      {/* HEADER CARD */}
      <div className="glass-card">
        <span style={{ fontSize: '0.8rem', color: 'var(--accent-primary)', fontWeight: 700, textTransform: 'uppercase' }}>Resources</span>
        <h2 style={{ fontSize: '1.75rem', marginTop: '0.25rem' }}>Curated Study Chest</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
          Access a curated collection of roadmaps, cheat sheets, video resources, and visual trace aids to accelerate your preparation.
        </p>
      </div>

      {/* TABS CONTAINER */}
      <div className="tab-container">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* RESOURCE LIST CARDS */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }} className="animate-slide-up">
        {resourceLists[activeTab].map((res, idx) => (
          <div key={idx} className="glass-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', maxWidth: '80%' }}>
              <div style={{ 
                padding: '0.65rem', 
                borderRadius: '10px', 
                background: 'rgba(var(--accent-primary-rgb), 0.1)', 
                color: 'var(--accent-primary)',
                flexShrink: 0
              }}>
                {res.type.includes('Video') ? <Video size={20} /> : <BookOpen size={20} />}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700 }}>{res.title}</h4>
                  <span className="badge badge-secondary" style={{ fontSize: '0.65rem' }}>{res.type}</span>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{res.desc}</p>
              </div>
            </div>

            <a 
              href={res.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary"
              style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', gap: '0.3rem' }}
            >
              Study Source
              <ExternalLink size={12} />
            </a>
          </div>
        ))}
      </div>

    </div>
  );
}
