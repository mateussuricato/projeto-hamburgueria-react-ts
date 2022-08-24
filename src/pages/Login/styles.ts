import styled, { css } from "styled-components";
import background from "../../assets/logo_patterns/pizza-pattern.png";

export const LoginPageContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    background-image: url(${background});
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const LoginFormContainer = styled.form`
  ${({ theme }) => css`
    width: 23rem;
    height: 28rem;
    background-color: ${theme.colors.baseBg2};
    border-radius: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 3px 3px 6px 3px rgba(108, 234, 105, 0.3);
    flex-direction: column;
    box-sizing: border-box;
    padding: 2rem 0;
  `}
`;

export const LoginLogoContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 12.5rem;
    display: flex;
    justify-content: space-around;
    padding: 0 1rem;
    box-sizing: border-box;

    h1 {
      width: 10rem;
      height: 9.2rem;
      text-transform: uppercase;
      font-family: ${theme.constants.logoFontFamily};
      color: ${theme.colors.textColor};
      font-size: 62px;
      text-align: center;
      border-top: 7px double ${theme.colors.textColor};
      border-bottom: 7px double ${theme.colors.textColor};
    }

    img {
      width: 8rem;
      height: 8rem;
    }
  `}
`;

export const ErrorMessage = styled.p`
  ${({ theme }) => css`
    color: red;
    align-self: center;
    font-size: small;
    height: 2rem;
    padding: 0 2rem;
    text-align: center;
  `}
`