import React, { useRef, useEffect, useMemo } from 'react';
import * as THREE from 'three';
import { Noise } from 'noisejs';
import { useFrame } from '@react-three/fiber';
import { CustomShaderMaterial } from '../../functions/CustomShaderMaterial';

function Petals({ color, positionX, positionY, positionZ, flower }) {
  const materialRef = useRef();
  const {
    noiseScale,
    noiseImpactX,
    noiseImpactY,
    noiseImpactZ,
    radiusTop,
    radiusBottom,
    height,
    radialSegments,
    rotation
  } = flower;

  const meshRef = useRef();

  console.log(CustomShaderMaterial)
  
  // Memoize the noise object
  const noise = useMemo(() => new Noise(123456), []);

  useFrame((state, delta) => {
    // if (materialRef.current) {
    //     materialRef.current.uniforms.uTime.value += delta; // Update the time uniform
    // }
  });
  
  useEffect(() => {
    const geometry = new THREE.CylinderGeometry(radiusTop, radiusBottom, height, radialSegments);

    const positions = geometry.attributes.position.array;
    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const y = positions[i + 1];
      const z = positions[i + 2];

      const displacementX = noise.perlin3(x * noiseScale, y * noiseScale, z * noiseScale) * noiseImpactX;
      const displacementY = noise.perlin3(x * noiseScale, y * noiseScale, z * noiseScale) * noiseImpactY;
      const displacementZ = noise.perlin3(x * noiseScale, y * noiseScale, z * noiseScale) * noiseImpactZ;

      positions[i] += displacementX;
      positions[i + 1] += displacementY;
      positions[i + 2] += displacementZ;
    }

    geometry.attributes.position.needsUpdate = true;
    geometry.computeVertexNormals();
    geometry.computeBoundingSphere();

    if (meshRef.current) {
      meshRef.current.geometry = geometry;
    }

    // if (materialRef.current) {
    //   materialRef.current.uniforms.uColor.value.set('purple');
    // }
  }, [flower, height, noiseImpactX, noiseImpactY, noiseImpactZ, noiseScale, radialSegments, radiusBottom, radiusTop, noise]);

  return (
    <mesh
      ref={meshRef}
      rotation={rotation}
      position={[positionX, positionY, positionZ]}
    >
      {/* <meshLambertMaterial attach="material" color={color} /> */}
      <customShaderMaterial ref={materialRef} />
    </mesh>
  );
}

export default Petals;
