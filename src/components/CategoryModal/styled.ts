import styled, { css } from "styled-components";

export const ModalContainer = styled.form`
  ${({ theme }) => css`
    background-color: ${theme.colors.baseBg2};
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    color: ${theme.colors.textColor};
    width: 22rem;
    height: 15rem;
    border-radius: 8px;

    div {
      width: 75%;
      display: flex;
      justify-content: space-between;
    }
  `}
`;