import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.lighter};
    padding: ${theme.spacing.lg};

    h1 {
      font-size: ${theme.font.lg};
      margin-bottom: ${theme.spacing.lg};
    }
  `}
`;

export const Form = styled.form`
  display: flex;
`;

export const FormGroup = styled.section`
  display: flex;
  align-items: center;
`;
export const ErrorMessage = styled.section`
  ${({ theme }) => css`
    margin-top: ${theme.spacing.md};
    color: ${theme.colors.danger};
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    margin-right: ${theme.spacing.md};
  `}
`;

export const InputWrapper = styled.section`
  ${({ theme }) => css`
    input {
      padding: ${theme.spacing.sm};
      border-radius: ${theme.borderRadius};
      margin-right: ${theme.spacing.md};
      transition: border 0.2s;
      border: 2px solid ${theme.colors.light};
      font-size: ${theme.spacing.md};

      &:focus {
        outline: none;
        border-color: ${theme.colors.primary};
      }
    }
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.colors.white};
    font-size: ${theme.spacing.md};
    background-color: ${theme.colors.primary};
    border-radius: ${theme.borderRadius};
    padding: 0px ${theme.spacing.lg};
    transition: all 0.2s;

    &:focus {
      outline: none;
    }

    &:hover {
      background-color: ${theme.colors.primaryDarker};
      box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.18);
    }

    &:active {
      background-color: ${theme.colors.primaryDarker};
      transform: translateY(2px);
      box-shadow: none;
    }

    &:disabled {
      pointer-events: none;
      background-color: ${theme.colors.light};
    }
  `}
`;
