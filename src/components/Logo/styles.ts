import styled from "styled-components";

export const LogoStyled = styled.section`
  width: 95%;
  min-width: 290px;
  max-width: 320px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    align-self: flex-start;
    width: 304px;
    text-align: left;
    margin: 0 auto 15px;
  }

  h1 span {
    color: var(--secondary);
    font-size: 18px;
  }

  svg {
    color: var(--success);

    width: 40%;
    height: 40%;
  }

  .container {
    border: 2px solid var(--grey0);
    border-radius: 5px;
    color: var(--grey300);
    display: flex;
    align-items: center;
    height: 100px;
    width: 100%;
    max-width: 304px;
  }

  .container .icon {
    width: 66px;
    height: 70px;
    background-color: #27ae6020;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin: 5px 7px;
  }

  .container .description {
    text-align: left;
    display: flex;
    flex-wrap: wrap;
    width: 229px;
  }

  .container span {
    color: var(--gray600);
  }

  .balls {
    display: none;
  }

  @media screen and (min-width: 750px) {
    width: 50%;
    max-width: 450px;
  }
  @media screen and (min-width: 1000px) {
    .balls {
      display: flex;
      flex-wrap: wrap;
      width: 200px;
      height: 100px;
      margin-top: 30px;
      transform: translateX(-58px);
    }
    .balls div {
      width: 12px;
      height: 12px;
      margin: 0px 10px;
      border-radius: 50%;
      background-color: var(--grey0);
    }
  }
`;
