import styled from "styled-components";

export const LoginStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 450px;
  padding-top: 120px;
  width: 95%;
  max-width: 960px;
  margin: auto;

  @media screen and (min-width: 1000px) {
    flex-direction: row;
    justify-content: space-around;
    padding: 120px 0 0;
  }
`;
