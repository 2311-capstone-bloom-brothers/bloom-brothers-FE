import { Sphere } from "@react-three/drei"
import Petals from "./Petals"
import { useEffect, useState, useRef } from "react"
import { useFrame } from "@react-three/fiber"

const Receptacle = ({flower, topPoint, bloomAngle}) => {
    const [receptRadius, setReceptRadius] = useState()
    const [currentPhase, setCurrentPhase] = useState('thriving')
    const [flowerPetals, setFlowerPetals] = useState()
    const [attachPoint, setattachPoint] = useState()
    const [scale, setScale] = useState()
    const materialRef = useRef();

    useFrame((state, delta) => {
        // if (materialRef.current) {
        //     materialRef.current.uniforms.uTime.value += delta; // Update the time uniform
        // }
    });

    let petalArray

    useEffect(() => {
        if(topPoint){
            setattachPoint(topPoint)
        }
    }, [topPoint])

    useEffect(() => {
        if(flower){
            petalArray = [];
            const colorArray = ['blue']
            let c = 0;
            
            for (let i = 0; i < flower.petalCount; i += 1) {
                petalArray.push(
                    <Petals
                        key={i}
                        positionX={0}
                        positionY={0}
                        positionZ={0}
                        rotationX={0}
                        rotationY={i+10}
                        rotationZ={0}
                        color={colorArray[c]}
                        flower={flower}
                    />
                );

                c = (c + 3) % colorArray.length;
            }
                
            setFlowerPetals(petalArray);
            setReceptRadius(flower.recRadius)
        }
        if (materialRef.current) {
            materialRef.current.uniforms.uColor.value.set('yellow')
        }
    }, [flower]);

    return (
        <>
            <group scale={scale} position={attachPoint} rotation={[bloomAngle,0,0]}>
                {flowerPetals && flowerPetals}
                {attachPoint && <Sphere position={[0, 0, 0]} args={[receptRadius]}>
                    {/* <meshStandardMaterial color="yellow" /> */}
                    <customShaderMaterial ref={materialRef} />
                </Sphere>}
            </group>
        </>
    )
}

    export default Receptacle