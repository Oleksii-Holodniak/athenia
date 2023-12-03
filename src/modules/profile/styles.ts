import { IActiveble } from "@/common/types/general";
import Image from "next/image";
import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => theme.flex.column}
  width: 100%;
  margin-top: 36px;
  gap: 32px;
`;
export const Wrapper = styled(Container)`
  ${({ theme }) => theme.content.sizing}
  gap: 120px;
`;

export const UserHead = styled.div`
  width: 100%;
  position: relative;
  height: 280px;
  @media screen and (max-width: 767px) {
    height: 240px;
  }
  @media screen and (max-width: 540px) {
    height: 140px;
  }
`;

export const Avatar = styled(Image)`
  border-radius: 50%;
  border: 8px solid #fff;
  box-sizing: content-box;
  object-fit: contain;
  width: 160px;
  height: 160px;
  box-shadow: 0 0 5px 1px #1e1e1e16;
  background-color: #7a8ff8;
  @media screen and (max-width: 767px) {
    width: 120px;
    height: 120px;
    border: 4px solid #fff;
  }
  @media screen and (max-width: 540px) {
    width: 80px;
    height: 80px;
  }
`;

export const User = styled.div`
  position: absolute;
  z-index: 1;
  left: 40px;
  bottom: 0;
  transform: translateY(75%);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  color: #191919;
  width: 100%;
  max-width: calc(100% - 40px);

  @media screen and (max-width: 767px) {
    left: 20px;
    gap: 6px;
    max-width: calc(100% - 20px);
  }
  @media screen and (max-width: 540px) {
    left: 5px;
    gap: 4px;
    max-width: calc(100% - 5px);
  }
`;

export const Name = styled.h2`
  ${({ theme }) => theme.text.overflow}
  max-width: calc(100% - 170px);
  font-size: 26px;
  line-height: 26px;
  font-weight: 700;
  @media screen and (max-width: 767px) {
    max-width: calc(100% - 130px);
    font-size: 20px;
    line-height: 24px;
  }
  @media screen and (max-width: 540px) {
    max-width: calc(100% - 90px);
    font-size: 16px;
    line-height: 16px;
  }
`;

export const InfoContainer = styled.div`
  ${({ theme }) => theme.flex.column}
  width: 100%;
  gap: 10px;
`;

export const LogOut = styled.button`
  ${({ theme }) => theme.flex.center};
  width: fit-content;
  height: fit-content;
`;

export const TabList = styled.div`
  ${({ theme }) => theme.flex.row};
  width: 100%;
  gap: 16px;
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

export const CardList = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(3, calc(33.3% - 16px));
`;
