import styled from "styled-components";

export const StyledHome = styled.div`
    /* background-image: url(/assets/waver-background.jpg); */
    /* background-image: url(/assets/drip-background.jpg); */
    position: relative;
    /* z-index: 1; */

    /* :before {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 10;
        left: 10;
        background-image: url(/assets/waver-background.jpg);
        opacity: .5;
        z-index: -1;
    } */
    
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

    /* .background-1 {
        background-image: url(/assets/bw-flower-chem.jpg) !important;
    } */

    .background-container{
        z-index: -3;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0.4;
        /* filter: hue-rotate(50deg) brightness(0.8); */
    }
/* 
    .background-container-2 {
        z-index: -0;
        position: absolute;
        top: 7px;
        left: 5px;
        opacity: 0.4;
        filter: hue-rotate(-50deg) brightness(0.8);
        animation-duration: 20s;
        animation-name: glitch;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        animation-delay: 2s;
    } */

    @keyframes glitch {
        0% {
            left: 0px;
            top: 0px;
        }

        100% {
            height: 125%;
            width: 125%;
            left: -21px;
            top: 15px;
        }
    }

`