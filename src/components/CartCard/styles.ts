import styled from "styled-components";

export const CartCardStyled = styled.div`
  width: 95%;
  display: flex;
  margin: 10px auto;

  .image-container {
    width: 70px;
    height: 60px;
    background-color: var(--grey100);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 70%;
  }

  .info-container {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin-left: 20px;
  }

  .quantity-buttons {
    display: flex;
    width: 95px;
    border: 1px solid var(--grey100);
    border-radius: 3px;
    height: 25px;
  }

  .quantity-buttons button {
    width: 28px;
    border: none;
    background-color: var(--grey100);
    color: var(--negative);
  }

  .quantity-buttons button:hover {
    background-color: #82828270;
  }

  .quantity-buttons h4 {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon-container {
    width: 30px;
    color: var(--grey300);
  }

  .icon-container svg:hover {
    cursor: pointer;
    color: var(--gray600);
  }
`;
