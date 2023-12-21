"use client";
import Image from "next/image";
import styled from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => theme.flex.between}
  width: 100%;
  padding: 10px;
  background-color: #f4f4f4b9;
`;

export const Warrior = styled(Image)`
  height: 300px;
  width: auto;
  &:last-child {
    transform: rotateY(180deg);
  }
`;

export const Text = styled.div`
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  position: relative;
`;

export const Arch = styled(Image)`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, calc(-100% - 10px));
  width: 200px;
  height: auto;
`;
