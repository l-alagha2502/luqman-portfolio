import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, Environment } from '@react-three/drei';
import { EffectComposer, Bloom, Noise } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import * as THREE from 'three';

function ElegantShape() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    const scroll = window.scrollY / (document.body.scrollHeight - window.innerHeight || 1);
    
    // Smooth, subtle rotation
    groupRef.current.rotation.y = t * 0.05 + scroll * Math.PI;
    groupRef.current.rotation.x = t * 0.02 + scroll * Math.PI * 0.5;
    groupRef.current.position.y = Math.sin(t * 0.5) * 0.5;
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere args={[2.5, 64, 64]} position={[0, 0, -5]}>
          <meshPhysicalMaterial
            color="#050505"
            emissive="#1a1a1a"
            envMapIntensity={1}
            clearcoat={1}
            clearcoatRoughness={0.1}
            metalness={0.9}
            roughness={0.1}
          />
        </Sphere>
      </Float>
      
      {/* Subtle wireframe overlay for tech feel */}
      <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
        <Sphere args={[3.2, 32, 32]} position={[0, 0, -5]}>
          <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.03} />
        </Sphere>
      </Float>
    </group>
  );
}

export default function Scene() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-void">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: false, powerPreference: "high-performance" }}
      >
        <color attach="background" args={['#050505']} />
        <fog attach="fog" args={['#050505', 5, 15]} />
        
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#00fff9" />
        <directionalLight position={[0, 10, -10]} intensity={0.5} color="#ff00c1" />
        
        <Environment preset="city" />
        
        <ElegantShape />

        <EffectComposer multisampling={0}>
          <Bloom 
            luminanceThreshold={0.2} 
            mipmapBlur 
            intensity={0.5} 
            radius={0.4}
          />
          <Noise 
            opacity={0.03} 
            blendFunction={BlendFunction.OVERLAY} 
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
