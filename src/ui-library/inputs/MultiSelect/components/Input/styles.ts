import { IError } from "@/common/types/general";
import styled, { css } from "styled-components";
import { IOpenable } from "./types";

export const Wrapper = styled.div<IError>`
  ${({ theme }) => theme.flex.row};
  ${({ theme, error }) =>
    error
      ? css`
          border: 1px solid ${theme.colors.primary.error600};
        `
      : css`
          border: 1px solid ${theme.colors.primary.gray200};
        `};

  border-radius: 8px;
  cursor: pointer;
  background: #fff;
  gap: 8px;
  height: 44px;
  padding: 0 16px;

  span {
    color: ${({ theme }) => theme.colors.primary.gray800};
    font-size: 14px;
    font-weight: 500;
    line-height: 150%;
  }
`;

export const Tags = styled.div`
  ${({ theme }) => theme.flex.row};
  width: calc(100% - 70px);
  height: 100%;
  gap: 8px;
  overflow: hidden;
  overflow-x: auto;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

export const Tag = styled.div`
  background: ${({ theme }) => theme.colors.primary.main50};
  color: ${({ theme }) => theme.colors.primary.gray800};
  ${({ theme }) => theme.flex.center};

  border-radius: 5px;
  padding: 6px 8px;
  gap: 6px;
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
  white-space: nowrap;
  height: 30px;
`;

export const Close = styled.button`
  width: 10px;
  height: 10px;
  position: relative;
  &::after,
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: center;
    width: 1px;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.primary.gray800};
  }
  &::after {
    transform: translate(-50%, -50%) rotateZ(45deg);
  }
  &::before {
    transform: translate(-50%, -50%) rotateZ(-45deg);
  }
`;

export const Count = styled.div`
  ${({ theme }) => theme.flex.center};
  border-radius: 5px;
  background: #1f75cb;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.28px;
  padding: 4px 7px;
  gap: 4px;
  button {
    &::after,
    &::before {
      background-color: #fff;
    }
  }
`;

export const IndicatorImage = styled.div<IOpenable>`
  border: 2px solid ${({ theme }) => theme.colors.primary.main600};
  ${({ theme }) => theme.flex.center};

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

export const Indicator = styled.div`
  ${({ theme }) => theme.flex.center};
  gap: 4px;
  margin-left: auto;
`;
