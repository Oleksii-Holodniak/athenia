"use client";
import styled from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => theme.content.sizing};
  ${({ theme }) => theme.flex.column};
  width: 100%;
  gap: 32px;
  padding-top: 40px !important;
`;

export const List = styled.div`
  width: 100%;
  display: grid;
  gap: 38px;
  grid-template-columns: repeat(3, calc(33.3% - 25px));
`;
