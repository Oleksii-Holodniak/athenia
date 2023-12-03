"use client";
import styled from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => theme.content.sizing};
  ${({ theme }) => theme.flex.column};
  gap: 24px;
  width: 100%;
`;

export const FiltersBlock = styled.div`
  width: 100%;
`;

export const List = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, calc(33.3% - 16px));
`;
