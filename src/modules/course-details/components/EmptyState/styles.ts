"use client";
import Image from "next/image";
import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.gray100};
  ${({ theme }) => theme.flex.center};
  flex-direction: column;
  width: 100%;
  gap: 8px;
  height: 140px;
  border-radius: 12px;
  padding: 16px;
`;

export const EmptyImage = styled(Image)`
  height: 50px;
  width: auto;
  filter: opacity(0.6);
`;
