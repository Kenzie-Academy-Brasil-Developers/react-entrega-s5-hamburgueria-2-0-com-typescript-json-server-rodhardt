import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--grey100);
  padding: 20px 10px;

  h1 {
    font-size: 20px;
    font-weight: bold;
  }

  h1 span {
    color: var(--secondary);
    font-size: 14px;
  }

  .options {
    display: flex;
  }

  .icons {
    margin-left: 17px;
  }

  .icons svg {
    color: var(--grey300);
    width: 16px;
    height: 16px;
  }

  input {
    width: 50px;
    display: none;
  }
`;
