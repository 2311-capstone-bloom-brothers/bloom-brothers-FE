import FlowerAssembly from "../FlowerAssembly/FlowerAssembly"
import { StyledFlowers } from "./Flowers.styled";
import { useState } from 'react'

export default function Flowers({myFlowers}) {
console.log('myFlowers in flowers', myFlowers)

    const flowers = myFlowers.map((flower) => {
        console.log('flower in flower', flower)
        return (
            // <div className="flower-container">
                <FlowerAssembly key={flower.id} flower={flower} />
            // </div>
        )
        // return <div className="flower"></div>
    })

    return (
        <></>
        // <StyledFlowers>
          /* {flowers} */
        // </StyledFlowers>
    )
}
