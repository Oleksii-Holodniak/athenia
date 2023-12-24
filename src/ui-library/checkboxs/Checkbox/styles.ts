import styled, { css } from "styled-components";
import { ICheckbox } from "./types";

export const Container = styled.label`
  display: block;
  position: relative;
  width: 20px;
  aspect-ratio: 1 / 1;
  border-radius: 4px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const Input = styled.input<ICheckbox>`
  &:checked ~ .mark {
    background: ${({ theme }) => theme.colors.primary.gold700};
    border: 1.5px solid transparent;
  }
  ${({ error, theme }) =>
    error &&
    css`
      & ~ .mark {
        border: 1.5px solid ${theme.colors.primary.error600};
        background: ${({ theme }) => theme.colors.primary.error25};
        svg {
          display: none;
        }
      }
    `}
`;

export const CheckMark = styled.span`
  border: 1.5px solid ${({ theme }) => theme.colors.primary.gray300};
  ${({ theme }) => theme.flex.center};
  &:disabled {
    background: ${({ theme }) => theme.colors.primary.gray100};
    border: 1px solid ${({ theme }) => theme.colors.primary.gray300};
  }

  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border-radius: 4px;
  transition: 0.2s ease;
  background-color: #fff;

  &:not(:disabled) {
    @media (hover: hover) {
      &:hover {
        border: 1px solid ${({ theme }) => theme.colors.primary.gold700};
      }
    }
  }
`;

export const Wrapper = styled.div`
  ${({ theme }) => theme.flex.row};
  gap: 8px;
`;

export const Message = styled.span`
  color: ${({ theme }) => theme.colors.primary.gray600};
  font-size: 14px;
  line-height: 150%;
  font-weight: 400;
  line-height: normal;
`;
