import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

const ProjectCard3D = ({ position, project, index }) => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle floating animation
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.3;
      
      // Rotation on hover
      if (hovered) {
        meshRef.current.rotation.y += 0.02;
      } else {
        meshRef.current.rotation.y *= 0.95;
      }
    }
  });

  return (
    <group ref={meshRef} position={position}>
      <mesh
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        <boxGeometry args={[2.5, 3, 0.3]} />
        <meshStandardMaterial
          color={hovered ? '#a855f7' : '#1a1a2e'}
          emissive={hovered ? '#7c3aed' : '#000'}
          emissiveIntensity={hovered ? 0.5 : 0}
          metalness={0.3}
          roughness={0.6}
        />
      </mesh>

      {/* Title */}
      <Text
        position={[0, 1.2, 0.2]}
        fontSize={0.3}
        color={hovered ? '#fff' : '#ccc'}
        anchorX="center"
        anchorY="middle"
        maxWidth={2}
      >
        {project.name}
      </Text>

      {/* Description Preview */}
      {hovered && (
        <Text
          position={[0, -0.5, 0.2]}
          fontSize={0.15}
          color="#888"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.2}
        >
          {project.description.substring(0, 50)}...
        </Text>
      )}

      {/* Tags */}
      <group position={[0, -1.3, 0.2]}>
        {project.tags.slice(0, 3).map((tag, i) => (
          <Text
            key={i}
            position={[i * 0.7 - 0.7, 0, 0]}
            fontSize={0.12}
            color={hovered ? '#a855f7' : '#666'}
            anchorX="center"
            anchorY="middle"
          >
            #{tag.name}
          </Text>
        ))}
      </group>
    </group>
  );
};

export default ProjectCard3D;
