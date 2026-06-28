import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Stars, Sky } from '@react-three/drei';
import * as THREE from 'three';

const ParticleRing = ({ isLight }) => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      groupRef.current.rotation.x = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
        {!isLight ? (
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        ) : (
            <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} />
        )}
        {/* We can add subtle ambient geometric nodes around */}
        {Array.from({ length: 30 }).map((_, i) => (
            <mesh 
                key={i} 
                position={[
                    (Math.random() - 0.5) * 40,
                    (Math.random() - 0.5) * 40,
                    (Math.random() - 0.5) * 40
                ]}
            >
                <sphereGeometry args={[0.05, 8, 8]} />
                <meshBasicMaterial color={isLight ? "#0ea5e9" : "#8b5cf6"} transparent opacity={0.3} />
            </mesh>
        ))}
    </group>
  );
};

export default function Global3DBackground({ isLight }) {
  return (
    <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1, // Behind everything
        pointerEvents: 'none', // Don't block clicks
        background: isLight ? 'linear-gradient(to bottom, #bae6fd 0%, #f8fafc 100%)' : 'radial-gradient(circle at center, #130a2a 0%, #05030A 100%)'
    }}>
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <ambientLight intensity={isLight ? 1 : 0.2} />
        <ParticleRing isLight={isLight} />
      </Canvas>
    </div>
  );
}
