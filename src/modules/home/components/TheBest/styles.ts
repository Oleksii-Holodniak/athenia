"use client";
import Image from "next/image";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  ${({ theme }) => theme.leveling.flex.column}
  gap: 40px;
`;

export const ImageStudy = styled(Image)`
  height: 400px;
  width: auto;
  object-fit: contain;
`;

export const Flex = styled.div`
  ${({ theme }) => theme.leveling.flex.between}
  align-items: stretch;
  gap: 40px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Accordion = styled.div`
  ${({ theme }) => theme.leveling.flex.column}
  height: 100%;
  width: 100%;
`;
