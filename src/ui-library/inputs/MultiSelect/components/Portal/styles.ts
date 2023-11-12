import styled, { css } from "styled-components";
import { IWrapper } from "./types";

export const Wrapper = styled.div<IWrapper>`
  border: 1px solid ${({ theme }) => theme.colors.primary.gray200};
  transition: all 0.2s ease-out;

  ${({ isOpen }) =>
    !isOpen
      ? css`
          opacity: 0;
          visibility: hidden;
          transform: translateY(calc(100% - 18px));
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
  overflow: hidden;
`;

export const SearchWrapper = styled.div`
  ${({ theme }) => theme.flex.row};
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary.gray200};

  width: 100%;
  padding: 0 16px;
  img {
    margin-left: auto;
  }
`;

export const Search = styled.input`
  outline: none;
  height: 44px;
  width: calc(100% - 34px);
  gap: 10px;
  background: #fff;
  border: none;
  font-size: 14px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.primary.gray400};
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
  }
`;

export const List = styled.div`
  ${({ theme }) => theme.flex.column};
  max-height: 220px;
  overflow: hidden;
  overflow-y: auto;
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
