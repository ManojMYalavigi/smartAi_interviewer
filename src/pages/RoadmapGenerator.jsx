import React, { useState, useEffect } from 'react';
import { Map, Calendar, CheckSquare, RefreshCw, Bookmark } from 'lucide-react';

export default function RoadmapGenerator() {
  const [role, setRole] = useState('Frontend Developer');
  const [duration, setDuration] = useState('4 Weeks');
  const [roadmap, setRoadmap] = useState(null);

  // Load existing roadmap from local storage
  useEffect(() => {
    const saved = localStorage.getItem('generatedStudyRoadmap');
    if (saved) {
      setRoadmap(JSON.parse(saved));
    }
  }, []);

  const generateRoadmap = () => {
    // Generate simulated schedule
    let schedule = [];
    const isShort = duration.includes('2');
    
    if (isShort) {
      schedule = [
        {
          week: "Week 1: Core Fundamentals & Algorithms",
          goal: "Revise system syntax, core APIs, and solve 15 primary array/string algorithmic questions.",
          skills: ["Memory mapping", "Two Pointers", "Hashing tables", "Complexity evaluation"],
          tasks: ["Day 1-2: Solve Two Sum and Sliding Window subsets", "Day 3-4: Build a basic single-threaded log utility", "Day 5-6: Walk through Binary Search tree traversals"]
        },
        {
          week: "Week 2: System Scalability & Mock Simulations",
          goal: "Design high availability systems, review company timelines, and execute 3 mock interviews.",
          skills: ["System design", "Load balancers", "STAR behavior stories"],
          tasks: ["Day 1-2: Review Google/Meta specific FAQ directories", "Day 3-4: Complete full AI Interview technical simulations", "Day 5: Revise ATS resume description benchmarks"]
        }
      ];
    } else {
      schedule = [
        {
          week: "Week 1: Foundations & Arrays",
          goal: "Establish memory constraints and master sliding windows and prefix-sum parameters.",
          skills: ["Complexity computation", "Two pointers", "Array sorting metrics"],
          tasks: ["Day 1-2: Implement custom memory buffer arrays", "Day 3-4: Solve LeetCode stock buy-sell variations", "Day 5-6: Step through visual reverse tracers"]
        },
        {
          week: "Week 2: Recursion & Trees",
          goal: "Verify DFS/BFS traversals, recursion constraints, and tree balancing logics.",
          skills: ["Recursion stack", "BFS queue", "Tree depth calculations"],
          tasks: ["Day 1-2: Solve binary tree maximum depth parameters", "Day 3-4: Build directory walking recursive scripts", "Day 5-6: Implement graph cycle checks"]
        },
        {
          week: "Week 3: Advanced Systems & DB normalizations",
          goal: "Discuss database scaling, ACID properties, cache invalidations, and system design structures.",
          skills: ["Database indexing", "Redis caches", "URL shortener designs"],
          tasks: ["Day 1-2: Map SQL tables for a multi-user blog", "Day 3-4: Draw API bounds for standard shopping carts", "Day 5-6: Configure local redis nodes for caching studies"]
        },
        {
          week: "Week 4: Final Audits & Live Mock Prep",
          goal: "Complete behavioral templates, run voice assessments, and perform webcam biometrics reviews.",
          skills: ["STAR structuring", "Verbal clarity", "Biometric positioning"],
          tasks: ["Day 1-2: Write STAR answers for Amazon leadership guidelines", "Day 3-4: Complete 2 full voice-coach simulations", "Day 5: Conduct ATS resume audits and export final files"]
        }
      ];
    }

    const generated = {
      role,
      duration,
      schedule
    };

    setRoadmap(generated);
    localStorage.setItem('generatedStudyRoadmap', JSON.stringify(generated));
  };

  const clearSaved = () => {
    localStorage.removeItem('generatedStudyRoadmap');
    setRoadmap(null);
  };

  return (
    <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      
      {/* HEADER CARD */}
      <div className="glass-card">
        <span style={{ fontSize: '0.8rem', color: 'var(--accent-primary)', fontWeight: 700, textTransform: 'uppercase' }}>AI Timeline Generator</span>
        <h2 style={{ fontSize: '1.75rem', marginTop: '0.25rem' }}>Personalized Preparation Roadmaps</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
          Schedule your preparation timeline dynamically. Enter target roles and available weeks to compile an action calendar immediately—no account required.
        </p>
      </div>

      {/* INPUT FORM */}
      {!roadmap ? (
        <div className="glow-card animate-slide-up" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h3 style={{ fontSize: '1.25rem' }}>Configure Timeline Schedule</h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="details-grid">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: 'bold' }}>Target Career Role</label>
              <select className="glass-input" value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="Backend Developer">Backend Developer</option>
                <option value="Full Stack Developer">Full Stack Developer</option>
                <option value="AI Engineer">AI Engineer</option>
                <option value="DevOps Engineer">DevOps Engineer</option>
              </select>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: 'bold' }}>Preparation Window</label>
              <select className="glass-input" value={duration} onChange={(e) => setDuration(e.target.value)}>
                <option value="2 Weeks">2 Weeks (Expedited Sprint)</option>
                <option value="4 Weeks">4 Weeks (Standard Preparation)</option>
              </select>
            </div>
          </div>

          <button className="btn btn-primary" onClick={generateRoadmap} style={{ padding: '0.9rem', borderRadius: '12px' }}>
            Generate Custom Schedule
          </button>
        </div>
      ) : (
        /* ROADMAP DISPLAY SPREADSHEET */
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }} className="animate-slide-up">
          
          {/* Controls Bar */}
          <div className="glass-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span style={{ fontSize: '0.8rem', color: 'var(--accent-secondary)', fontWeight: 700 }}>Generated Roadmap</span>
              <h3 style={{ fontSize: '1.25rem', marginTop: '0.1rem' }}>{roadmap.role} • {roadmap.duration} Plan</h3>
            </div>
            
            <button className="btn btn-secondary" onClick={clearSaved} style={{ padding: '0.45rem 0.9rem', fontSize: '0.85rem', gap: '0.35rem' }}>
              <RefreshCw size={14} />
              Reconfigure
            </button>
          </div>

          {/* Schedule list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {roadmap.schedule.map((weekData, idx) => (
              <div key={idx} className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                
                {/* Week Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>
                  <Calendar size={16} style={{ color: 'var(--accent-primary)' }} />
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 750 }}>{weekData.week}</h4>
                </div>

                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  <strong>Objective:</strong> {weekData.goal}
                </p>

                {/* Skills tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {weekData.skills.map((s, i) => (
                    <span key={i} className="badge badge-primary" style={{ fontSize: '0.7rem' }}>
                      {s}
                    </span>
                  ))}
                </div>

                {/* Daily checklist */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--text-primary)', display: 'block' }}>Daily Study Tasks:</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {weekData.tasks.map((task, i) => (
                      <div key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', fontSize: '0.85rem' }}>
                        <CheckSquare size={15} style={{ color: 'var(--accent-secondary)', flexShrink: 0, marginTop: '2.5px' }} />
                        <span style={{ color: 'var(--text-secondary)', lineHeight: 1.4 }}>{task}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      )}

      {/* STYLE COLLAPSING */}
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
