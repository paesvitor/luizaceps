import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    position: relative;
    padding: ${theme.spacing.lg};
    border: 2px solid ${theme.colors.light};
  `}
`;

export const LoaderWrapper = styled.section`
  ${({ theme }) => css`
    padding: ${theme.spacing.lg};
    text-align: center;
  `}
`;

export const CloseButton = styled.button`
  ${({ theme }) => css`
    all: unset;
    cursor: pointer;
    position: absolute;
    right: ${theme.spacing.lg};
    top: ${theme.spacing.lg};
    stroke: ${theme.colors.black};
    stroke-width: 0.3;
    fill: ${theme.colors.white};
    width: 25px;
    transition: all 0.2s;

    &:hover {
      fill: ${theme.colors.primary};
    }

    &:active {
      fill: ${theme.colors.primaryDarker};
      transform: translateY(2px);
    }
  `}
`;
