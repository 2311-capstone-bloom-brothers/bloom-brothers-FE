import React, { useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import BeeGlb from '../../assets/Bee.glb';

const Bee = ({ x, y, z }) => {
  const beeRef = useRef();
  const gltf = useLoader(GLTFLoader, BeeGlb);

  const beeV = useRef(y);
  const beeXRef = useRef(x);
  const beeZRef = useRef(z);

  const incDec = useRef('inc');
  const xBound = useRef('inc');
  const zBound = useRef('inc');

  useFrame(() => {
    const maxHeight = 2;
    const minHeight = 1.75;
    const max = 0.01;
    const min = 0.005;

    const velAmt = Math.random() * (max - min) + min;

    if (beeV.current > maxHeight) {
      incDec.current = 'dec';
    }

    if (beeV.current < minHeight) {
      incDec.current = 'inc';
    }

    if (incDec.current === 'inc') {
      beeV.current += velAmt;
    } else {
      beeV.current -= velAmt;
    }

    if (beeRef.current) {
      beeRef.current.position.y = beeV.current;
    }
  });

  useFrame(() => {
    const maxZ = 3;
    const minZ = -3;
    const max = 0.02;
    const min = 0.002;

    const velAmt = Math.random() * (max - min) + min;

    if (beeZRef.current > maxZ) {
      zBound.current = 'dec';
    }

    if (beeZRef.current < minZ) {
      zBound.current = 'inc';
    }

    if (zBound.current === 'inc') {
      beeZRef.current += velAmt;
    } else {
      beeZRef.current -= velAmt;
    }

    if (beeRef.current) {
      beeRef.current.position.z = beeZRef.current;
    }
  });

  useFrame(() => {
    const maxX = 3;
    const minX = -3;
    const max = 0.02;
    const min = 0.005;

    const velAmt = Math.random() * (max - min) + min;

    if (beeXRef.current > maxX) {
      xBound.current = 'dec';
    }

    if (beeXRef.current < minX) {
      xBound.current = 'inc';
    }

    if (xBound.current === 'inc') {
      beeXRef.current += velAmt;
    } else {
      beeXRef.current -= velAmt;
    }

    if (beeRef.current) {
      beeRef.current.position.x = beeXRef.current;
    }
  });

  return (
      <primitive ref={beeRef} position={[x, y, z]} object={gltf.scene} scale={[0.3, 0.3, 0.3]} />
  );
};

export default Bee;
