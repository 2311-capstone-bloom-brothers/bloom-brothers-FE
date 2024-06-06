import React, { useRef, useEffect, useState, useMemo } from 'react';
import * as THREE from 'three';
import { TubeGeometry, CatmullRomCurve3, Vector3 } from 'three';
import { useFrame } from '@react-three/fiber';
import { useCompoundBody, useSphere, useCylinder, useBox, usePointToPointConstraint, useLockConstraint, useDistanceConstraint, useSpring, useConeTwistConstraint } from '@react-three/cannon';
import { Noise } from 'noisejs';
import {MeshWobbleMaterial} from '@react-three/drei'

const lerp = (start, end, t) => start + (end - start) * t;

const interpolatePath = (currentPath, endPath, t) => {
  const interpolatedPathArray = [];
  for (let i = 0; i < currentPath.length; i++) {
    interpolatedPathArray.push(lerp(currentPath[i], endPath[i], t));
  }
  return interpolatedPathArray;
};

const Flower1 = ({ flower, stage, pos}) => {
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

  const [ currentStage, setCurrentStage ] = useState(null)
  const [ nextStage, setNextStage ] = useState(null)
  const [ currentStageData, setCurrentStageData ] = useState(null)
  const [ nextStageData, setNextStageData ] = useState(null)
  const [flowerPosition, setFlowerPosition] = useState([0,0,0])
  const [stemHeight, setStemHeight] = useState(2)
  const recRef = useRef()
  
useEffect(() =>{
  if(!stage) {
    let foundStage = Math.floor((Math.floor(Date.now()/1000) - flower.planted) / targetDuration)
    if(foundStage > 3) {
      foundStage = 4
    }
    
    setCurrentStageData(flower.phases[flowerPhases[foundStage]])
    if(foundStage === 4) {
      setNextStageData(flower.phases[flowerPhases[4]])
      setNextStage(flowerPhases[4])
    } else {
      setNextStageData(flower.phases[flowerPhases[foundStage +1]])
      setNextStage(flowerPhases[foundStage +1])
    }

    setCurrentStage(flowerPhases[foundStage])

  }


}, [flower, stage])

  
  useEffect(() => {
    let height = 0
    if(currentStageData) {
      for(let i = 0; i < currentStageData.path.length; i++){
        height += currentStageData.path[i][1]
      }
    }
    setStemHeight(height)
  }, [currentStageData])



  const [flowerObj, flowerObjApi] = useCompoundBody(() => ({
    mass: 0.1,
    position: flowerPosition,
    type: 'Static',
    shapes: [
      { type: 'Sphere', position: [0, stemHeight, 0], args:[currentStageData ? currentStageData.recRadius: 0.16,32,32]},
      { type: 'Cylinder', position: [0, stemHeight, 0], args: [0.8, 0.8, 0.1] },
      { type: 'Cylinder', position: [0, stemHeight / 2, 0], args: [
        currentStageData ? currentStageData.stemWidth: 0.01, 
        currentStageData ? currentStageData.stemWidth: 0.01, 
        stemHeight, 
        32] }
    ]
  }));

useFrame(() =>{

  if(flowerObj){
  }
    
})

useEffect(() => {
  if (pos && currentStageData) {
    setFlowerPosition([pos[0], pos[1], pos[2]]);
    console.log(pos)
  }
}, [pos, currentStageData, flower, stage]);

return (
  <group ref={flowerObj} position={flowerPosition}>
    <mesh position={[0, stemHeight, 0]}>
     <sphereGeometry args={[currentStageData ? currentStageData.recRadius: 0.16,32,32]} />
     <meshStandardMaterial color="yellow" />
    </mesh>
    <mesh position={[0, stemHeight, 0]}>
      <cylinderGeometry args={[
        0.8, 
        0.8, 
        0.1, 
        32]} />
      <meshStandardMaterial color="blue" />
    </mesh>
    <mesh position={[0, stemHeight / 2, 0]}>
      <cylinderGeometry args={[
        currentStageData ? currentStageData.stemWidth: 0.01, 
        currentStageData ? currentStageData.stemWidth: 0.01, 
        stemHeight, 
        32]} />
      <meshStandardMaterial color="green" />
    </mesh>
  </group>
);
};

export default Flower1;