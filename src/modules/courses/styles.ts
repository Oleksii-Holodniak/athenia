"use client";
import styled from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => theme.content.sizing};
  ${({ theme }) => theme.flex.column};
  width: 100%;
  padding-top: 40px !important;
`;

export const FiltersBlock = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  width: 100%;
  gap: 16px;
`;

export const List = styled.div`
  width: 100%;
  display: grid;
  gap: 38px;
  grid-template-columns: repeat(3, calc(33.3% - 25px));
`;
