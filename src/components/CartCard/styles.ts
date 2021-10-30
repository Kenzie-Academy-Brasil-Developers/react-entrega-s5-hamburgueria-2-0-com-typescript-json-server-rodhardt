import styled from "styled-components";

export const CartCardStyled = styled.div`
  width: 100%;
  display: flex;

  .image-container {
    width: 80px;
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
  }

  .quantity-buttons {
    display: flex;
  }

  .icon-container {
    width: 30px;
  }
`;
