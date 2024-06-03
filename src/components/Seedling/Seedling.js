import { useState } from "react"

const Seedling = () => {
    const [leafGlow, setLeafGlow] = useState(false)
    
    return (
        <Seedling key={seedling.id} seedling={seedling} flower={null} onPointerOver={(e) => setLeaf1Glow(true)}
        onPointerOut={(e) => { if(leaf1Glow) {setLeaf1Glow(false)}}}
        />
    )
}

export default Seedling