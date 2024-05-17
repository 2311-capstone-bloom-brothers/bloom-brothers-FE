import { useState, useEffect } from 'react';
import Receptacle from "./Receptacle";
import Stem from "./Stem";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sky, OrthographicCamera } from '@react-three/drei';
import { StyledDiv } from './FlowerAssembly.styled';

export default function FlowerAssembly({ flower }) {
    const [planted, setPlanted] = useState(Date.now());
    const [currentTime, setCurrentTime] = useState(Date.now());
    const [topPoint, setTopPoint] = useState(null);
    const [bloomAngle, setBloomAngle] = useState(null);
    const [lifeCycle, setLifeCycle] = useState(10000); // Total life cycle duration in milliseconds
    const [stage, setStage] = useState('seedling');
    const [ currentPlants, setCurrentPlants ] = useState(null)

    const stages = ['seedling', 'blooming', 'thriving', 'wilting', 'dead'];
    const stageDurations = lifeCycle / stages.length; // Duration for each stage

    const getCurrentStage = () => {
        const timeElapsed = Date.now() - planted;
        const stageIndex = Math.floor(timeElapsed / stageDurations);
        console.log(lifeCycle)
        return stages[Math.min(stageIndex, stages.length - 1)];
    };

    // function findCurrentPlantData() {
    //     const stageIndex = Math.floor(timeElapsed / stageDurations);
    //     const percentBetween = Math.round((Date.now - flower.planted - stageIndex) * 100)  
    //     const data1 = getComponentData(flower, 'bloom', stageIndex)
    //     const data2 = getComponentData(flower, 'bloom', stageIndex + 1)
    //     const dataKeys = Object.keys(data1)
    //     const avgData = dataKeys.reduce((acc, dataKey) => {
    //         acc[dataKey] = (data1[dataKey] + (data2[dataKey] - data1[dataKey]) * percentBetween)
        
    //         return acc
    //     }, {})
    // }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(Date.now());
            setStage(getCurrentStage());
        }, 1000); // Update every second

        return () => clearInterval(interval);
    }, [planted, lifeCycle]);

    const handleTopPoint = (point, angle) => {
        const bloomAngle = angle - 11;
        setTopPoint(point);
        setBloomAngle(bloomAngle);
    };

    return (
        <StyledDiv>
            <Canvas id='flowerCanvas'>
                <ambientLight intensity={1} />
                <directionalLight intensity={10} castShadow position={[2, 1, 5]} shadow-mapSize={[1024, 1024]} />
                <OrthographicCamera makeDefault position={[100, 10, 10]} zoom={30} />
                <OrbitControls />
                <Sky
                    distance={450000}
                    sunPosition={[0, 0, -1]}
                    inclination={0.49}
                    azimuth={0.25}
                    turbidity={0}
                    rayleigh={0.01}
                    mieCoefficient={0.005}
                    mieDirectionalG={1}
                />
                <group position={[0, -5, 0]}>
                    {flower && <Receptacle topPoint={topPoint} bloomAngle={bloomAngle} flower={flower.phases[stage]} />}
                    {flower && <Stem onTopPointComputed={handleTopPoint} flower={flower.phases[stage]} />}
                </group>
            </Canvas>
        </StyledDiv>
    );
}
