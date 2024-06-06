import React, { useRef, useEffect, useState, useMemo } from 'react';
import * as THREE from 'three';
import { TubeGeometry, CatmullRomCurve3, Vector3 } from 'three';
import { useFrame } from '@react-three/fiber';
import { useCompoundBody, useSphere, useCylinder, useBox, usePointToPointConstraint, useLockConstraint, useDistanceConstraint, useSpring, useConeTwistConstraint } from '@react-three/cannon';
import { Noise } from 'noisejs';
import { MeshWobbleMaterial } from '@react-three/drei'
import { Html } from '@react-three/drei';
import {deleteFlower} from '../apiCalls'

const Flower1 = ({ flower, stage, pos, deleteThisFlower }) => {
  const flowerPhases = ['seedling', 'blooming', 'thriving', 'wilting', 'dead']
  const springRestLength = 1;
  const springStiffness = 100;
  const springDamping = 10;

  const targetDuration = flower.lifespan / 5;
  const [topPoint, setTopPoint] = useState([0, 0, 0]);

  const noise = useMemo(() => new Noise(123456), [])

  // currentStage is a string and is the name of the stage
  // nextStageData is an object with the flower data
  // currentStageData is an object with the flower data

  const [currentStage, setCurrentStage] = useState(null)
  const [nextStage, setNextStage] = useState(null)
  const [currentStageData, setCurrentStageData] = useState(null)
  const [nextStageData, setNextStageData] = useState(null)
  const [flowerPosition, setFlowerPosition] = useState(null)
  const [stemHeight, setStemHeight] = useState(2)
  const [bloomColor, setBloomColor] = useState([0,255,0]) 
  const recRef = useRef()
  const bloomRef = useRef()

  useEffect(() => {
    if (!stage) {
      let foundStage = Math.floor((Math.floor(Date.now() / 1000) - flower.planted) / targetDuration)
      if (foundStage > 3) {
        foundStage = 4
      }
      setCurrentStageData(flower.phases[flowerPhases[foundStage]])
      if (foundStage === 4) {
        setNextStageData(flower.phases[flowerPhases[4]])
        setNextStage(flowerPhases[4])
      } else {
        setNextStageData(flower.phases[flowerPhases[foundStage + 1]])
        setNextStage(flowerPhases[foundStage + 1])
      }
      setCurrentStage(flowerPhases[foundStage])
    } else {
      
    }
    
    if(flower.phases && currentStage){
      // const stageIndex = flowerPhases.indexOf(stage)
      setBloomColor(...flower.phases[currentStage].color)
    }

      // console.log(stage)

  }, [flower, stage])


  useEffect(() => {
    let height = 0
    if (currentStageData) {
      for (let i = 0; i < currentStageData.path.length; i++) {
        height += currentStageData.path[i][1]
      }
      setStemHeight(currentStageData.path[currentStageData.path.length-1][1])
    }
    
  }, [currentStageData])

  useEffect(() => {
    if(currentStageData){
      const {noiseScale, noiseImpactX, noiseImpactY, noiseImpactZ} = currentStageData
      const positions = bloomRef.current.geometry.attributes.position.array
      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i];
        const y = positions[i + 1];
        const z = positions[i + 2];

        positions[i] += (noise.perlin3(x * noiseScale, y * noiseScale, z * noiseScale) * noiseImpactX) * 5;
        positions[i + 1] += (noise.perlin3(x * noiseScale, y * noiseScale, z * noiseScale) * noiseImpactY) * 5;
        positions[i + 2] += (noise.perlin3(x * noiseScale, y * noiseScale, z * noiseScale) * noiseImpactZ) * 5;
      }

      bloomRef.current.geometry.attributes.position.needsUpdate = true
      bloomRef.current.geometry.computeVertexNormals()
    }
  }, [currentStageData])



  const [flowerObj, flowerObjApi] = useCompoundBody(() => ({
    mass: 0.1,
    type: 'Static',
    position: flowerPosition ? flowerPosition : [0, 0, 0],
    shapes: [
      {
        type: 'Sphere',
        args: [
          currentStageData ? currentStageData.recRadius : 0.16,
          32,
          32
        ]
      },
      {
        type: 'Cylinder',
        args: [
          currentStageData ? currentStageData.radiusTop : 0.2,
          currentStageData ? currentStageData.radiusBottom : 0.2,
          0.1
        ]
      },
      {
        type: 'Cylinder',
        args: [
          currentStageData ? currentStageData.stemWidth : 0.01,
          currentStageData ? currentStageData.stemWidth : 0.01,
          stemHeight,
          32]
      }
    ]
  }));

  useEffect(() => {
    if (pos && currentStageData) {
      setFlowerPosition([pos[0], pos[1], pos[2]]);
      flowerObjApi.position.set(pos[0], pos[1], pos[2])
      flowerObj.current.positon = [pos[0], pos[1], pos[2]]
    }

    // console.log(flower)

  }, [pos, currentStageData, flowerPosition]);

  

  useEffect(() =>{
    if(bloomColor){
      let r,g,b
      
      r = bloomColor[0] / 255
      g = bloomColor[1] / 255 
      b = bloomColor[2] / 255 
      
      bloomRef.current.material.color.setRGB(r,g,b)
    }    
  }, [bloomColor])
  

  return (
    <group ref={flowerObj}>
      <Html>
        <button onClick={(e) => deleteThisFlower(flower.id)}>Delete</button>
      </Html>
      <mesh castShadow position={[0,stemHeight,0]} receiveShadow >
        <sphereGeometry args={[
          currentStageData ? currentStageData.recRadius * 0.5 : 0.16,
          32,
          32
        ]} />
        <meshStandardMaterial color="yellow" />
      </mesh>
      <mesh ref={bloomRef} castShadow position={[0,stemHeight,0]} receiveShadow >
        <cylinderGeometry args={[
          currentStageData ? currentStageData.radiusTop : 0.2,
          currentStageData ? currentStageData.radiusTop : 0.2,
          0.01
        ]} />
        <meshStandardMaterial color={'blue'} />
      </mesh>
      <mesh castShadow position={[0,stemHeight /2,0]} receiveShadow>
        <cylinderGeometry args={[
          currentStageData ? currentStageData.stemWidth * 0.1 : 0.01,
          currentStageData ? currentStageData.stemWidth * 0.1 : 0.01,
          stemHeight,
          32]} />
        <meshStandardMaterial color="green" />
      </mesh>
    </group>
  );
};

export default Flower1;