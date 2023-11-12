import { IError } from "@/common/types/general";
import styled, { css } from "styled-components";
import { IInput } from "./types";

export const Wrapper = styled.div`
  ${({ theme }) => theme.flex.column};
  min-height: 72px;
  position: relative;
`;

export const Component = styled.input<IInput>`
  color: ${({ theme }) => theme.colors.primary.gray800};
  ${({ theme, error }) =>
    error
      ? css`
          border: 1px solid ${theme.colors.primary.error600};
        `
      : css`
          border: 1px solid ${theme.colors.primary.gray200};
          &:focus {
            border: 1px solid ${theme.colors.primary.gray300};
          }
        `};

  &::placeholder {
    color: ${({ theme }) => theme.colors.primary.gray400};
  }
  &:disabled {
    color: ${({ theme }) => theme.colors.primary.gray300};
    border: 1px solid ${({ theme }) => theme.colors.primary.gray300};
  }

  border-radius: 8px;
  transition: 0.2s ease;
  height: 44px;
  background: #fff;
  outline: none;
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  width: 100%;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.primary.gray600};
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
  margin-bottom: 4px;
`;

export const Message = styled.span<IError>`
  color: ${({ theme, error }) =>
    error ? theme.colors.primary.error600 : theme.colors.primary.gray400};
  font-size: 10px;
  margin-top: 2px;
  font-weight: 400;
  text-align: right;
`;
export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const Icon = styled.button`
  ${({ theme }) => theme.flex.center};
  position: absolute;
  top: 50%;
  height: 100%;
  aspect-ratio: 1 / 1;
  right: 0;
  transform: translate(-4px, -50%);
  svg {
    path {
      width: 20px;
      height: 20px;
    }
  }
`;
