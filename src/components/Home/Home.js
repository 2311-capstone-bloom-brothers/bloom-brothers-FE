import { StyledHome } from "./Home.styled";
import SeedSelector from "../SeedSelector/SeedSelector";
import * as flowerConverter from '../../functions/convertFlowerObject'
import { useEffect, useState } from "react";
import { seedlings } from '../../seedlings-dummy'

export default function Home({ seedlings }) {
    const [ myFlowers, setMyFlowers ] = useState()
    const [ mySeedlings, setMySeedlings ] = useState()

    function plantFlower(formData) {
        const newFlower = {
            ...seedlings[0],
            name: formData.name,
            description: formData.description
        }
    
        console.log('newFlower', newFlower)

        // postFlower()
        setMyFlowers((prev) => {
            // return [...prev, newFlower]
            return [flowerConverter.convertFlowerObject(newFlower)]
        })
    }

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
        <StyledHome >
            <h1>bLOOMbABY</h1>
            {myFlowers && <SeedSelector plantFlower={plantFlower} myFlowers={myFlowers}/>}
        </StyledHome>
    )
}