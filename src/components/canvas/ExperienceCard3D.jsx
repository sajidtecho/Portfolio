import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

const ExperienceCard3D = ({ position, experience, index }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      // Pulsing animation
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2 + index) * 0.05;
      meshRef.current.scale.set(scale, scale, 1);
      
      // Gentle rotation
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group ref={meshRef} position={position}>
      {/* Background Card */}
      <mesh position={[0, 0, 0]}>
        <planeGeometry args={[2.2, 1.2]} />
        <meshStandardMaterial
          color="#1a1a2e"
          emissive="#a855f7"
          emissiveIntensity={0.1}
          metalness={0.2}
          roughness={0.7}
        />
      </mesh>

      {/* Timeline Dot */}
      <mesh position={[-1.2, 0, 0.1]}>
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshStandardMaterial
          color="#a855f7"
          emissive="#7c3aed"
          emissiveIntensity={0.8}
        />
      </mesh>

      {/* Timeline Connector */}
      {index < 2 && (
        <line position={[-1.2, -0.6, 0]}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([0, 0, 0, 0, -0.8, 0])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#a855f7" />
        </line>
      )}

      {/* Title */}
      <Text
        position={[-0.7, 0.3, 0.1]}
        fontSize={0.25}
        color="#fff"
        anchorX="left"
        anchorY="middle"
        maxWidth={1.5}
      >
        {experience.title}
      </Text>

      {/* Company */}
      <Text
        position={[-0.7, 0, 0.1]}
        fontSize={0.15}
        color="#a855f7"
        anchorX="left"
        anchorY="middle"
      >
        {experience.company_name}
      </Text>

      {/* Date */}
      <Text
        position={[-0.7, -0.3, 0.1]}
        fontSize={0.12}
        color="#888"
        anchorX="left"
        anchorY="middle"
      >
        {experience.date}
      </Text>
    </group>
  );
};

export default ExperienceCard3D;
