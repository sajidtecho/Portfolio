import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, Environment } from '@react-three/drei';
import ExperienceCard3D from './ExperienceCard3D';

const ExperienceCanvas = ({ experiences }) => {
  const spacing = 2.5;
  const startY = (experiences.length - 1) * spacing / 2;

  return (
    <Canvas
      camera={{
        position: [0, 0, 6],
        fov: 75,
        near: 0.1,
        far: 1000,
      }}
      gl={{
        preserveDrawingBuffer: true,
        antialias: true,
      }}
    >
      <Suspense fallback={null}>
        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={0.7} />
        <pointLight position={[-10, 10, 10]} intensity={0.4} color="#a855f7" />

        {/* Environment */}
        <Environment preset="dawn" />

        {/* Timeline Vertical Line */}
        <line position={[-1.2, 0, 0]}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([
                0,
                startY + spacing / 2,
                0,
                0,
                -startY - spacing / 2,
                0,
              ])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#a855f7" linewidth={1} />
        </line>

        {/* Experience Cards */}
        {experiences.map((experience, index) => (
          <ExperienceCard3D
            key={`exp-3d-${index}`}
            position={[0, startY - index * spacing, 0]}
            experience={experience}
            index={index}
          />
        ))}

        {/* Controls */}
        <OrbitControls
          autoRotate
          autoRotateSpeed={1}
          enableZoom={true}
          enablePan={true}
          maxDistance={15}
          minDistance={4}
        />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default ExperienceCanvas;
