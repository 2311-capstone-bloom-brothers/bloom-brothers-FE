import styled from "styled-components";

export const StyledHome = styled.div`
    background-image: url(/assets/waver-background.jpg);
    /* background-image: url(/assets/drip-background.jpg); */
    
    background-size: cover;
    /* filter: invert(100%); */
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    h1 {
        padding: 0 50px;
        margin: 10px;; 
        color: black;
        background-color: white;
        width: fit-content;
    }
`