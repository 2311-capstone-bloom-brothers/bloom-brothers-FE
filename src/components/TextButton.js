import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { extend, useFrame } from '@react-three/fiber';
import { useRef, useEffect } from 'react';
import { Box3, Vector3 } from 'three';
import { meshTransmissionMaterial, Html } from '@react-three/drei';
import './Text.css'

import Abril from '../assets/Abril Fatface_Regular.json';

extend({ TextGeometry });

export default function TextButton({ goToSeedSelector, goHome }) {
  const r = Math.PI / 180
  const textRef = useRef(null)

  const font = new FontLoader().parse(Abril);
  const textString = '';

  const buttonText = goHome ? "Don't Breed!" : "To Seed Selector"
  const posZ = goHome ? 0 : -5

  function handleClick() {
    if (goToSeedSelector) {
      goToSeedSelector()
    }
    if (goHome) {
      goHome()
    }
  }

  function styleButton() {
    if (goToSeedSelector) {
      return 'select-new-seed-button'
    }
    if (goHome) {
      return 'dont-breed-button'
    }
  }


  return (
    <mesh castShadow receiveShadow
      position={[7, 0, posZ]}
      rotation={[0, -Math.PI / 2, 0]}
      renderOrder={0}
      depthTest={false}
      ref={textRef}
    >
      <Html transform zIndexRange={[0, 0]}><button style={{ zIndex: 0 }} className={styleButton()} onClick={handleClick}>{buttonText}</button></Html>
      <textGeometry args={[textString, { font, size: .5, depth: .2 }]} />
      <meshStandardMaterial color='cyan' />
    </mesh>
  );
}
