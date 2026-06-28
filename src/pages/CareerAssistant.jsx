import React, { useState } from 'react';
import { Cpu, Send, Sparkles, MessageSquare } from 'lucide-react';

export default function CareerAssistant() {
  const [messages, setMessages] = useState([
    { sender: 'ai', text: "Hello! I am your AI Career Assistant. Ask me anything about salary negotiation, tricky behavioral prompts, resume hooks, or FAANG-specific loops. You can type a question or choose a preset below!" }
  ]);
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);

  const presets = [
    "How do I answer 'Tell me about yourself'?",
    "How do I negotiate a software engineering salary?",
    "How do I prepare for Amazon leadership principles?",
    "What projects are best for frontend resumes?"
  ];

  const handleSendMessage = (textToSend) => {
    if (!textToSend.trim() || loading) return;

    // Add user message
    const userMsg = { sender: 'user', text: textToSend };
    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setLoading(true);

    // Simulate AI response
    setTimeout(() => {
      let replyText = "";
      const lower = textToSend.toLowerCase();

      if (lower.includes('tell me about yourself')) {
        replyText = "To answer 'Tell me about yourself' effectively, follow the Present-Past-Future framework:\n\n1. Present: State your current title and a key highlight (e.g. 'I am a Senior Frontend Engineer leading React performance refactors...').\n2. Past: Briefly mention your career progression, specifying key milestones or domain changes.\n3. Future: Pivot directly to why this role and company are the logical next step in your trajectory.";
      } else if (lower.includes('negotiate') || lower.includes('salary')) {
        replyText = "When negotiating compensation:\n\n1. Avoid anchoring first: If asked for salary requirements, deflect (e.g., 'I want to focus on alignment first. What range does this role budget?').\n2. Use data anchors: Reference verified compensation websites (e.g. Levels.fyi) for total compensation (TC), including base, equity, and signing bonuses.\n3. Leverage multiple offers: Be collaborative rather than demanding (e.g., 'I am highly aligned to your mission, but I have a competing offer at $160K base. Can we narrow that gap?').";
      } else if (lower.includes('amazon') || lower.includes('leadership')) {
        replyText = "For Amazon interview loops, leadership principles (LPs) are crucial. Prepare 2 STAR stories for each principle:\n\n- Customer Obsession: A time you went out of scope to satisfy a client request.\n- Bias for Action: A time you made a critical choice without complete data.\n- Ownership: A time you fixed a system bug outside your project parameters.\n\nStructure stories exactly: Situation (10%), Task (10%), Action (60%), Result (20% with quantitative metrics).";
      } else if (lower.includes('project') || lower.includes('frontend')) {
        replyText = "Top frontend projects that stand out to recruiters:\n\n1. Real-time SVG Canvas: A collaborative design dashboard using WebSockets and canvas rendering (shows deep knowledge of DOM/performance).\n2. Modular Web Analytics Framework: A package analyzing page events, viewport scrolls, and reporting metrics (shows JS SDK logic).\n3. Offline-First Kanban workspace: Features drag-and-drop elements with IndexedDB synching (shows client-side storage mastery).";
      } else {
        replyText = "That is a great question. For high-impact interviews, always apply the STAR framework (Situation, Task, Action, Result) for behavioral prompts, explain your logic out loud during coding blocks, and research the company's technical blog for architecture requirements.";
      }

      setMessages(prev => [...prev, { sender: 'ai', text: replyText }]);
      setLoading(false);
    }, 1500);
  };

  return (
    <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      
      {/* HEADER */}
      <div className="glass-card">
        <span style={{ fontSize: '0.8rem', color: 'var(--accent-primary)', fontWeight: 700, textTransform: 'uppercase' }}>Career Strategy Console</span>
        <h2 style={{ fontSize: '1.75rem', marginTop: '0.25rem' }}>AI Career Assistant</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
          Consult our interactive career chatbot anonymously. Ask questions regarding salary negotiation, elevator pitches, and tricky behavioral rounds.
        </p>
      </div>

      {/* CHAT INTERFACE */}
      <div className="glow-card" style={{ 
        height: '500px', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between',
        padding: 0,
        overflow: 'hidden'
      }}>
        
        {/* Chat Header */}
        <div style={{ padding: '0.75rem 1.25rem', borderBottom: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(0,0,0,0.15)' }}>
          <Cpu size={16} style={{ color: 'var(--accent-primary)' }} />
          <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>Career Coach Console</span>
        </div>

        {/* Message feed */}
        <div style={{ 
          flex: 1, 
          padding: '1.5rem', 
          overflowY: 'auto', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '1rem',
          background: 'rgba(0,0,0,0.1)'
        }}>
          {messages.map((msg, idx) => {
            const isAI = msg.sender === 'ai';
            return (
              <div 
                key={idx} 
                style={{ 
                  display: 'flex', 
                  justifyContent: isAI ? 'flex-start' : 'flex-end',
                  width: '100%'
                }}
              >
                <div style={{ 
                  maxWidth: '75%', 
                  background: isAI ? 'var(--glass-bg)' : 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                  border: isAI ? '1px solid var(--glass-border)' : '1px solid transparent',
                  padding: '0.85rem 1.25rem',
                  borderRadius: isAI ? '16px 16px 16px 4px' : '16px 16px 4px 16px',
                  color: '#fff',
                  fontSize: '0.9rem',
                  lineHeight: 1.5,
                  whiteSpace: 'pre-line'
                }}>
                  {msg.text}
                </div>
              </div>
            );
          })}

          {loading && (
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
              <Sparkles size={14} className="pulse-glow-element" />
              <span>AI Assistant is writing a detailed response...</span>
            </div>
          )}
        </div>

        {/* Input area */}
        <div style={{ padding: '1rem', borderTop: '1px solid var(--glass-border)', display: 'flex', flexDirection: 'column', gap: '0.75rem', background: 'rgba(0,0,0,0.2)' }}>
          
          {/* Preset Buttons */}
          <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.25rem' }}>
            {presets.map((p, idx) => (
              <button 
                key={idx}
                className="btn btn-secondary" 
                style={{ fontSize: '0.75rem', padding: '0.35rem 0.75rem', whiteSpace: 'nowrap' }}
                onClick={() => handleSendMessage(p)}
              >
                {p}
              </button>
            ))}
          </div>

          {/* Form Input */}
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(inputText);
            }}
            style={{ display: 'flex', gap: '0.5rem' }}
          >
            <input
              type="text"
              className="glass-input"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask a custom career question..."
              disabled={loading}
            />
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={loading || !inputText.trim()}
              style={{ padding: '0 1.25rem' }}
            >
              <Send size={15} />
            </button>
          </form>
        </div>

      </div>

    </div>
  );
}
