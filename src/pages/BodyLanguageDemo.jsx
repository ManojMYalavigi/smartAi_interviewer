import React, { useState } from 'react';
import { Camera, RefreshCw, Zap, ShieldCheck, Play, Eye } from 'lucide-react';
import WebcamFeed from '../components/WebcamFeed';

export default function BodyLanguageDemo() {
  const [cameraActive, setCameraActive] = useState(false);
  const [metrics, setMetrics] = useState({
    smile: 0,
    eyeContact: 0,
    posture: 0,
    gestures: 0
  });

  const [scanLogs, setScanLogs] = useState([
    { time: "00:01", msg: "HUD telemetry online. Awaiting camera frame buffer..." }
  ]);

  const handleMetricsUpdate = (newMetrics) => {
    setMetrics(newMetrics);
    
    // Add logs dynamically based on thresholds
    let newLog = "";
    if (newMetrics.smile > 75 && Math.random() < 0.3) {
      newLog = "Friendly micro-expression flagged. Positive confidence boost.";
    } else if (newMetrics.eyeContact < 85 && Math.random() < 0.3) {
      newLog = "Slight gaze offset. Focus on the central camera node.";
    } else if (newMetrics.posture < 70 && Math.random() < 0.3) {
      newLog = "Subtle slouching trigger. Align head-neck axis.";
    } else if (Math.random() < 0.1) {
      newLog = "Telemetry stable. Professional gaze parameters verified.";
    }

    if (newLog) {
      const timeStr = new Date().toTimeString().split(' ')[0].slice(3); // e.g. "05:22"
      setScanLogs(prev => [
        { time: timeStr, msg: newLog },
        ...prev.slice(0, 4) // Keep last 5 logs
      ]);
    }
  };

  const getMetricQuality = (val, type) => {
    if (val === 0) return { label: 'Awaiting Feed', color: 'var(--text-muted)' };
    if (type === 'smile') {
      return val > 75 ? { label: 'Approachable', color: '#10b981' } : { label: 'Neutral/Serious', color: 'var(--text-secondary)' };
    }
    if (val > 80) return { label: 'Excellent', color: '#10b981' };
    if (val > 65) return { label: 'Good', color: 'var(--accent-secondary)' };
    return { label: 'Needs Adjustment', color: '#ef4444' };
  };

  return (
    <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      
      {/* HEADER INFO */}
      <div className="glass-card">
        <span style={{ fontSize: '0.8rem', color: 'var(--accent-secondary)', fontWeight: 700, textTransform: 'uppercase' }}>Visual Biometrics</span>
        <h2 style={{ fontSize: '1.75rem', marginTop: '0.25rem' }}>Body Language & Posture HUD</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
          Evaluate your visual delivery and posture anonymously. Enable your camera to run a local HUD canvas scan tracking smile quotients, gaze angles, and head tilts.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '1.5rem' }} className="details-grid hero-grid">
        
        {/* WEBCAM MODULE */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <WebcamFeed 
            isActive={cameraActive} 
            onMetricsUpdate={handleMetricsUpdate} 
          />
          
          <button 
            className={`btn ${cameraActive ? 'btn-secondary' : 'btn-primary'}`}
            onClick={() => {
              setCameraActive(!cameraActive);
              if (!cameraActive) {
                setMetrics({ smile: 0, eyeContact: 0, posture: 0, gestures: 0 });
                setScanLogs([{ time: "00:01", msg: "Biometric tracker online. Initializing camera..." }]);
              }
            }}
            style={{ width: '100%', gap: '0.35rem' }}
          >
            <Camera size={16} />
            {cameraActive ? 'Deactivate Scanner' : 'Activate Biometric Camera'}
          </button>
        </div>

        {/* METRICS HUD TELEMETRY */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          
          {/* Live numbers */}
          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <h3 style={{ fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Eye size={16} style={{ color: 'var(--accent-secondary)' }} />
              Live Biometrics
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.8rem' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.2rem' }}>
                  <span>Eye Contact</span>
                  <strong style={{ color: getMetricQuality(metrics.eyeContact, 'eye').color }}>
                    {metrics.eyeContact > 0 ? `${metrics.eyeContact}%` : '0%'} ({getMetricQuality(metrics.eyeContact, 'eye').label})
                  </strong>
                </div>
                <div style={{ height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px' }}>
                  <div style={{ width: `${metrics.eyeContact}%`, height: '100%', background: 'var(--accent-secondary)', transition: 'width 0.5s' }} />
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.2rem' }}>
                  <span>Smile Quotient</span>
                  <strong style={{ color: getMetricQuality(metrics.smile, 'smile').color }}>
                    {metrics.smile > 0 ? `${metrics.smile}%` : '0%'} ({getMetricQuality(metrics.smile, 'smile').label})
                  </strong>
                </div>
                <div style={{ height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px' }}>
                  <div style={{ width: `${metrics.smile}%`, height: '100%', background: 'var(--accent-primary)', transition: 'width 0.5s' }} />
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.2rem' }}>
                  <span>Posture Alignment</span>
                  <strong style={{ color: getMetricQuality(metrics.posture, 'posture').color }}>
                    {metrics.posture > 0 ? `${metrics.posture}%` : '0%'} ({getMetricQuality(metrics.posture, 'posture').label})
                  </strong>
                </div>
                <div style={{ height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px' }}>
                  <div style={{ width: `${metrics.posture}%`, height: '100%', background: 'var(--accent-tertiary)', transition: 'width 0.5s' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Scanner Console Logs */}
          <div className="glass-card" style={{ 
            flex: 1, 
            background: '#040209', 
            padding: '1rem', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '0.5rem',
            maxHeight: '220px',
            overflowY: 'auto'
          }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Tracker Console Logs
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#06b6d4', lineHeight: 1.4 }}>
              {scanLogs.map((log, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>[{log.time}]</span>
                  <span>{log.msg}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Real-time Tips Checklist */}
      <div className="glow-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h3 style={{ fontSize: '1.15rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <ShieldCheck size={18} style={{ color: 'var(--accent-primary)' }} />
          Biometric Alignment Guide
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }} className="details-grid">
          <div className="glass-card" style={{ padding: '1rem' }}>
            <span style={{ fontWeight: 700, color: 'var(--text-primary)', display: 'block', marginBottom: '0.25rem' }}>Gaze Optimization</span>
            Align your webcam at eye level. Look directly at the lens rather than your own preview window on the screen to establish strong eye contact.
          </div>
          <div className="glass-card" style={{ padding: '1rem' }}>
            <span style={{ fontWeight: 700, color: 'var(--text-primary)', display: 'block', marginBottom: '0.25rem' }}>Posture Alignment</span>
            Sit upright. Ensure your shoulders are aligned and visible in the center frame bounds. Leaning too forward triggers posture warnings.
          </div>
        </div>
      </div>

    </div>
  );
}
