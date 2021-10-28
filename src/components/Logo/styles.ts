import styled from "styled-components";

export const LogoStyled = styled.section`
  width: 95%;
  margin: auto;
  display: flex;
  flex-direction: column;

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
    width: 304px;
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
    .balls {
      display: flex;
      flex-wrap: wrap;
      width: 200px;
      height: 100px;
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
