import styled, { css } from "styled-components";
import { Theme } from "../../types/styled-components";

interface CardContainerProps {
  theme: Theme;
}

export const CardContainer = styled.div`
    ${({theme}) => css`
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

    img {
        position: absolute;
        width: 8rem;
        top: -3.3rem;
    }
    `}
`;
