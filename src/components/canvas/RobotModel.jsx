import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';

const RobotModel = () => {
  const meshRef = useRef();
  const sphereRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.2;
      meshRef.current.rotation.y = time * 0.3;
    }
    if (sphereRef.current) {
      sphereRef.current.position.y = Math.sin(time) * 0.2;
    }
  });

  return (
    <group>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh ref={meshRef} position={[0, 0, 0]} scale={[1.8, 1.8, 1.8]}>
          <icosahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#a855f7" wireframe />
        </mesh>

        <mesh ref={sphereRef} position={[0, 0, 0]} scale={[1.2, 1.2, 1.2]}>
          <sphereGeometry args={[1, 32, 32]} />
          <MeshDistortMaterial
            color="#2d0b5a"
            envMapIntensity={1}
            clearcoat={1}
            clearcoatRoughness={0.1}
            metalness={0.8}
            roughness={0.2}
            distort={0.4}
            speed={2}
          />
        </mesh>
      </Float>
    </group>
  );
};

export default RobotModel;
