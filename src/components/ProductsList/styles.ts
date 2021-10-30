import styled from "styled-components";

export const ProductsListStyled = styled.section`
  width: 95%;
  margin: auto;
  padding-top: 30px;

  ul {
    max-width: 1080px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0;
    list-style: none;
    margin: auto;
  }

  li {
    margin: 20px;
    width: 220px;
  }
`;
