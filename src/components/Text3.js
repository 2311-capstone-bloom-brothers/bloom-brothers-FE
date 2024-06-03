import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { extend, useFrame } from '@react-three/fiber';
import { useRef, useEffect } from 'react';
import { Box3, Vector3 } from 'three';
import { meshTransmissionMaterial } from '@react-three/drei';

import Abril from '../assets/Abril Fatface_Regular.json';

extend({ TextGeometry });

export default function Text3() {
    const groupRef = useRef(null);


  const textRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const font = new FontLoader().parse(Abril);


  // useEffect(() => {
  //   textRefs.forEach(ref => {
  //     if (ref.current) {
  //       const geometry = ref.current.geometry;
  //       geometry.computeBoundingBox();
  //       const boundingBox = geometry.boundingBox;
  //       const center = new Vector3();
  //       boundingBox.getCenter(center);
  //       geometry.translate(-center.x, -center.y, -center.z);
  //     }
  //   });
  // }, []);

  const textStrings = ['Select a flower for details!'];

  return (
    <group position={[-4,2,-1]} ref={groupRef}>
      {textStrings.map((text, index) => (
        <mesh castShadow receiveShadow
          key={index}
          position={[0, 1 - index, 0]}
          ref={textRefs[index]}
        >
          <textGeometry args={[text, { font, size: .5, depth: .2 }]} />
          <meshStandardMaterial color='yellow'/>
        </mesh>
      ))}
    </group>
  );
}
