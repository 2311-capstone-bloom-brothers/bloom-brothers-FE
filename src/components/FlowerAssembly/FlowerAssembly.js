import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { StyledFlowerAssembly } from './FlowerAssembly.styled';
import Receptacle from "./Receptacle";
import Stem from "./Stem";
import { BoxGeometry } from 'three'; // Import BoxGeometry
import Text3 from '../Text3';
import { OrbitControls, Float, Plane, DragControls, Html, Billboard, useTexture } from '@react-three/drei';
import { Debug, Physics, useCylinder, usePlane, useSphere, useSpring, usePointToPointConstraint, useLockConstraint } from '@react-three/cannon';
import { useGLTF } from '@react-three/drei'

extend({ BoxGeometry }); // Extend BoxGeometry

function RotatingGroup({ children }) {
    const groupRef = useRef();
    const materialRef = useRef();

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.00; // Adjust this value to control the speed of rotation
        }
        if (materialRef.current) {
            materialRef.current.uniforms.uTime.value += delta; // Update the time uniform
        }
    });

    return (
        <group ref={groupRef} position={[0, -5, 0]}>
            {children}
        </group>
    );
}

export default function FlowerAssembly({ flower, seedling }) {
    const [planted, setPlanted] = useState();
    const [topPoint, setTopPoint] = useState(null);
    const [bloomAngle, setBloomAngle] = useState(null);
    const [lifeCycle, setLifeCycle] = useState();
    const [stage, setStage] = useState('seedling');
    const [plantAge, setPlantAge] = useState();
    const [currentTime, setCurrentTime] = useState();

    const stages = useMemo(() => ['seedling', 'blooming', 'thriving', 'wilting', 'dead'], []);
    const stageDurations = useMemo(() => lifeCycle / stages.length, [lifeCycle, stages.length]);

    const getCurrentStage = useCallback(() => {
        const timeElapsed = Date.now() - planted;
        const stageIndex = Math.floor(timeElapsed / stageDurations);
        return stages[Math.min(stageIndex, stages.length - 1)];
    }, [planted, stageDurations, stages]);

    useEffect(() => {
        if (flower) {
            const interval = setInterval(() => {
                const age = Date.now() - parseInt(flower.planted);
                setPlantAge(age / 1000);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [flower]);

    useEffect(() => {
        setPlanted(Date.now());
        setLifeCycle(10000);
        setStage('thriving');
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            const timeElapsed = Date.now() - planted;
            const stageIndex = Math.floor(timeElapsed / stageDurations);
            if (stageIndex < stages.length) {
                setCurrentTime(Date.now());
                setStage(getCurrentStage());
            } else {
                setPlanted(Date.now());
                setCurrentTime(Date.now());
                setStage(getCurrentStage());
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [planted, lifeCycle, getCurrentStage, stageDurations, stages.length, currentTime]);

    const handleTopPoint = (point, angle) => {
        setTopPoint(point);
        setBloomAngle(angle);
    };

    return (
        <>
            {seedling &&
                <>
                    <Receptacle topPoint={topPoint} bloomAngle={bloomAngle} flower={seedling.phases['seedling']} />
                    <Stem onTopPointComputed={handleTopPoint} flower={seedling.phases['seedling']} />
                </>
            }
        </>
    );
}
