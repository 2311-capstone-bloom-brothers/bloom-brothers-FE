import { StyledHome } from "./Home.styled";
import Flowers from '../Flowers/Flowers';
import SeedSelector from '../SeedSelector/SeedSelector';
import userFlowers from "../../userFlowers-dummy";
import { useState, useEffect } from 'react'

export default function Home() {
    const [ myFlowers, setMyFlowers ] = useState([0, 1, 2, 3, 4])

    function plantFlower() {
        
    }

    function getAllFlowers() {
        // getFlowers().then()
        console.log(userFlowers)
        // setFlowers(userFlowers)
    }

    useEffect(() => {
        getAllFlowers()
    }, [])

    return (
        <main>
            <StyledHome>
                <h1>bLOOMbABY</h1>  
                {myFlowers &&
                    <>
                        <Flowers myFlowers={myFlowers}/>
                        <SeedSelector plantFlower={plantFlower} />
                    </>
                }
            </StyledHome>
        </main>
    )
}