import { useState, useEffect } from 'react'
import Receptacle from "./Receptacle"
import Stem from "./Stem"


export default function FlowerAssembly({ flower }) {
    const [planted, setPlanted] = useState(Date.now())
    const [currentTime, setCurrentTime] = useState(null)
    const [topPoint, setTopPoint] = useState(null)
    const [bloomAngle, setBloomAngle] = useState(null)
    // const [thisFlower, setThisFlower] = useState(convertPlantObj(plant))
    const [lifeCycle, setLifeCycle] = useState(300000)
    const [stage, setStage] = useState('seedling')

    const stages = ['seedling', 'blooming', 'thriving', 'wilting', 'dead']
    const timeCalc = (Date.now() - planted) / 5000

    useEffect(() => {
        if(flower){
            setStage(stages[0])
        }
    },  [flower])

    const handleTopPoint = (point, angle) => {
            setTopPoint(point)
            setBloomAngle(angle)
        }

        console.log('flower', flower)

    return (
        <>
            {flower && <Receptacle topPoint={topPoint} bloomAngle={bloomAngle} flower={flower.phases[stage]} />}
            {flower && <Stem onTopPointComputed={handleTopPoint} flower={flower.phases[stage]} /> }
        </>
    )
}
