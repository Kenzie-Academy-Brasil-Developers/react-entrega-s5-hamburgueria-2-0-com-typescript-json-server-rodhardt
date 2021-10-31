import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100%;
  height: 64px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--grey100);
  padding: 20px 10px;
  position: fixed;

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
    transform: translateY(12px);
  }

  .icons {
    margin-left: 17px;
  }

  .icons svg {
    color: var(--grey300);
    width: 16px;
    height: 16px;
  }

  .icons svg:hover {
    cursor: pointer;
    color: var(--gray600);
  }

  .cart-count {
    background-color: var(--primary);
    color: white;
    font-size: 10px;
    font-weight: bold;
    border-radius: 5px;
    padding: 2px 3px;
    transform: translate(12px, -30px);
  }

  .open-cart:hover + .cart-count {
    background-color: var(--success);
  }

  .cart-count:hover {
    cursor: pointer;
    background-color: var(--success);
  }

  .mobile-search {
    position: absolute;
    left: 50%;
    transform: translateX(calc(-50% + 20px));
  }

  .desktop-search {
    margin-left: auto;
  }

  @media screen and (min-width: 620px) {
    padding: 20px 60px;
  }

  @media screen and (min-width: 1094px) {
    padding: 20px calc((100vw - 1000px) / 2);
  }
`;
