"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function FloatingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);
  const t = useRef(0);

  useFrame(() => {
    t.current += 0.003;
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003;
      meshRef.current.rotation.y += 0.003;
      meshRef.current.position.y = Math.sin(t.current) * 0.4;
    }
  });

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[0.8, 0.3, 128, 16]} />
      <meshStandardMaterial color="#6366f1" wireframe />
    </mesh>
  );
}

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);

  const geometry = useMemo(() => {
    const count = 1500;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 30;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geo;
  }, []);

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.001;
    }
  });

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        color="#6366f1"
        size={0.03}
        transparent
        opacity={0.6}
      />
    </points>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 60 }}
      style={{ background: "transparent" }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} color="#a855f7" intensity={0.5} />
      <FloatingGeometry />
      <ParticleField />
      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.5}
        enablePan={false}
      />
    </Canvas>
  );
}
