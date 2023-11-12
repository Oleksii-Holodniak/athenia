"use client";
import Image from "next/image";
import styled, { keyframes } from "styled-components";

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Wrapper = styled.div`
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
`;

export const Background = styled.div`
  position: relative;
  padding: 24px;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.flex.column}
  z-index: 1;
  &::after {
    content: "";
    position: absolute;
    height: 500%;
    aspect-ratio: 1 / 1;
    z-index: 1;
    background-image: conic-gradient(from 0deg, orange, orangered, orange);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-color: orange;
    animation: ${rotation} 8s infinite linear;
  }
`;

export const Logo = styled(Image)`
  width: 80px;
  height: auto;
  object-fit: contain;
`;

export const Container = styled.div`
  ${({ theme }) => theme.flex.column};
  width: 100%;
  max-width: 500px;
  height: fit-content;
  align-items: center;
  background-color: #fff;
  padding: 24px 40px 28px 40px;
  border-radius: 12px;
  gap: 24px;
  z-index: 2;
`;
