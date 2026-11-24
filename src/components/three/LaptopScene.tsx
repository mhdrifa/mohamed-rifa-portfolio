import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, Html } from '@react-three/drei';
import * as THREE from 'three';
import { ErrorBoundary } from '../ui/ErrorBoundary';
import { isWebGLAvailable } from '../../utils/webgl';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

function useAnimatedScreenTexture() {
  const canvas = useMemo(() => {
    const c = document.createElement('canvas');
    c.width = 640;
    c.height = 400;
    return c;
  }, []);

  const texture = useMemo(() => {
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }, [canvas]);

  useEffect(() => {
    let frameId = 0;
    let tick = 0;

    const draw = () => {
      tick += 0.025;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Screen base
      ctx.fillStyle = '#070B14';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Top window bar
      ctx.fillStyle = '#101827';
      ctx.fillRect(0, 0, canvas.width, 34);
      ctx.fillStyle = '#00E5FF';
      ctx.font = '600 13px monospace';
      ctx.fillText('RIFA_PIPELINE_STUDIO.py  |  SQL_WAREHOUSE.sql', 18, 22);

      // Left code panel
      ctx.fillStyle = '#0D1422';
      ctx.fillRect(16, 48, 340, 210);
      ctx.strokeStyle = 'rgba(0, 229, 255, 0.25)';
      ctx.strokeRect(16, 48, 340, 210);

      const lines = [
        ['# Medallion Silver -> Gold ETL', '#94A3B8'],
        ['df_silver = spark.read.table("silver.orders")', '#00E5FF'],
        ['df_clean = df_silver.dropDuplicates(["id"])', '#F8FAFC'],
        ['SELECT d.region, SUM(f.amount) AS rev', '#8B5CF6'],
        ['FROM gold.fact_sales f', '#F8FAFC'],
        ['JOIN gold.dim_region d ON f.reg_id = d.id', '#F8FAFC'],
        ['GROUP BY d.region ORDER BY rev DESC;', '#00E5FF'],
      ];

      ctx.font = '12px monospace';
      lines.forEach(([text, color], idx) => {
        ctx.fillStyle = color;
        ctx.fillText(text, 28, 76 + idx * 24);
      });

      // Right animated pipeline chart
      ctx.fillStyle = '#0D1422';
      ctx.fillRect(370, 48, 254, 210);
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.35)';
      ctx.strokeRect(370, 48, 254, 210);

      ctx.fillStyle = '#F8FAFC';
      ctx.font = '600 12px monospace';
      ctx.fillText('ETL THROUGHPUT MONITOR', 386, 74);

      for (let i = 0; i < 6; i++) {
        const barHeight = 40 + Math.sin(tick * 1.4 + i * 0.8) * 28 + 32;
        const x = 390 + i * 36;
        const y = 230 - barHeight;
        const grad = ctx.createLinearGradient(x, y, x, 230);
        grad.addColorStop(0, '#00E5FF');
        grad.addColorStop(1, '#8B5CF6');
        ctx.fillStyle = grad;
        ctx.fillRect(x, y, 22, barHeight);
      }

      // Bottom terminal
      ctx.fillStyle = '#05070D';
      ctx.fillRect(16, 272, 608, 112);
      ctx.strokeStyle = 'rgba(255,255,255,0.1)';
      ctx.strokeRect(16, 272, 608, 112);

      ctx.fillStyle = '#34D399';
      ctx.font = '12px monospace';
      ctx.fillText('$ python validate_pipeline.py --layer gold', 28, 300);
      ctx.fillStyle = '#94A3B8';
      ctx.fillText('> Bronze -> Silver -> Gold schema checks: PASS', 28, 326);
      ctx.fillStyle = '#00E5FF';
      const cursor = Math.floor(tick * 2) % 2 === 0 ? '_' : ' ';
      ctx.fillText(`> Ready for analytical BI queries ${cursor}`, 28, 352);

      texture.needsUpdate = true;
      frameId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(frameId);
  }, [canvas, texture]);

  return texture;
}

const ORBITING_TAGS = [
  { label: 'Python', color: '#00E5FF', angle: 0 },
  { label: 'SQL', color: '#8B5CF6', angle: (Math.PI * 2) / 6 },
  { label: 'Azure', color: '#38BDF8', angle: ((Math.PI * 2) / 6) * 2 },
  { label: 'Spark', color: '#F59E0B', angle: ((Math.PI * 2) / 6) * 3 },
  { label: 'React', color: '#00E5FF', angle: ((Math.PI * 2) / 6) * 4 },
  { label: 'Git', color: '#A78BFA', angle: ((Math.PI * 2) / 6) * 5 },
];

