import { useState, useRef, useEffect} from "react"
import FlowerAssembly from "../FlowerAssembly/FlowerAssembly"
import Flower2 from "../../models/Flower2"
import Flower1 from '../../models/Flower1'
import { useFrame } from "@react-three/fiber"
import { Html, Text } from "@react-three/drei"

const Seedling = ({ seedlingIndex, numSeedlings, seedling, flower, pickSeed }) => {
    const [leafGlow, setLeafGlow] = useState(false)
    const [stage, setStage] = useState('seedling')
    const hover = useRef()

        const spacing = 2
        const startPoint = ((0 - spacing) * numSeedlings / 2)
        const xPosition = startPoint + seedlingIndex * spacing

        

    return (
        // <FlowerAssembly key={seedling.id} seedling={seedling} flower={null} onPointerDown={(e) => setLeafGlow(true)}
        //     onPointerOut={(e) => { if(leafGlow) {setLeafGlow(false)}}} position={!leafGlow ? [xPosition, 0, 0] : [xPosition, 0.2, 0]}
        // />
    <mesh
        onPointerOver={(e) => setLeafGlow(true)}
        onPointerOut={(e) => { if(leafGlow) {setLeafGlow(false)}}}
        onPointerDown={(e) => pickSeed(seedling.type)}
        rotation={[0,Math.PI / 2, 0]}
        position={!leafGlow ? [xPosition, 0.5, 0] : [xPosition, 0.7, 0]}>
        {leafGlow && 
            <Html ref={hover} position={[0,1.5,0]}>
                PLANT ME!
            </Html>
        }
            {seedling.type === 'flower1'
                ?
                <Flower1
                
                stage={stage}
                flower={seedling.phases[stage]}
                nextStage={null}
                stageDurations={null}
                />
                :
                <Flower2
                stage={stage}
                flower={seedling.phases[stage]}
                nextStage={null}
                stageDurations={null}
                />
            }
        
    </mesh>
    )
}

export default Seedling