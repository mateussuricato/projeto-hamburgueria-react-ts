import styled, { css } from "styled-components";

interface CategoriesNavigationButtonProps {
  active?: boolean;
}

export const FavoriteContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #252836;
  color: #fff;
`;

export const FavoriteCardList = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    align-items: center;
    height: 100vh;
    box-sizing: border-box;
  `}
`;

export const FavoriteCardContainer = styled.div`
  ${({ theme }) => css`
    padding-top: 5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 14rem;
    height: 12rem;
    border-radius: 8px;
  `}
`;

export const FavoriteCard = styled.div`
  ${({ theme }) => css`
    width: 12rem;
    height: 14.125rem;
    background-color: ${theme.colors.baseBg2};
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: ${theme.constants.bodyFontFamily};
    position: relative;
    text-align: center;
    justify-content: center;
    padding-top: 3rem;
    box-sizing: border-box;
    gap: 0.5rem;

    img {
      position: absolute;
      width: 8rem;
      top: -3.3rem;
    }

    h3 {
      text-align: center;
    }

    p {
      text-align: center;
    }
  `}
`;

export const FavoritesNavigationContainer = styled.div`
  ${({ theme }) => css`
    min-width: 19.188rem;
    height: 100vh;
    padding: 1.5rem;
    box-sizing: border-box;
    color: ${theme.colors.textColor};
  `}

  div {
    display: flex;
  }
`;