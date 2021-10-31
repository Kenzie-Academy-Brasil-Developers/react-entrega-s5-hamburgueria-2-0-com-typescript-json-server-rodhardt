import styled from "styled-components";

export const SearchStyled = styled.div`
  display: flex;
  align-items: center;

  input {
    height: 40px;
    border: 2px solid #82828270;
    border-radius: 8px;
    padding-left: 10px;
  }

  input:focus {
    border: 2px solid var(--gray600);
  }

  .icon-container {
    display: flex;
    justify-content: space-between;
    width: 48px;
    align-items: center;
    transform: translateX(-57px);
    z-index: 1;
  }

  .icon-container div:first-child svg {
    width: 10px;
    height: 10px;
  }

  .icon-container div:last-child svg {
    width: 16px;
    height: 16px;
  }

  .search-start {
    background-color: var(--primary);
    width: 22px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border-radius: 5px;
  }

  .search-start:hover {
    cursor: pointer;
    background-color: #27ae6090;
  }

  .search-cancel {
    background-color: var(--secondary);
    width: 22px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    color: var(--gray600);
  }

  .search-cancel:hover {
    cursor: pointer;
    background-color: #eb575790;
    color: #33333390;
  }
`;
