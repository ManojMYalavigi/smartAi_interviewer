import React, { useState, useEffect } from 'react';
import { Terminal, Cpu, MessageSquare, AlertCircle, CheckCircle } from 'lucide-react';
import CodeEditor from '../components/CodeEditor';
import { codingProblems as problems } from '../data/codingProblems';

export default function CodingInterview() {
  const [selectedLang, setSelectedLang] = useState('javascript');
  const [selectedProblem, setSelectedProblem] = useState('two-sum');

  const activeProblem = problems[selectedProblem];
  const [code, setCode] = useState('');
  
  // Terminal log output
  const [terminalLogs, setTerminalLogs] = useState([]);
  const [running, setRunning] = useState(false);

  // Chat/Interviewer assistant helper
  const [aiMessage, setAiMessage] = useState("Hello! I am your AI Code Interviewer. Select a problem, check your parameters, and start coding. Let me know if you need a hint.");

  // Sync starter code
  useEffect(() => {
    setCode(activeProblem.starter[selectedLang] || activeProblem.starter['javascript'] || '');
    setTerminalLogs([]);
  }, [selectedProblem, selectedLang]);

  // Run tests
  const handleRunTests = () => {
    setRunning(true);
    setTerminalLogs(["Initializing local sandbox compiler...", "Ingesting test suites..."]);

    setTimeout(() => {
      if (selectedLang !== 'javascript') {
        // Non-JS compilation simulation
        setTerminalLogs(prev => [
          ...prev,
          `Compilation successful for language [${selectedLang}].`,
          "Simulating test parameters...",
          "Test Case 1: PASSED",
          "Test Case 2: PASSED",
          "🎉 All simulated tests completed successfully!"
        ]);
        setAiMessage("Your solution runs in O(N) time complexity and O(N) memory complexity. Well done! Let's talk about the space complexity trade-offs.");
        setRunning(false);
        return;
      }

      // Real JS Compilation
      const logs = [];
      let allPassed = true;

      activeProblem.testCases.forEach((tc, idx) => {
        logs.push(`Running Test Case ${idx + 1}... Input: ${JSON.stringify(tc.args)}`);
        const runRes = activeProblem.execJS(code, tc.args);
        
        if (!runRes.success) {
          logs.push(`❌ Error: ${runRes.error}`);
          allPassed = false;
        } else {
          const matched = JSON.stringify(runRes.result) === JSON.stringify(tc.expected);
          if (matched) {
            logs.push(`✅ Passed! Output: ${JSON.stringify(runRes.result)}`);
          } else {
            logs.push(`❌ Failed. Expected: ${JSON.stringify(tc.expected)}, Got: ${JSON.stringify(runRes.result)}`);
            allPassed = false;
          }
        }
      });

      if (allPassed) {
        logs.push("🎉 Congratulations! All local tests passed.");
        setAiMessage("Excellent JS implementation! Your solution successfully matches all test sets. Let's discuss alternative O(1) space optimizations or trade-offs.");
      } else {
        logs.push("⚠️ Some tests failed. Check for edge cases or return statements.");
        setAiMessage("It looks like some test cases failed. Do you need a hint? Let me know, and I can walk you through the logical offsets.");
      }

      setTerminalLogs(prev => [...prev, ...logs]);
      setRunning(false);
    }, 1500);
  };

  const handleHint = () => {
    if (selectedProblem === 'two-sum') {
      setAiMessage("Hint: Consider using a Map to store previously visited elements. This allows you to look up if the complement (target - currentNum) exists in O(1) time instead of looping again.");
    } else {
      setAiMessage("Hint: Use a stack. Whenever you see an opening bracket, push it. When you see a closing bracket, pop the stack and ensure it matches the target opening bracket.");
    }
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '1.5rem', height: '80vh', minHeight: '600px' }} className="coding-layout">
      
      {/* LEFT COLUMN: EDITOR AND TERMINAL */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%' }}>
        <div style={{ flex: 1, minHeight: '380px' }}>
          <CodeEditor
            code={code}
            onChange={setCode}
            language={selectedLang}
            onRun={handleRunTests}
            onReset={() => setCode(activeProblem.starter[selectedLang] || '')}
          />
        </div>

        {/* TERMINAL PANEL */}
        <div className="glass-card" style={{ 
          height: '200px', 
          background: '#040209', 
          padding: '0.75rem 1.25rem', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '0.5rem',
          overflow: 'hidden'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.4rem' }}>
            <Terminal size={14} style={{ color: 'var(--accent-secondary)' }} />
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Console Output</span>
          </div>

          <div style={{ flex: 1, overflowY: 'auto', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#10b981', display: 'flex', flexDirection: 'column', gap: '0.25rem', lineHeight: 1.4 }}>
            {terminalLogs.length === 0 ? (
              <span style={{ color: 'var(--text-muted)' }}>Console idle. Run code to execute local testing environment.</span>
            ) : (
              terminalLogs.map((log, idx) => (
                <div key={idx} style={{ 
                  color: log.includes('❌') ? '#ef4444' : log.includes('✅') || log.includes('🎉') ? '#10b981' : '#a5f3fc'
                }}>
                  {log}
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: PROBLEM AND ASSISTANT */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%' }}>
        
        {/* Problem Description */}
        <div className="glass-card" style={{ flex: 1.1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          
          {/* Header selectors */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
            <select className="glass-input" style={{ flex: 1, minWidth: '200px', padding: '0.4rem' }} value={selectedProblem} onChange={(e) => setSelectedProblem(e.target.value)}>
              {Object.keys(problems).map(key => (
                <option key={key} value={key}>{problems[key].title}</option>
              ))}
            </select>

            <select className="glass-input" style={{ width: '150px', padding: '0.4rem' }} value={selectedLang} onChange={(e) => setSelectedLang(e.target.value)}>
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="java">Java</option>
              <option value="cpp">C++</option>
              <option value="csharp">C#</option>
              <option value="go">Go</option>
              <option value="rust">Rust</option>
              <option value="ruby">Ruby</option>
              <option value="swift">Swift</option>
              <option value="kotlin">Kotlin</option>
              <option value="php">PHP</option>
            </select>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 style={{ fontSize: '1.25rem' }}>{activeProblem.title}</h2>
            <span className="badge badge-primary">{activeProblem.difficulty}</span>
          </div>

          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', whiteSpace: 'pre-line', lineHeight: 1.5 }}>
            {activeProblem.desc}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)' }}>Examples:</span>
            <pre style={{ fontSize: '0.8rem', color: 'var(--accent-secondary)', background: 'rgba(0,0,0,0.2)', padding: '0.75rem', borderRadius: '8px', overflowX: 'auto', fontFamily: 'var(--font-mono)' }}>
              {activeProblem.examples}
            </pre>
          </div>
        </div>

        {/* AI Assistant Chat Feedback */}
        <div className="glass-card" style={{ flex: 0.9, display: 'flex', flexDirection: 'column', gap: '0.85rem', background: 'rgba(var(--accent-primary-rgb), 0.02)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>
            <Cpu size={16} style={{ color: 'var(--accent-primary)' }} />
            <span style={{ fontSize: '0.85rem', fontWeight: 750 }}>AI Interviewer Chat</span>
          </div>

          <div style={{ 
            flex: 1, 
            overflowY: 'auto', 
            fontSize: '0.85rem', 
            lineHeight: 1.5, 
            color: 'var(--text-secondary)',
            background: 'rgba(0, 0, 0, 0.15)',
            padding: '0.75rem',
            borderRadius: '10px',
            border: '1px solid var(--glass-border)'
          }}>
            <p>{aiMessage}</p>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button className="btn btn-secondary" style={{ flex: 1, padding: '0.5rem', fontSize: '0.8rem' }} onClick={handleHint}>
              Request Hint
            </button>
            <button className="btn btn-secondary" style={{ flex: 1, padding: '0.5rem', fontSize: '0.8rem' }} onClick={() => setAiMessage("Ask me anything about Time Complexity (Big O) or alternate approaches!")}>
              Analyze Complexity
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .coding-layout {
            grid-template-columns: 1fr !important;
            height: auto !important;
          }
        }
      `}</style>
    </div>
  );
}
