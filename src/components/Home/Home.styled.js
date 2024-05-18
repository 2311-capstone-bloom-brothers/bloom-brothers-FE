import styled from "styled-components";

export const StyledHome = styled.div`
    /* background-image: url(/assets/waver-background.jpg); */
    /* background-image: url(/assets/drip-background.jpg); */
    position: relative;

    :before {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 10;
        left: 10;
        background-image: url(/assets/waver-background.jpg);
        opacity: .5;
        z-index: 2;
    }
    
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

    .background-1 {
        background-image: url(/assets/bw-flower-chem.jpg) !important;
    }

    .background-container{
        z-index: -3;
        position: fixed;
        opacity: 0.4;
        filter: hue-rotate(50deg) brightness(0.8);
    }
`