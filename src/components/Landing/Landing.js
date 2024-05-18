import { StyledLanding } from "./Landing.styled";
import SeedSelector from "../SeedSelector/SeedSelector";
import * as flowerConverter from '../../functions/convertFlowerObject'
import { useEffect, useState } from "react";

export default function Landing({ seedlings }) {
    const [ myFlowers, setMyFlowers ] = useState()

    console.log('seedlings',seedlings)
    console.log('myFlowers', myFlowers)

    function cleanFlowers(flowers) {
        return flowers.map((flower) => {
            console.log('cleanFlowers', flowerConverter.convertFlowerObject(flower))
            return flowerConverter.convertFlowerObject(flower)
        })
    }

    function getAllFlowers() {
        // getFlowers().then()
        const cleanedFlowers = cleanFlowers(seedlings)
        setMyFlowers(cleanedFlowers)
    }

    useEffect(() => {
        getAllFlowers()
    }, [])

    return (
        <StyledLanding >
            <h1>bLOOMbABY</h1>  
            {myFlowers && <SeedSelector myFlowers={myFlowers}/>}
        </StyledLanding>
    )
}