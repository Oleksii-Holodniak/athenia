import { IOpenable } from "@/common/types/general";
import styled, { css } from "styled-components";

export const Details = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.primary.gray300};
`;

export const Title = styled.div`
  width: calc(100% - 120px);
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  ${({ theme }) => theme.text.getLineClamp(2)}
`;

export const Summary = styled.div<IOpenable>`
  cursor: pointer;
  padding: 16px;
  width: 100%;
  text-align: left;
  background-color: #fff;
  position: relative;
  ${({ theme }) => theme.flex.row};
  gap: 12px;
  &::after,
  &::before {
    content: "";
    width: 14px;
    height: 1px;
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    right: 16px;
    background-color: #000000;
    transition: all 0.35s linear;
    transform: rotate(-90deg);
  }
  &::after {
    transform: rotate(-180deg);
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      hr {
        opacity: 1;
      }
      &::before {
        transform: rotateZ(0deg);
      }
      &::after {
        transform: rotateZ(0);
      }
    `}
`;

export const Line = styled.hr`
  border: none;
  outline: 0;
  position: absolute;
  height: 1px;
  opacity: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
  bottom: 0;
  left: 0;
  transition: all 0.35s linear;
`;

export const Row = styled.div<IOpenable>`
  display: grid;
  overflow: hidden;
  transition: all 0.35s ease-out;
  ${({ isOpen }) =>
    isOpen
      ? css`
          grid-template-rows: 1fr;
        `
      : css`
          grid-template-rows: 0fr;
        `}
`;

export const Content = styled.div<IOpenable>`
  margin: 0;
  background: linear-gradient(
    180deg,
    #dedede20 0%,
    rgba(157, 141, 255, 0) 100%
  );
  transform: translate3d(0, 0, 0);
  position: relative;
  overflow: hidden;
  position: relative;
  color: var(--gray);
  font-weight: 600;
  font-size: 14px;
  transition: all 0.35s ease-out;
  line-height: 1.5;
  min-height: 0;
  ${({ isOpen }) =>
    isOpen
      ? css`
          padding: 16px;
        `
      : css`
          padding: 0 16px;
        `}
  p {
    color: var(--gray);
    font-weight: 600;
    font-size: 14px;
    line-height: 1.5;
  }
`;

export const Time = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.main};
  box-shadow: 0px 0px 20px -5px #10101065;
  border-radius: 4px;
  padding: 4px 8px;
  gap: 2px;
  ${({ theme }) => theme.flex.center};
`;
