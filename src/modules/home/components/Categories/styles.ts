"use client";
import Image from "next/image";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(4, 1fr);
`;

export const Card = styled.div`
  position: relative;
  aspect-ratio: 6 / 5;
  ${({ theme }) => theme.flex.center}
  padding: 12px;
  border-radius: 4px;
  overflow: hidden;
  @media (hover: hover) {
    cursor: pointer;
    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }
`;

export const Background = styled(Image)`
  object-fit: cover;
  z-index: 1;
  filter: brightness(60%);
  transition: all 0.2s ease;
`;

export const Title = styled.span`
  position: relative;
  z-index: 3;
  color: #fff;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
`;
