import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    > * {
      margin-bottom: ${theme.spacing.md};
    }

    h1 {
      font-size: ${theme.font.xl};
    }
  `}
`;
