import { useState, useEffect } from 'react'
import Receptacle from "./Receptacle"
import Stem from "./Stem"
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Sky } from '@react-three/drei';

export default function FlowerAssembly({ flower }) {
    const [planted, setPlanted] = useState(Date.now())
    const [currentTime, setCurrentTime] = useState(null)
    const [topPoint, setTopPoint] = useState(null)
    const [bloomAngle, setBloomAngle] = useState(null)
    // const [thisFlower, setThisFlower] = useState(convertPlantObj(plant))
    const [lifeCycle, setLifeCycle] = useState(300000)
    const [stage, setStage] = useState('seedling')

    const stages = ['seedling', 'blooming', 'thriving', 'wilting', 'dead']
    const timeCalc = (Date.now() - planted) / 5000

    useEffect(() => {
        if(flower){
            setStage(stages[0])
        }
    },  [flower])

    const handleTopPoint = (point, angle) => {
            setTopPoint(point)
            setBloomAngle(angle)
        }

        console.log('flower', flower)

    return (
        <Canvas>
            <ambientLight intensity={1} />
            <directionalLight intensity={10} castShadow position={[2, 1, 5]} shadow-mapSize={[1024, 1024]} />
            <PerspectiveCamera makeDefault position={[10, 15, 0]} fov={75} near={0.001} far={1000} />
            <OrbitControls />
            <Sky />
            {flower && <Receptacle topPoint={topPoint} bloomAngle={bloomAngle} flower={flower.phases[stage]} />}
            {flower && <Stem onTopPointComputed={handleTopPoint} flower={flower.phases[stage]} /> }
        </Canvas>
    )
}
