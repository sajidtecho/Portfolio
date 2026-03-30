import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, Float, PresentationControls } from "@react-three/drei";

const SkillNode = ({ position, name, color }) => {
  const meshRef = useRef();
  const [hovered, setHover] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2} position={position}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        scale={hovered ? 1.2 : 1}
      >
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial 
          color={hovered ? "#fff" : color} 
          wireframe={!hovered}
          roughness={0.2}
          metalness={0.8}
        />
        <Html distanceFactor={10} position={[0, 1.5, 0]} center>
          <div className="bg-black/80 px-3 py-1 rounded-md text-white text-sm font-semibold border border-gray-700 whitespace-nowrap backdrop-blur-md">
            {name}
          </div>
        </Html>
      </mesh>
    </Float>
  );
};

const SkillBallsCanvas = ({ skills }) => {
  // Generate random positions or a grid
  const getPosition = (index, total) => {
    const angle = (index / total) * Math.PI * 2;
    const radius = 3;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    const y = Math.sin(index) * 1.5;
    return [x, y, z];
  };

  const colors = ["#a855f7", "#ec4899", "#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#6366f1"];

  return (
    <div className="w-full h-[60vh] min-h-[400px]">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <PresentationControls 
          global 
          config={{ mass: 2, tension: 500 }} 
          snap={{ mass: 4, tension: 1500 }} 
          rotation={[0, 0, 0]} 
          polar={[-Math.PI / 3, Math.PI / 3]} 
          azimuth={[-Math.PI / 1.4, Math.PI / 2]}
        >
          <group position={[0, -0.5, 0]}>
            {skills.map((skill, index) => (
              <SkillNode 
                key={skill.name} 
                position={getPosition(index, skills.length)} 
                name={skill.name}
                color={colors[index % colors.length]}
              />
            ))}
          </group>
        </PresentationControls>
      </Canvas>
    </div>
  );
};

export default SkillBallsCanvas;
