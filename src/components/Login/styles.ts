import styled from "styled-components";

export const LoginStyled = styled.section`
  width: 99%;
  min-width: 290px;
  max-width: 320px;
  margin: 10px auto 20px;
  border: 2px solid var(--grey0);
  border-radius: 5px;
  padding: 15px 0 10px;
  box-shadow: 1px 1px 1px 1px rgba(200, 200, 200, 0.1);

  h4 {
    width: 278px;
    text-align: left;
    margin: 5px auto 10px;
  }

  h4 {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h4 span {
    color: var(--grey300);
    font-size: 12px;
  }

  h4 span:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  button {
    width: 278px;
    height: 45px;
    margin-top: 10px;
    border-radius: 7px;
    border: 0;
    font-weight: bold;
  }

  .login-button {
    color: white;
    background-color: var(--primary);
  }

  .login-button:hover {
    background-color: #27ae6080;
  }

  .register-button {
    color: var(--grey300);
  }

  .register-button:hover {
    background-color: var(--grey300);
    color: var(--grey0);
  }

  p {
    width: 210px;
    margin: 10px auto 5px;
    font-size: 12px;
    color: var(--grey300);
  }

  @media screen and (min-width: 750px) {
    width: 50%;
    max-width: 450px;
  }
`;
