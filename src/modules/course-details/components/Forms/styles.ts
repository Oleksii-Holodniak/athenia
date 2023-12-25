"use client";
import { IActiveble } from "@/common/types/general";
import { Button } from "@/ui-library/buttons";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => theme.flex.column};
  width: 100%;
  gap: 24px;
`;

export const TabList = styled.div`
  ${({ theme }) => theme.flex.row};
  width: 100%;
  gap: 16px;
`;

export const AddItem = styled(Button)`
  margin-left: auto;
  aspect-ratio: 1 /1;
  border-radius: 50%;
  ${({ theme }) => theme.flex.center};
  padding: 4px;
  svg {
    path {
      stroke: #fff;
    }
  }
`;

export const Tab = styled.button<IActiveble>`
  border: 1px solid ${({ theme }) => theme.colors.primary.gold300};
  border-radius: 40px;
  padding: 8px 24px;
  text-transform: capitalize;
  ${({ isActive, theme }) =>
    isActive
      ? css`
          background: linear-gradient(
            180deg,
            ${theme.colors.primary.gold300},
            ${theme.colors.primary.gold700}
          );
          color: #fdf8f8ff;
        `
      : css`
          color: #272727ff;
        `}
`;
