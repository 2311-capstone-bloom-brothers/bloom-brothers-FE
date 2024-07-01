import React from 'react'
import { usePlane } from '@react-three/cannon'
import { SpotLight, Stars } from '@react-three/drei'


const BreedingScreen = ({breedMode, renderedFlowers, spotlightPos}) => {
    
    const p = [...spotlightPos]

  return (
    <>
        <ambientLight intensity={.8} position={[0, 0, 0]} />
        <SpotLight
            position={[p[0], 2, p[2]]} 
            rotation={[0,0,0]}
            distance={10}
            angle={1}
            attenuation={1}
            anglePower={1}
        />
        <Ground />
    </>
  )
}

export default BreedingScreen


const Ground = () => {

    let r = Math.PI / 180;
  
    const [ground] = usePlane(() => ({
      mass: 1,
      type: 'Static',
      position: [0, 0, 0],
      rotation: [-90 * r, 0, 0],
    }));
  
    const [ceiling] = usePlane(() => ({
      mass: 1,
      type: 'Static',
      position: [0, 10, 0],
      rotation: [90 * r, 0, 0],
    }));
  
    const [wall1] = usePlane(() => ({
      mass: 1,
      type: 'Static',
      position: [5, 5, 0],
      rotation: [0, -90 * r, 0],
    }));
  
    const [wall2] = usePlane(() => ({
      mass: 1,
      type: 'Static',
      position: [-5, 5, 0],
      rotation: [0, 90 * r, 0],
    }));
  
    const [wall3] = usePlane(() => ({
      mass: 1,
      type: 'Static',
      position: [0, 5, -5],
      rotation: [0, 0, 0],
    }));
  
    const [wall4] = usePlane(() => ({
      mass: 1,
      type: 'Static',
      position: [0, 5, 5],
      rotation: [r * 180, 0, 0],
    }));
  
  
    return (
      <group position={[0, 0, 0]}>
        <mesh receiveShadow ref={ground}>
          <planeGeometry args={[10, 10, 256, 256]} />
          <meshLambertMaterial
            color={'lightgreen'}
          />
        </mesh>
      </group>
    )
  }
