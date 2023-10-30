"use client";
import Image from "next/image";
import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  width: 100%;
  gap: 16px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const Card = styled.div`
  position: relative;
  padding: 80px 60px 40px 60px;
`;

export const Title = styled.span`
  width: 100%;
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  color: #191919;
`;

export const Description = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: #191919;
  text-align: center;
  height: 100px;
`;

export const ImageAward = styled(Image)`
  width: 70%;
  object-fit: contain;
  height: auto;
  margin-top: 20px;
  overflow: hidden;
  border-radius: 100px;
`;

export const Content = styled.div`
  ${({ theme }) => theme.leveling.flex.column}
  gap: 16px;
  align-items: center;
  position: relative;
  z-index: 2;
`;

export const Background = styled(Image)`
  object-fit: contain;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
