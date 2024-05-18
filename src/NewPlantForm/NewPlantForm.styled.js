import styled from "styled-components";

export const StyledNewPlantForm = styled.form`
    display: flex;
    align-items: center;

    .plant-form-labels {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-right: 10px;
        color: white;
        font-weight: bold;
    }
    
    label {
        margin: 2px;
    }

    input {
        border: none;
        margin-left: 10px;
    }

    button {
        cursor: pointer;
        padding: 15px;
    }
`