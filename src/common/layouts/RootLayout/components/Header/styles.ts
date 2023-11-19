"use client";

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const Wrapper = styled.header`
  height: 72px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #f1efe3d7;
  backdrop-filter: blur(4px);
  z-index: 1000;
`;

export const Container = styled.div`
  ${({ theme }) => theme.content.sizing}
  ${({ theme }) => theme.flex.between}
  padding: 10px 0;
  height: 100%;
`;

export const Logo = styled(Image)`
  height: calc(100% - 20px);
  object-fit: contain;
  margin-right: 10px;
  width: auto;
`;

export const Navigations = styled.div`
  ${({ theme }) => theme.flex.row}
  gap: 24px;
  height: 100%;
`;

export const Item = styled(Link)`
  transition: all 0.4s ease;
  font-size: 16px;
  font-weight: 600;
  @media (hover: hover) {
    &:hover {
      color: rgba(221, 155, 47, 1);
    }
  }
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => theme.flex.row}
  justify-content: flex-end;
  gap: 16px;
`;

export const Avatar = styled(Link)`
  height: 60%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  ${({ theme }) => theme.flex.center};
  border: 1px solid #cccccc;
  background-color: #f3f2f2;
  color: #191919;
  text-transform: uppercase;
`;
