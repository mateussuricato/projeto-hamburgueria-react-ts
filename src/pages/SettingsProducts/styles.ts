import styled, { css } from "styled-components";

interface ActiveButtonProps {
  active?: boolean;
}

export const SettingsContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: ${theme.colors.baseBg1};
  `}
`;


export const EntitiesEditContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: calc(100% - 4.9rem);
    margin-top: 3.1rem;
    margin-bottom: 1.5rem;
    margin-right: 1.5rem;
    background-color: ${theme.colors.baseBg2};
    border-radius: 8px;
    box-sizing: border-box;
    color: ${theme.colors.textColor};

    h2 {
      margin: 2.125rem 0;
      margin-left: 1.5rem;
    }
  `}
`;

export const EntitiesEditCategoriesSelector = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 2.5rem;
    border-bottom: 1px solid ${theme.colors.baseLine};
    padding: 0 1.5rem;
    box-sizing: border-box;
  `}
`;

export const EntitiesEditCategoriesButton = styled.button<ActiveButtonProps>`
  ${({ theme, active }) => css`
    background-color: ${theme.colors.baseBg2};
    color: ${theme.colors.textLight};
    margin-right: 1.5rem;
    cursor: pointer;
    height: 100%;
    padding: 0 0.5rem;
    box-sizing: border-box;

    :hover {
      color: ${theme.colors.textColor};
    }

    ${active &&
    css`
      color: ${theme.colors.primaryColor};
      border-bottom: 2px solid ${theme.colors.primaryColor};
    `}
  `}
`;

export const ConfirmationContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 7.5rem;
    padding-left: 1.5rem;
    padding-top: 3.125rem;
    box-sizing: border-box;
    display: flex;
    gap: 1rem;
  `}
`;

export const EntitiesEditList = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: calc(100% - 16.25rem);
    display: flex;
    flex-wrap: wrap;
    padding: 1.5rem;
    box-sizing: border-box;
    overflow-y: scroll;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  `}
`;

export const AddEntityCard = styled.div`
  ${({ theme }) => css`
    width: 13.75rem;
    height: 18.75rem;
    border-radius: 8px;
    border: 1px dashed ${theme.colors.primaryColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.primaryColor};
  `}
`;

