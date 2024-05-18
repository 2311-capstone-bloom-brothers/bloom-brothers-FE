import { StyledSeedSelector } from "./SeedSelector.styled";
import FlowerAssembly from "../FlowerAssembly/FlowerAssembly"
import { useState } from 'react'

export default function SeedSelector({ plantFlower, myFlowers }) {
    const [ newPlant, setNewPlant ] = useState()

    console.log(myFlowers)

    function handleClick() {
        plantFlower()
    }
    const seedlings = myFlowers.map((flower) => {
        console.log('flower in flower', flower)
        return (
            // <div className="flower-container">
                <FlowerAssembly key={flower.id} flower={flower} />
            // </div>
        )
        // return <div className="flower"></div>
    })

    
    return (
        <>
            <StyledSeedSelector>
                {seedlings}
            </StyledSeedSelector>
            <button onClick={handleClick}>plant flower</button>
        </>
    )
}