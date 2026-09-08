import { Float, MeshTransmissionMaterial } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import { useRef } from "react";
import type { Group } from "three";

const GlassAssembly = ({ reducedMotion }: { reducedMotion: boolean }) => {
  const assembly = useRef<Group>(null);

  useFrame((state, delta) => {
    if (!assembly.current || reducedMotion) return;
    assembly.current.rotation.y += delta * 0.09;
    assembly.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.22) * 0.08;
    assembly.current.position.x +=
      (state.pointer.x * 0.32 - assembly.current.position.x) * Math.min(delta * 2.4, 1);
    assembly.current.position.y +=
      (state.pointer.y * 0.16 - assembly.current.position.y) * Math.min(delta * 2.4, 1);
  });

  const glass = {
    thickness: 0.55,
    roughness: 0.08,
    transmission: 1,
    ior: 1.35,
    chromaticAberration: 0.08,
    anisotropy: 0.18,
    clearcoat: 1,
    samples: 6,
    resolution: 256,
  } as const;

  return (
    <group ref={assembly} rotation={[0.15, -0.3, -0.08]}>
      <Float speed={reducedMotion ? 0 : 1.15} rotationIntensity={reducedMotion ? 0 : 0.2} floatIntensity={reducedMotion ? 0 : 0.45}>
        <mesh scale={[1.45, 1.45, 1.45]}>
          <torusKnotGeometry args={[0.92, 0.27, 150, 24, 2, 3]} />
          <MeshTransmissionMaterial {...glass} color="#dfe3e8" attenuationColor="#8e949b" attenuationDistance={2.2} />
        </mesh>
      </Float>

      <Float speed={reducedMotion ? 0 : 1.7} rotationIntensity={reducedMotion ? 0 : 0.35} floatIntensity={reducedMotion ? 0 : 0.6}>
        <mesh position={[-2.25, 0.55, -0.45]} rotation={[0.4, 0.2, 0.55]}>
          <octahedronGeometry args={[0.55, 1]} />
          <MeshTransmissionMaterial {...glass} color="#f0f1f3" attenuationColor="#b8bcc2" attenuationDistance={1.6} />
        </mesh>
      </Float>

      <Float speed={reducedMotion ? 0 : 1.35} rotationIntensity={reducedMotion ? 0 : 0.45} floatIntensity={reducedMotion ? 0 : 0.5}>
        <mesh position={[2.35, -0.52, 0.15]} rotation={[0.2, -0.35, 0.15]}>
          <icosahedronGeometry args={[0.62, 2]} />
          <MeshTransmissionMaterial {...glass} color="#c6cad0" attenuationColor="#6e7378" attenuationDistance={1.8} />
        </mesh>
      </Float>
    </group>
  );
};

const LiquidGlassSilxor = () => {
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <div className="liquid-silxor relative isolate w-full overflow-hidden" role="img" aria-label="SILXOR liquid glass technology sculpture">
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Canvas
          camera={{ position: [0, 0, 6.8], fov: 40 }}
          dpr={[1, 1.5]}
          gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        >
          <ambientLight intensity={1.15} />
          <directionalLight position={[4, 5, 6]} intensity={3.8} color="#ffffff" />
          <directionalLight position={[-4, -2, 3]} intensity={2.2} color="#8e949b" />
          <pointLight position={[0, 1, -2]} intensity={4} color="#f0f1f3" />
          <GlassAssembly reducedMotion={reducedMotion} />
        </Canvas>
      </div>

      <div className="absolute inset-x-0 top-5 z-10 flex items-center justify-between px-5 sm:px-8">
        <span className="font-mono text-[10px] uppercase text-muted-foreground">SLXR // 2026</span>
        <span className="font-mono text-[10px] uppercase text-muted-foreground">Liquid Systems // Online</span>
      </div>

      <h1 className="liquid-silxor-word relative z-10 flex h-full items-center justify-center font-display font-[800] text-foreground">
        SILXOR
      </h1>

      <div className="absolute inset-x-0 bottom-5 z-10 flex items-center justify-between px-5 sm:px-8">
        <span className="font-mono text-[10px] uppercase text-muted-foreground">Architect · Build · Secure</span>
        <span className="hidden font-mono text-[10px] uppercase text-muted-foreground sm:inline">Interactive Object 001</span>
      </div>
    </div>
  );
};

export default LiquidGlassSilxor;