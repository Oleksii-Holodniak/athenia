"use client";
import { Button } from "@/ui-library/buttons";
import Image from "next/image";
import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.gray100};
  ${({ theme }) => theme.flex.between};
  width: 100%;
  height: 280px;
  border-radius: 8px;
  padding: 0 40px;
  gap: 24px;
`;

export const ColumnImage = styled(Image)`
  height: 100%;
  width: auto;
`;

export const Columns = styled.div`
  ${({ theme }) => theme.flex.row};
  gap: 24px;
  height: 100%;
`;

export const Content = styled.div`
  ${({ theme }) => theme.flex.column};
  align-items: center;
  width: 100%;
  gap: 16px;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Description = styled.p`
  text-align: center;
`;

export const GetButton = styled(Button)`
  width: 200px;
  margin-top: 12px;
`;
