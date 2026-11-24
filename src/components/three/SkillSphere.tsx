import { Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { ErrorBoundary } from '../ui/ErrorBoundary';
import { isWebGLAvailable } from '../../utils/webgl';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

const SPHERE_TAGS = [
  'Python',
  'SQL',
  'PySpark',
  'Azure',
  'Databricks',
  'React',
  'TypeScript',
  'Node.js',
  'SQL Server',
  'MongoDB',
  'FastAPI',
  'Git',
];

function TechGlobe({ reducedMotion }: { reducedMotion: boolean }) {
  const groupRef = useRef<THREE.Group>(null);

  const points = useMemo(() => {
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    return SPHERE_TAGS.map((label, i) => {
      const y = 1 - (i / (SPHERE_TAGS.length - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = goldenAngle * i;
      const r = 1.9;
      return {
        label,
        pos: [
          Math.cos(theta) * radiusAtY * r,
          y * r,
          Math.sin(theta) * radiusAtY * r,
        ] as [number, number, number],
      };
    });
  }, []);

  useFrame((state, delta) => {
    if (reducedMotion || !groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.22 + state.pointer.x * 0.015;
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      state.pointer.y * 0.25,
      0.05
    );
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <icosahedronGeometry args={[1.55, 1]} />
        <meshBasicMaterial color="#00E5FF" wireframe transparent opacity={0.14} />
      </mesh>
      {points.map((pt) => (
        <group key={pt.label} position={pt.pos}>
          <mesh>
            <sphereGeometry args={[0.045, 10, 10]} />
            <meshBasicMaterial color="#00E5FF" />
          </mesh>
          <Html center distanceFactor={6} style={{ pointerEvents: 'none' }}>
            <span className="rounded-md border border-white/15 bg-[#05070D]/85 px-2 py-0.5 font-mono text-[10px] text-[#F8FAFC] whitespace-nowrap">
              {pt.label}
            </span>
          </Html>
        </group>
      ))}
    </group>
  );
}

export function SkillSphere() {
  const prefersReducedMotion = usePrefersReducedMotion();
  if (!isWebGLAvailable()) return null;

  return (
    <ErrorBoundary fallback={null}>
      <div className="h-[320px] w-full rounded-3xl border border-white/10 bg-[#05070D]/60 overflow-hidden">
        <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 5.2], fov: 45 }}>
          <ambientLight intensity={0.8} />
          <Suspense fallback={null}>
            <TechGlobe reducedMotion={prefersReducedMotion} />
          </Suspense>
        </Canvas>
      </div>
    </ErrorBoundary>
  );
}
