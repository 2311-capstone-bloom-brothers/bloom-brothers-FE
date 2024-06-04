import { useState } from "react"
import FlowerAssembly from "../FlowerAssembly/FlowerAssembly"
import Flower2 from "../../models/Flower2"
import Flower1 from '../../models/Flower1'
import { useFrame } from "@react-three/fiber"

const Seedling = ({ seedlingIndex, numSeedlings, seedling, flower }) => {
    const [leafGlow, setLeafGlow] = useState(false)
    const [stage, setStage] = useState('seedling')
    console.log(seedling)
        const spacing = 2
        const startPoint = ((0 - spacing) * numSeedlings / 2)
        const xPosition = startPoint + seedlingIndex * spacing
    return (
        // <FlowerAssembly key={seedling.id} seedling={seedling} flower={null} onPointerDown={(e) => setLeafGlow(true)}
        //     onPointerOut={(e) => { if(leafGlow) {setLeafGlow(false)}}} position={!leafGlow ? [xPosition, 0, 0] : [xPosition, 0.2, 0]}
        // />
    <group
        onPointerOver={(e) => setLeafGlow(true)}
        onPointerOut={(e) => { if(leafGlow) {setLeafGlow(false)}}}
        rotation={[0,0,0]}
        position={!leafGlow ? [xPosition, 0, 0] : [xPosition, 0.2, 0]}>
        {seedling.type === 'flower1'
            ?
            <Flower1
            stage={stage}
            flower={seedling.phases[stage]}
            nextStage={null}
            stageDurations={null}
            position={!leafGlow ? [xPosition, 0, 0] : [xPosition, 0.2, 0]}
            />
            :
            <Flower2
            stage={stage}
            flower={seedling.phases[stage]}
            nextStage={null}
            stageDurations={null}
            position={!leafGlow ? [xPosition, 0, 0] : [xPosition, 0.2, 0]}
            />
        }
    </group>
    )
}

export default Seedling