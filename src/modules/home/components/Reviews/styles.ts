"use client";
import Image from "next/image";
import styled from "styled-components";

export const Card = styled.div`
  height: 200px;
  width: 100%;
  background-color: #ececec;
  border-radius: 8px;
  padding: 24px;
  ${({ theme }) => theme.flex.row}
  gap: 16px;
`;

export const Column = styled.div`
  ${({ theme }) => theme.flex.column}
  width: calc(100% - 166px);
`;

export const Name = styled.span`
  font-size: 20px;
  line-height: 150%;
  font-weight: 500;
`;

export const Comment = styled.p`
  font-size: 14px;
  line-height: 150%;
  font-weight: 400;
`;

export const ImageReview = styled(Image)`
  border-radius: 50%;
  width: 150px;
  max-height: 150px;
  padding: 16px;
  height: auto;
  overflow: hidden;
  background-color: #ccc;
  object-fit: contain;
  border: 2px solid #fff;
`;
