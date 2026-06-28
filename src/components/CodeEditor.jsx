import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, Copy, Check } from 'lucide-react';

export default function CodeEditor({ 
  code = '', 
  onChange, 
  language = 'javascript', 
  onRun, 
  onReset 
}) {
  const [copied, setCopied] = useState(false);
  const [lines, setLines] = useState([1]);

  useEffect(() => {
    const lineCount = code.split('\n').length;
    setLines(Array.from({ length: Math.max(lineCount, 1) }, (_, i) => i + 1));
  }, [code]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="glass-card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Editor Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.75rem 1.25rem',
        borderBottom: '1px solid var(--glass-border)',
        background: 'rgba(0, 0, 0, 0.2)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: '#ef4444'
          }} />
          <span style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: '#eab308'
          }} />
          <span style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: '#22c55e'
          }} />
          <span style={{ 
            marginLeft: '0.75rem', 
            fontSize: '0.85rem', 
            fontWeight: 600, 
            color: 'var(--text-secondary)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            {language}
          </span>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button 
            className="btn btn-secondary" 
            onClick={handleCopy}
            style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem', gap: '0.25rem' }}
            title="Copy Code"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            {copied ? 'Copied' : 'Copy'}
          </button>
          
          {onReset && (
            <button 
              className="btn btn-secondary" 
              onClick={onReset}
              style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem', gap: '0.25rem' }}
              title="Reset Code"
            >
              <RotateCcw size={14} />
              Reset
            </button>
          )}

          {onRun && (
            <button 
              className="btn btn-primary" 
              onClick={onRun}
              style={{ padding: '0.4rem 0.9rem', fontSize: '0.8rem', gap: '0.25rem' }}
            >
              <Play size={14} fill="white" />
              Run Tests
            </button>
          )}
        </div>
      </div>

      {/* Editor Body */}
      <div style={{ 
        display: 'flex', 
        flex: 1, 
        position: 'relative', 
        fontFamily: 'var(--font-mono)', 
        fontSize: '0.9rem',
        background: '#040209',
        overflow: 'hidden'
      }}>
        {/* Line Numbers */}
        <div style={{
          padding: '1rem 0.5rem 1rem 1rem',
          textAlign: 'right',
          color: 'var(--text-muted)',
          userSelect: 'none',
          borderRight: '1px solid rgba(255, 255, 255, 0.05)',
          background: 'rgba(0, 0, 0, 0.3)',
          display: 'flex',
          flexDirection: 'column',
          lineHeight: '1.5rem',
          minWidth: '3.5rem'
        }}>
          {lines.map((num) => (
            <div key={num}>{num}</div>
          ))}
        </div>

        {/* Text Area */}
        <textarea
          value={code}
          onChange={(e) => onChange(e.target.value)}
          spellCheck={false}
          style={{
            flex: 1,
            background: 'transparent',
            border: 'none',
            color: '#a5f3fc', // Ice cyan text for beautiful glow contrast
            padding: '1rem',
            resize: 'none',
            outline: 'none',
            lineHeight: '1.5rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.9rem',
            overflowY: 'auto',
            width: '100%',
            height: '100%',
            tabSize: 4
          }}
          placeholder="// Type your code here..."
          onKeyDown={(e) => {
            // Support tab indentation
            if (e.key === 'Tab') {
              e.preventDefault();
              const start = e.target.selectionStart;
              const end = e.target.selectionEnd;
              const val = e.target.value;
              const newVal = val.substring(0, start) + "    " + val.substring(end);
              onChange(newVal);
              // reset cursor position after state update
              setTimeout(() => {
                e.target.selectionStart = e.target.selectionEnd = start + 4;
              }, 0);
            }
          }}
        />
      </div>
    </div>
  );
}
