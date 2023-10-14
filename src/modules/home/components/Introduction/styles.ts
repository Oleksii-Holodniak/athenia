"use client";

import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  ${({ theme }) => theme.leveling.flex.between}
  padding: 0px 0 40px 0;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 800px;
  ${({ theme }) => theme.leveling.flex.column}
  gap: 24px;
`;

export const Title = styled.h2`
  font-family: var(--greece-font);
  font-size: 60px;
  text-transform: uppercase;
`;
export const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.2;
  font-weight: 100;
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 600px;
  width: 100%;
  max-width: 600px;
`;

export const AthinaImage = styled(Image)`
  position: absolute;
  left: 50%;
  height: 100%;
  transform: translate(-50%, 0);
  top: 0;
  object-fit: contain;
`;

export const Numbers = styled.div`
  width: calc(100% - 80px);
  height: 200px;
  transform: translate(0, -30%);
  background: #fbfaf6;
  box-shadow: 0 5px 15px 0 #00000026;
  border-radius: 16px;
  padding: 30px 0;
  display: grid;
  grid-template-columns: repeat(4, 25%);
`;

export const NumberItem = styled.div`
  ${({ theme }) => theme.leveling.flex.column}
  justify-content: center;
  align-items: center;
  gap: 4px;
  strong {
    font-size: 32px;
    font-weight: 800;
    color: #191919;
  }
  span {
    font-size: 18px;
    color: #000000b1;
    font-weight: 600;
  }
  border-left: 1px solid #bebebe;
  &:first-child {
    border-left: 1px solid transparent;
  }
`;
