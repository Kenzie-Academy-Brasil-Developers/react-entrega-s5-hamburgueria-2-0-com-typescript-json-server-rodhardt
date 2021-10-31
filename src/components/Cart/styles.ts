import styled from "styled-components";

export const CartStyled = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;

  .opacity {
    z-index: 2;
    background-color: #00000080;
    width: 100%;
    height: 100%;
  }

  .cart {
    z-index: 3;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #ffffff;
    width: 90%;
    min-width: 278px;
    max-width: 520px;
    min-height: 200px;
  }

  header {
    display: flex;
    justify-content: space-between;
    background-color: var(--primary);
    color: white;
    padding: 12px 15px;
    margin-bottom: 15px;
  }

  header button {
    background-color: var(--primary);
    border: none;
    color: white;
    font-weight: bold;
  }

  header button:hover {
    color: var(--success);
  }

  .status-message p:first-child {
    font-size: 16px;
  }

  .status-message p:last-child {
    margin-top: 15px;
    color: var(--grey300);
  }

  ul {
    display: flex;
    flex-direction: column;
  }

  ul p {
    margin-top: 50px;
    font-weight: bold;
  }

  .total {
    display: flex;
    justify-content: space-between;
    width: 95%;
    margin: 15px auto;
    border-top: 2px solid var(--grey100);
    padding-top: 13px;
    font-weight: bold;
  }

  p span {
    color: var(--grey300);
    font-weight: bold;
  }

  .buttons-container {
    display: flex;
    justify-content: space-between;
    min-width: 278px;
    width: 70%;
    margin: 0 auto 15px;
  }

  .buttons-container button {
    border-radius: 7px;
    border: 0;
    font-weight: bold;
    width: 135px;
    height: 45px;
  }

  .complete-button {
    color: white;
    background-color: var(--primary);
  }

  .complete-button:hover {
    background-color: #27ae6080;
  }

  .remove-button {
    color: white;
    background-color: var(--secondary);
  }

  .remove-button:hover {
    background-color: var(--negative);
  }
`;
