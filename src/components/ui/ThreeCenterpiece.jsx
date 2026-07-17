import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useMousePosition } from '@/hooks/useMousePosition';
import { inSphere } from 'maath/random';
import { gsap } from 'gsap';

function ParticleMesh() {
  const ref = useRef();
  const { x, y } = useMousePosition();
  
  // Generate random points in a sphere
  const sphere = new Float32Array(5000 * 3);
  inSphere(sphere, { radius: 1.5 });

  useEffect(() => {
    const startAnimation = () => {
      if (!ref.current) return;
      gsap.fromTo(
        ref.current.scale,
        { x: 4, y: 4, z: 4 },
        {
          x: 1, y: 1, z: 1,
          duration: 1.2,
          repeat: -1,
          yoyo: true,
          repeatDelay: 5,
          ease: 'power3.out'
        }
      );
    };

    if (document.fonts.status === 'loaded') {
      startAnimation();
    } else {
      document.fonts.ready.then(startAnimation);
    }
  }, []);

  useFrame((state, delta) => {
    if (!ref.current) return;
    
    // Rotate slowly
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
    
    // Interactive mouse parallax
    const nx = (x / window.innerWidth) * 2 - 1;
    const ny = -(y / window.innerHeight) * 2 + 1;
    
    ref.current.rotation.x += ny * 0.005;
    ref.current.rotation.y += nx * 0.005;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#a855f7"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

export default function ThreeCenterpiece() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ParticleMesh />
      </Canvas>
    </div>
  );
}
