import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #252836;
  color: #fff;
`;
export const HomeContentContainer = styled.div`
  width: calc(100% - 32.375rem);
`;

export const HomeContentHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  box-sizing: border-box;
  height: 16vh;
`;

export const TitleContainer = styled.div`
  h1 {
    font-family: "Big Shoulders Inline Display", cursive;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
  p {
    text-transform: capitalize;
    font-family: "Big Shoulders Inline Display", cursive;
    font-size: 20px;
  }
`;
export const SearchInputContainer = styled.div`
  display: flex;
  width: 173px;
  height: 48px;
  background: #2d303e;
  border: 1px solid #393c49;
  border-radius: 8px;
  align-items: center;
  padding: 0rem 1rem;
  gap: 10px;

input {
    background: #2d303e;
    all: unset;
    width: 120px;
  }
`;
