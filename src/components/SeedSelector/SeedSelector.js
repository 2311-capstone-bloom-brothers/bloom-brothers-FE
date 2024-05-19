import { StyledSeedSelector } from "./SeedSelector.styled";
import FlowerAssembly from "../FlowerAssembly/FlowerAssembly"
import NewPlantForm from "../../NewPlantForm/NewPlantForm";

export default function SeedSelector({ plantFlower, seedlings }) {

    const seedlingComponents = seedlings.map((seedling) => {
        return (
            <FlowerAssembly key={seedling.id} seedling={seedling} flower={null} />
        )
    })
    return (
        <StyledSeedSelector className="styled-seed-selector">
            {seedlingComponents}
            <NewPlantForm plantFlower={plantFlower}/>
        </StyledSeedSelector>
    )
}