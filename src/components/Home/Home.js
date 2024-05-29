import { StyledHome } from "./Home.styled";
import SeedSelector from "../SeedSelector/SeedSelector";
import Flowers from "../Flowers/Flowers";
import * as flowerConverter from '../../functions/convertFlowerObject';
import { useEffect, useState, useCallback } from "react";
import { seedlingsData } from '../../seedlings-dummy';
import { postFlower, getFlowers } from "../../apiCalls";

export default function Home({ seedlings }) {
    const [myFlowers, setMyFlowers] = useState([]);
    const [mySeedlings, setMySeedlings] = useState();
    const [background, setBackground] = useState('1');

    function plantFlower(formData) {
        const newFlower = {
            "name": formData.name,
            "description": formData.description,
            type: 'flower1'
        };

        postFlower(newFlower)
        .then(data => {
            const cleanedNewFlower = flowerConverter.convertFlowerObject(data.data.attributes)

            setMyFlowers(prev => [...prev, cleanedNewFlower])
        })
    }

    function cleanFlowers(flowers) {
        return flowers.map((flower) => {
            return flowerConverter.convertFlowerObject(flower.attributes)
        })
    }


    const getAllSeedlings = () => {
        const cleanedSeedlings = cleanFlowers(seedlingsData)
        setMySeedlings(cleanedSeedlings)
    }

    const getAllFlowers = () => {
        getFlowers()
        .then(data => {
            const cleanedFlowers = cleanFlowers(data.data)
            setMyFlowers(cleanedFlowers)
        })
    }

    useEffect(() => {
        getAllSeedlings()
        getAllFlowers()
        setBackground('1')
    }, [])

    console.log('myFlowers', myFlowers)

    return (
        <StyledHome className={`styled-home ${background}`}>
            <div className='background-container'>
                <img src={'/assets/waver-background.jpg'} alt='background waves'></img>
            </div>
            {/* <div className='background-container-2'>
                <img src={'/assets/waver-background.jpg'} alt='background waves'></img>
            </div> */}
            <h1>bLOOMbABY</h1>
            {myFlowers.length === 0 ?
                mySeedlings && <SeedSelector className="seed-selector" plantFlower={plantFlower} seedlings={mySeedlings} />
                :
                <Flowers className="flowers" myFlowers={myFlowers} />
            }
        </StyledHome>
    );
}
