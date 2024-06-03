import { useState } from "react"
import FlowerAssembly from "../FlowerAssembly/FlowerAssembly"

const Seedling = ({ seedlingIndex, numSeedlings, seedling, flower }) => {
    const [leafGlow, setLeafGlow] = useState(false)

        const spacing = 2
        const startPoint = -((0 - spacing) * numSeedlings / 2)
        const xPosition = startPoint + seedlingIndex * spacing
        // for (let row = -rowOffset; row <= rowOffset; row++) {
        //     const pos = [row * spacing];
        //     const nodeRef = React.createRef();
        //     nodes.push({ id: `${row}`, position: pos, ref: nodeRef });
        //     positions.push(<PlantNode key={`${row}`} pos={pos} ref={nodeRef} />);
        // }

    return (
        <FlowerAssembly key={seedling.id} seedling={seedling} flower={null} onPointerOver={(e) => setLeafGlow(true)}
        onPointerOut={(e) => { if(leafGlow) {setLeafGlow(false)}}} position={!leafGlow ? [xPosition, 0, 0] : [xPosition, 0.2, 0]}
        />
    )
}

export default Seedling