function ProceduralLaptop({ reducedMotion }: { reducedMotion: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const orbitRef = useRef<THREE.Group>(null);
  const screenTexture = useAnimatedScreenTexture();

  useFrame((state) => {
    if (reducedMotion || !groupRef.current) return;
    const { x, y } = state.pointer;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      -0.32 + x * 0.28,
      0.06
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      0.18 - y * 0.14,
      0.06
    );
    if (orbitRef.current) {
      orbitRef.current.rotation.y += 0.004;
    }
  });

  return (
    <group ref={groupRef} rotation={[0.18, -0.32, 0]} position={[0, -0.15, 0]}>
      <Float speed={reducedMotion ? 0 : 1.6} rotationIntensity={0.12} floatIntensity={0.35}>
        {/* Metallic Base Chassis */}
        <mesh position={[0, -0.42, 0.38]} castShadow receiveShadow>
          <boxGeometry args={[2.7, 0.09, 1.82]} />
          <meshStandardMaterial color="#1E293B" metalness={0.85} roughness={0.28} />
        </mesh>

        {/* Keyboard recessed deck */}
        <mesh position={[0, -0.37, 0.16]}>
          <boxGeometry args={[2.32, 0.02, 0.92]} />
          <meshStandardMaterial color="#090D16" metalness={0.4} roughness={0.7} />
        </mesh>

        {/* Key rows detail */}
        {Array.from({ length: 4 }).map((_, row) => (
          <mesh key={row} position={[0, -0.356, -0.18 + row * 0.21]}>
            <boxGeometry args={[2.16, 0.015, 0.14]} />
            <meshStandardMaterial color="#172033" metalness={0.3} roughness={0.5} />
          </mesh>
        ))}

        {/* Trackpad */}
        <mesh position={[0, -0.372, 0.92]}>
          <boxGeometry args={[0.88, 0.012, 0.48]} />
          <meshStandardMaterial color="#111827" metalness={0.65} roughness={0.3} />
        </mesh>

        {/* Hinge */}
        <mesh position={[0, -0.36, -0.52]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.045, 0.045, 2.2, 16]} />
          <meshStandardMaterial color="#334155" metalness={0.9} roughness={0.25} />
        </mesh>

        {/* Lid & Screen Group */}
        <group position={[0, -0.36, -0.52]} rotation={[-0.24, 0, 0]}>
          {/* Aluminum Lid Back */}
          <mesh position={[0, 0.9, 0]}>
            <boxGeometry args={[2.7, 1.76, 0.07]} />
            <meshStandardMaterial color="#1E293B" metalness={0.88} roughness={0.26} />
          </mesh>

          {/* Screen Bezel */}
          <mesh position={[0, 0.9, 0.036]}>
            <planeGeometry args={[2.56, 1.64]} />
            <meshStandardMaterial color="#05070D" roughness={0.3} />
          </mesh>

          {/* Animated Technical Display */}
          <mesh position={[0, 0.9, 0.042]}>
            <planeGeometry args={[2.42, 1.5]} />
            <meshBasicMaterial map={screenTexture} toneMapped={false} />
          </mesh>
        </group>
      </Float>

      {/* Subtle Orbiting Tech Satellites */}
      <group ref={orbitRef} position={[0, 0.4, 0]}>
        {ORBITING_TAGS.map((tag) => {
          const radius = 2.05;
          const x = Math.cos(tag.angle) * radius;
          const z = Math.sin(tag.angle) * radius;
          const y = Math.sin(tag.angle * 2) * 0.28;
          return (
            <group key={tag.label} position={[x, y, z]}>
              <mesh>
                <sphereGeometry args={[0.055, 16, 16]} />
                <meshStandardMaterial
                  color={tag.color}
                  emissive={tag.color}
                  emissiveIntensity={0.8}
                />
              </mesh>
              <Html center distanceFactor={6} style={{ pointerEvents: 'none' }}>
                <span className="rounded-md border border-white/15 bg-[#05070D]/85 px-2 py-0.5 font-mono text-[10px] text-[#F8FAFC] backdrop-blur-sm whitespace-nowrap">
                  {tag.label}
                </span>
              </Html>
            </group>
          );
        })}
      </group>
    </group>
  );
}

function LaptopFallback() {
  return (
    <div className="flex h-full min-h-[260px] flex-col justify-between rounded-2xl border border-white/10 bg-[#101827]/70 p-5">
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <span className="font-mono text-xs text-[#00E5FF]">PIPELINE_PREVIEW.sql</span>
        <span className="font-mono text-[10px] text-[#94A3B8]">STATIC FALLBACK</span>
      </div>
      <pre className="my-4 overflow-x-auto font-mono text-xs leading-relaxed text-[#F8FAFC]">
{`SELECT region, SUM(revenue) AS total
FROM gold.fact_sales
GROUP BY region
ORDER BY total DESC;`}
      </pre>
      <div className="flex flex-wrap gap-2">
        {['Python', 'SQL', 'Azure', 'Spark', 'React', 'Git'].map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-white/10 bg-[#05070D]/80 px-2.5 py-1 font-mono text-[10px] text-[#94A3B8]"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export function LaptopScene() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [webglReady, setWebglReady] = useState(true);

  useEffect(() => {
    setWebglReady(isWebGLAvailable());
  }, []);

  if (!webglReady) {
    return <LaptopFallback />;
  }

  return (
    <ErrorBoundary fallback={<LaptopFallback />}>
      <div className="relative h-[280px] sm:h-[320px] w-full rounded-3xl border border-white/10 bg-[#05070D]/40 overflow-hidden">
        <Canvas
          dpr={[1, 1.75]}
          camera={{ position: [0, 1.05, 4.7], fov: 38 }}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={0.65} />
          <directionalLight position={[4, 6, 5]} intensity={1.3} color="#F8FAFC" />
          <pointLight position={[-4, 2, 3]} intensity={1.5} color="#00E5FF" />
          <pointLight position={[4, -1, -2]} intensity={1.4} color="#8B5CF6" />
          <Suspense fallback={null}>
            <ProceduralLaptop reducedMotion={prefersReducedMotion} />
            <Environment preset="city" />
          </Suspense>
        </Canvas>
        <div className="pointer-events-none absolute bottom-3 right-4 font-mono text-[10px] uppercase tracking-widest text-[#94A3B8]/80">
          Interactive 3D Workstation
        </div>
      </div>
    </ErrorBoundary>
  );
}
