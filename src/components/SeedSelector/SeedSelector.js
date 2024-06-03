import { StyledSeedSelector } from "./SeedSelector.styled";
import FlowerAssembly from "../FlowerAssembly/FlowerAssembly"
import NewPlantForm from "../NewPlantForm/NewPlantForm";
import Text3 from "../Text3";
import { useState } from "react";
import Seedling from "../Seedling/Seedling";

export default function SeedSelector({ seedlings }) {
    


    const seedlingComponents = seedlings.map((seedling) => {
        return (
            <Seedling key={seedling.id} seedling={seedling} flower={null} onPointerOver={(e) => setLeaf1Glow(true)}
            onPointerOut={(e) => { if(leaf1Glow) {setLeaf1Glow(false)}}}/>


            // <FlowerAssembly key={seedling.id} seedling={seedling} flower={null} onPointerOver={(e) => setLeaf1Glow(true)}
            // onPointerOut={(e) => { if(leaf1Glow) {setLeaf1Glow(false)}}} 
            // position={!leaf1Glow ? [2, 0, 0] : [2, 0.2, 0]} />
        )
    })


    return (
        <StyledSeedSelector className="styled-seed-selector">
            <Text3 />
            {seedlingComponents}
            {/* <NewPlantForm plantFlower={plantFlower} /> */}
        </StyledSeedSelector>
    )
}