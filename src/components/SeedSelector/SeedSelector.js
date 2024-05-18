import { StyledSeedSelector } from "./SeedSelector.styled";
import FlowerAssembly from "../FlowerAssembly/FlowerAssembly"
import { useState } from 'react'
import NewPlantForm from "../../NewPlantForm/NewPlantForm";

export default function SeedSelector({ plantFlower, myFlowers }) {
    const [ newPlant, setNewPlant ] = useState()

    function handleClick() {
        plantFlower()
    }

    const seedlings = myFlowers.map((flower) => {
        return (
                <FlowerAssembly key={flower.id} flower={flower} />
        )
    })


    return (
        <StyledSeedSelector>
            {seedlings}
            <NewPlantForm plantFlower={plantFlower}/>
        </StyledSeedSelector>
    )
}