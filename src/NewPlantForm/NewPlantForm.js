import { StyledNewPlantForm } from './NewPlantForm.styled'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function NewPlantForm({ plantFlower }) {
    const [ formData, setFormData ] = useState({name: '', description: ''})

    function handleChange(event) {
        const newData = event.target.value
        setFormData((prev) => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }

    function handleClick(event) {
        // event.preventDefault()
        plantFlower(formData)
    }

    console.log('formData', formData)


    return (
        <StyledNewPlantForm>
            <div className="plant-form-labels">
                <label>Name yo plant
                    <input name="name" onChange={event => handleChange(event)} value={formData.name}/>
                </label>
                <label>describe yo plant
                    <input name="description" onChange={event => handleChange(event)} value={formData.description}/>
                </label>
            </div>
            <Link to="/home">
                <button onClick={event => handleClick(event)}>pLANTfLOWER</button>
            </Link>
        </StyledNewPlantForm>
    )
}