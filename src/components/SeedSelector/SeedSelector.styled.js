import styled from "styled-components";

export const StyledSeedSelector = styled.div`
display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 40px;
  height: 50vw;
  width: 100vw;
  background: #fff0;
  position: absolute;
  z-index: 2;
  filter: drop-shadow(4px 4px #00000047);

    button {
        background-color: white;
        border: none;
        padding: 8px;
        font-weight: 800;
    }
`