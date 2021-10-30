import styled from "styled-components";

export const ProductCardStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 2px solid var(--grey100);
  border-radius: 5px;

  :hover {
    border-color: var(--primary);
  }

  :hover button {
    background-color: var(--primary);
  }

  .img-container {
    background-color: var(--grey100);
  }
  img {
    width: 120px;
    height: 90px;
    object-fit: cover;
  }
  h4 {
    margin-left: 10px;
    margin-top: 15px;
    text-align: left;
  }

  p {
    margin-left: 10px;
    margin-top: 15px;
    text-align: left;
    font-size: 14px;
  }

  h5 {
    margin-left: 10px;
    margin-top: 15px;
    text-align: left;
    color: var(--primary);
    font-size: 14px;
  }

  button {
    width: 100px;
    margin: 10px;
    height: 35px;
    color: white;
    font-size: 14px;
    font-weight: bold;
    background-color: #82828290;
    border-radius: 7px;
    border: 0;
  }

  button:hover {
    background-color: #27ae6080;
  }
`;
