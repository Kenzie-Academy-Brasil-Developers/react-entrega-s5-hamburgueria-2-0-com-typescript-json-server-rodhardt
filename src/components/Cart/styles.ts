import styled from "styled-components";

export const CartStyled = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;

  .opacity {
    z-index: 1;
    background-color: #ffffff60;
    width: 100%;
    height: 100%;
  }

  .cart {
    z-index: 2;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #ffffff;
    width: 90%;
  }

  header {
    display: flex;
    justify-content: space-between;
  }

  ul {
    display: flex;
    flex-direction: column;
  }
`;
