import styled from "styled-components";

export const ProductCardStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--grey300);

  .img-container {
    background-color: var(--grey100);
  }
  img {
    width: 180px;
  }

  h5 {
    color: var(--primary);
  }
`;
