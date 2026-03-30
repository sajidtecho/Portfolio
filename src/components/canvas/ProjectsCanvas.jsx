import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, Environment } from '@react-three/drei';
import ProjectCard3D from './ProjectCard3D';

const ProjectsCanvas = ({ projects }) => {
  const projectsPerRow = 3;
  const spacing = 4;
  const startX = -(projectsPerRow - 1) * spacing / 2;

  return (
    <Canvas
      camera={{
        position: [0, 0, 8],
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
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, 10]} intensity={0.3} color="#a855f7" />

        {/* Environment */}
        <Environment preset="city" />

        {/* Projects Grid */}
        {projects.map((project, index) => {
          const row = Math.floor(index / projectsPerRow);
          const col = index % projectsPerRow;
          const x = startX + col * spacing;
          const y = -row * spacing;

          return (
            <ProjectCard3D
              key={`project-3d-${index}`}
              position={[x, y, 0]}
              project={project}
              index={index}
            />
          );
        })}

        {/* Controls */}
        <OrbitControls
          autoRotate
          autoRotateSpeed={2}
          enableZoom={true}
          enablePan={true}
          maxDistance={20}
          minDistance={5}
        />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default ProjectsCanvas;
