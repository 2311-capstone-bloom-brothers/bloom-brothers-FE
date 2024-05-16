import { StyledFlowers } from "./Flowers.styled";
import { useState } from 'react'

export default function Flowers({myFlowers}) {

    const flowers = myFlowers.map((flower) => {
        return <div className="flower"></div>
    })

    return (
        <StyledFlowers>
          {flowers}
        </StyledFlowers>
    )
}
