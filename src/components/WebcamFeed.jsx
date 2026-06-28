import React, { useRef, useEffect, useState } from 'react';
import { Camera, CameraOff } from 'lucide-react';

export default function WebcamFeed({ 
  onMetricsUpdate, 
  isActive = false 
}) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [permissionError, setPermissionError] = useState(false);
  const [loading, setLoading] = useState(false);

  // Start webcam
  const startWebcam = async () => {
    setLoading(true);
    setPermissionError(false);
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ 
        video: { width: 640, height: 480 } 
      });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (err) {
      console.error("Webcam access denied:", err);
      setPermissionError(true);
    } finally {
      setLoading(false);
    }
  };

  // Stop webcam
  const stopWebcam = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
  };

  useEffect(() => {
    if (isActive) {
      startWebcam();
    } else {
      stopWebcam();
    }
    return () => stopWebcam();
  }, [isActive]);

  // Sci-fi HUD Drawing Loop
  useEffect(() => {
    if (!stream) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let scanLineY = 0;
    let scanDirection = 1;
    let trackerRadius = 40;
    let pulseDirection = 1;

    const drawHUD = () => {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const w = canvas.width;
      const h = canvas.height;

      // 1. Scanning Line
      scanLineY += 2 * scanDirection;
      if (scanLineY > h || scanLineY < 0) {
        scanDirection *= -1;
      }
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.4)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(10, scanLineY);
      ctx.lineTo(w - 10, scanLineY);
      ctx.stroke();

      // Shadow glow under scanline
      const scanGlow = ctx.createLinearGradient(0, scanLineY - 15 * scanDirection, 0, scanLineY);
      scanGlow.addColorStop(0, 'transparent');
      scanGlow.addColorStop(1, 'rgba(6, 182, 212, 0.15)');
      ctx.fillStyle = scanGlow;
      ctx.fillRect(10, scanDirection > 0 ? scanLineY - 15 : scanLineY, w - 20, 15);

      // 2. Face Boundary Box (Simulated Tracker)
      const faceBox = { x: w / 2 - 100, y: h / 2 - 120, w: 200, h: 240 };
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.7)';
      ctx.lineWidth = 2;
      
      // Draw corner brackets instead of solid box for high tech look
      const d = 20; // bracket length
      // Top Left
      ctx.beginPath();
      ctx.moveTo(faceBox.x, faceBox.y + d);
      ctx.lineTo(faceBox.x, faceBox.y);
      ctx.lineTo(faceBox.x + d, faceBox.y);
      ctx.stroke();
      // Top Right
      ctx.beginPath();
      ctx.moveTo(faceBox.x + faceBox.w - d, faceBox.y);
      ctx.lineTo(faceBox.x + faceBox.w, faceBox.y);
      ctx.lineTo(faceBox.x + faceBox.w, faceBox.y + d);
      ctx.stroke();
      // Bottom Left
      ctx.beginPath();
      ctx.moveTo(faceBox.x, faceBox.y + faceBox.h - d);
      ctx.lineTo(faceBox.x, faceBox.y + faceBox.h);
      ctx.lineTo(faceBox.x + d, faceBox.y + faceBox.h);
      ctx.stroke();
      // Bottom Right
      ctx.beginPath();
      ctx.moveTo(faceBox.x + faceBox.w - d, faceBox.y + faceBox.h);
      ctx.lineTo(faceBox.x + faceBox.w, faceBox.y + faceBox.h);
      ctx.lineTo(faceBox.x + faceBox.w, faceBox.y + faceBox.h - d);
      ctx.stroke();

      // Crosshair in middle
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.5)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(w / 2 - 8, h / 2);
      ctx.lineTo(w / 2 + 8, h / 2);
      ctx.moveTo(w / 2, h / 2 - 8);
      ctx.lineTo(w / 2, h / 2 + 8);
      ctx.stroke();

      // 3. Eye Trackers (Simulated targets)
      const eyeL = { x: w / 2 - 40, y: h / 2 - 30 };
      const eyeR = { x: w / 2 + 40, y: h / 2 - 30 };
      
      trackerRadius += 0.2 * pulseDirection;
      if (trackerRadius > 14 || trackerRadius < 8) {
        pulseDirection *= -1;
      }
      
      ctx.strokeStyle = 'rgba(236, 72, 153, 0.6)';
      ctx.beginPath();
      ctx.arc(eyeL.x, eyeL.y, trackerRadius, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(eyeR.x, eyeR.y, trackerRadius, 0, Math.PI * 2);
      ctx.stroke();

      // 4. Biometric Stats overlay
      ctx.fillStyle = 'rgba(6, 182, 212, 0.85)';
      ctx.font = '10px JetBrains Mono';
      ctx.fillText("FACIAL TRACER: ENAB", faceBox.x, faceBox.y - 12);
      ctx.fillText(`FRAME_RATE: ${60} FPS`, 20, 30);
      ctx.fillText(`SCANNER_ID: IV-882`, 20, 45);

      // Generate random metrics for parenting component
      const time = Date.now();
      const smile = Math.floor(65 + Math.sin(time / 2000) * 15 + Math.random() * 5);
      const eyeContact = Math.floor(88 + Math.cos(time / 3000) * 6 + Math.random() * 4);
      const posture = Math.floor(75 + Math.sin(time / 4000) * 10 + Math.random() * 3);
      const gestures = Math.floor(40 + Math.cos(time / 1500) * 15 + Math.random() * 8);

      if (onMetricsUpdate && Math.random() < 0.05) {
        onMetricsUpdate({ smile, eyeContact, posture, gestures });
      }

      animationFrameId = requestAnimationFrame(drawHUD);
    };

    drawHUD();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [stream, onMetricsUpdate]);

  return (
    <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', background: '#090714', aspectRatio: '4/3', width: '100%', border: '1px solid var(--glass-border)' }}>
      {stream ? (
        <>
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              transform: 'scaleX(-1)' // Mirror image for intuitive feedback
            }}
          />
          <canvas
            ref={canvasRef}
            width={640}
            height={480}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none'
            }}
          />
        </>
      ) : (
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          height: '100%', 
          padding: '2rem',
          textAlign: 'center',
          gap: '1rem'
        }}>
          {permissionError ? (
            <>
              <div style={{ padding: '1rem', borderRadius: '50%', background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444' }}>
                <CameraOff size={32} />
              </div>
              <h4 style={{ color: '#ef4444' }}>Webcam Access Blocked</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', maxWidth: '300px' }}>
                Please check your browser settings to grant camera permissions and try again.
              </p>
              <button className="btn btn-primary" onClick={startWebcam}>
                Retry Access
              </button>
            </>
          ) : (
            <>
              <div style={{ 
                padding: '1.25rem', 
                borderRadius: '50%', 
                background: 'rgba(6, 182, 212, 0.1)', 
                color: 'var(--accent-secondary)',
                animation: 'float 4s infinite ease-in-out'
              }}>
                <Camera size={36} className="pulse-glow-element" />
              </div>
              <h4>Initialize Biometric Scanner</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', maxWidth: '280px' }}>
                Grant camera permission to analyze posture, eye contact, and head gestures in real-time.
              </p>
              <button 
                className="btn btn-primary" 
                onClick={startWebcam}
                disabled={loading}
              >
                {loading ? 'Initializing...' : 'Enable Camera'}
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
