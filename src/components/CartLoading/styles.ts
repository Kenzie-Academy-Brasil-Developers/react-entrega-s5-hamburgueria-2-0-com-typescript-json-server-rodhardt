import styled from "styled-components";

export const CartLoadingStyled = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;
  background-color: #ffffff90;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .container {
    background-color: var(--grey100);
    width: 275px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 120px;
    border-radius: 15px;
  }
`;
