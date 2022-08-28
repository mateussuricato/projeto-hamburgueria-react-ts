import styled, { css } from "styled-components";

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
    width: 12rem;
    height: 8rem;
    border-radius: 8px;
    border: 1px dashed ${theme.colors.primaryColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.primaryColor};
    cursor: pointer;
  `}
`;


export const EntityCard = styled.div`
  ${({ theme }) => css`
    width: 12rem;
    height: 8rem;
    border-radius: 8px;
    border: 1px dashed ${theme.colors.baseLine};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: ${theme.colors.textColor};
    cursor: pointer;

    p {
      margin-top: 2rem;
    }

    div {
      display: flex;
      width: 100%;
    }
  `}
`;

export const SettingsCategoryEditButton = styled.button`
  ${({ theme }) => css`
    width: 100%;
    height: 3.25rem;
    border-radius: 0 0 0px 8px;
    background-color: ${theme.colors.primaryColorOpacity};
    color: ${theme.colors.primaryColor};
    border: 1px solid ${theme.colors.primaryColor};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
  `}
`;

export const SettingsCategoryDeleteButton = styled.button`
  ${({ theme }) => css`
    width: 100%;
    height: 3.25rem;
    border-radius: 0 0 8px 0px;
    background-color: ${theme.colors.baseBg2};
    color: ${theme.colors.secondaryColor};
    border: 1px solid ${theme.colors.secondaryColor};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
  `}
`;