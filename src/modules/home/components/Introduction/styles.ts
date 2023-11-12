"use client";

import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  ${({ theme }) => theme.flex.between}
  padding:  0;
  gap: 40px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 800px;
  ${({ theme }) => theme.flex.column}
  gap: 24px;
  button {
    width: fit-content;
    padding: 12px 32px;
    font-size: 18px;
  }
`;

export const Title = styled.h2`
  font-size: 46px;
  font-weight: 600;
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
  width: 100%;
  height: 150px;
  background: #ffffffcc;
  box-shadow: 0 5px 10px 0 #00000014;
  border-radius: 8px;
  border: 1px solid #b3b3b342;
  padding: 20px 0;
  display: grid;
  grid-template-columns: repeat(4, 25%);
`;

export const NumberItem = styled.div`
  ${({ theme }) => theme.flex.column}
  justify-content: center;
  align-items: center;
  gap: 4px;
  strong {
    font-size: 28px;
    font-weight: 800;
    color: #191919;
  }
  span {
    font-size: 16px;
    color: #000000b1;
    font-weight: 600;
  }
  border-left: 1px solid #bebebe;
  &:first-child {
    border-left: 1px solid transparent;
  }
`;
