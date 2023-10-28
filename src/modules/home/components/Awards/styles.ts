"use client";
import Image from "next/image";
import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  width: 100%;
  gap: 24px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const Card = styled.div`
  padding: 32px 24px;
  ${({ theme }) => theme.leveling.flex.column}
  gap: 16px;
  border: 1px solid #ccccccb1;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 10px 0px #5656560f;
  position: relative;
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
  /* bottom: 24px;
  left: 50%;
  transform: translateX(-50%); */
`;
