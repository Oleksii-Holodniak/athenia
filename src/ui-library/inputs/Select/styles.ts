import styled, { css } from "styled-components";
import { IOpenable, ISelectComponent } from "./types";

export const Wrapper = styled.div`
  ${({ theme }) => theme.flex.column};
  position: relative;
  gap: 4px;
  min-height: 87px;
`;
export const Container = styled.div`
  width: 100%;
  position: relative;
  cursor: pointer;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.primary.gray600};
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
`;

export const Message = styled.span`
  color: ${({ theme }) => theme.colors.primary.error600};
  font-size: 10px;
  margin-top: -2px;
  font-weight: 400;
  text-align: right;
`;

export const Input = styled.input<ISelectComponent>`
  color: ${({ theme }) => theme.colors.primary.gray800};
  font-weight: 500;
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
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary.gray800};
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
  padding: 12px 48px 12px 16px;
  font-size: 14px;
  line-height: 150%;
  width: 100%;
`;

export const IndicatorImage = styled.div<IOpenable>`
  border: 2px solid ${({ theme }) => theme.colors.primary.main600};
  ${({ theme }) => theme.flex.center};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 16px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  aspect-ratio: 1 / 1;
  padding: 4px;
  img {
    object-fit: contain;
    width: 100%;
    transition: all 0.3s ease;
    height: 100%;
    ${({ isOpen }) => isOpen && "transform: rotateX(180deg)"}
  }
`;

export const Row = styled.div`
  ${({ theme }) => theme.flex.row};
  min-height: 44px;
  padding: 10px 16px;
  gap: 10px;
  cursor: pointer;
  span {
    color: ${({ theme }) => theme.colors.primary.gray800};
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
  }
  @media (hover: hover) {
    transition: all 0.4s ease;
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary.gray100};
    }
  }
`;

export const List = styled.div<IOpenable>`
  ${({ theme }) => theme.flex.column};
  border: 1px solid ${({ theme }) => theme.colors.primary.gray200};
  ${({ isOpen }) =>
    !isOpen
      ? css`
          opacity: 0;
          transform: translateY(calc(100% - 18px));
          visibility: hidden;
          pointer-events: none;
        `
      : css`
          transform: translateY(calc(100% - 12px));
        `}

  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 3;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 4px 7px 0px rgba(37, 38, 44, 0.1);
  max-height: 220px;
  overflow: hidden;
  overflow-y: auto;
  transition: all 0.2s ease-out;
`;

export const NotFound = styled.div`
  color: ${({ theme }) => theme.colors.primary.gray400};
  ${({ theme }) => theme.flex.center};

  height: 100px;
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
`;
