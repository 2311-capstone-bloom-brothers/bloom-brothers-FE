import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { Debug, Physics, useCylinder, usePlane, useSphere, useSpring, usePointToPointConstraint, useLockConstraint } from '@react-three/cannon';
// import { Sky } from '@react-three/drei'
import skyScene from '../assets/3d/sky.glb'

const Skybox = () => {
  const sky = useGLTF(skyScene)
  const [lightPos, setLightPos] = useState([10,30,0])
  const [isIncrementing, setIsIncrementing] = useState(true);

  const r = Math.PI /180
  const skyRef = useRef()
  const lightRef = useRef()
  const prog = useRef(10)
  const prog2 = useRef(0)
  const lightProg = useRef(0)

  function handleAnimate() {
      setAnimate(true);
    }



  return (
      <primitive object={sky.scene} scale={0.035} ref={skyRef} rotation={[1, 0,0]} />
  )
}

export default Skybox