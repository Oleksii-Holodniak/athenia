import { IOpenable } from "@/common/types/general";
import { Button } from "@/ui-library/buttons";
import styled, { css } from "styled-components";
import { IListProps } from "./types";

const activeState = css`
  color: ${({ theme }) => theme.colors.primary.main600};
  svg {
    path {
      stroke: ${({ theme }) => theme.colors.primary.main600};
    }
  }
`;

export const Wrapper = styled.div`
  ${({ theme }) => theme.flex.column};
  gap: 12px;
  width: 100%;
`;

export const List = styled.div<IListProps>`
  display: flex;
  gap: 12px;
  width: 100%;
  position: relative;
  z-index: 1;
`;

export const LoadingState = styled.div`
  ${({ theme }) => theme.flex.center};
  color: ${({ theme }) => theme.colors.primary.main};
  position: absolute;
  inset: 0;
  z-index: 2;
  background-color: #2a2929a3;
`;

export const OtherFiles = styled.button<IOpenable>`
  background: ${({ theme }) => theme.colors.primary.main25};
  ${({ theme }) => theme.flex.center};
  color: ${({ theme }) => theme.colors.primary.gray600};
  font-size: 12px;
  font-weight: 500;
  border-radius: 4px;
  height: 44px;
  padding: 6px;
  gap: 4px;
  &:not(:disabled) {
    @media (hover: hover) {
      &:hover {
        background-color: ${({ theme }) => theme.colors.primary.main100};
        ${activeState};
      }
    }
  }
  ${({ isOpen }) => isOpen && activeState}
`;

export const UploadButton = styled(Button)`
  position: relative;

  label {
    position: absolute;
    inset: 0;
    cursor: pointer;
  }
`;

export const EmptyState = styled.div`
  background: ${({ theme }) => theme.colors.primary.gray100};
  ${({ theme }) => theme.flex.center};
  border: 2px dashed ${({ theme }) => theme.colors.primary.gray300};
  color: ${({ theme }) => theme.colors.primary.gray400};
  font-size: 14px;
  font-weight: 400;
  width: 100%;
  gap: 8px;
  border-radius: 4px;
  height: 62px;
  img {
    height: 100%;
  }
`;

export const Portal = styled.div<IOpenable>`
  ${({ theme }) => theme.flex.column};
  border: 1px solid ${({ theme }) => theme.colors.primary.gray200};
  background: ${({ theme }) => theme.colors.primary.main};
  width: 188px;
  height: fit-content;
  max-height: 210px;
  overflow: hidden;
  overflow-y: auto;
  border-radius: 6px;
  box-shadow: 0px 4px 7px 0px rgba(37, 38, 44, 0.1);
  padding: 8px;
  gap: 6px;
  z-index: 1;
  position: absolute;
  bottom: 0;
  right: 0;
  transition: all 0.2s ease-out;

  ${({ isOpen }) =>
    isOpen
      ? css`
          transform: translateY(calc(100% + 8px));
        `
      : css`
          opacity: 0;
          visibility: hidden;
          transform: translateY(calc(100% + 2px));
          pointer-events: none;
        `}
`;
