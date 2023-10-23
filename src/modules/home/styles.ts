"use client";

import styled from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => theme.content.sizing}
  ${({ theme }) => theme.leveling.flex.column}
  gap: 40px;
`;

export const Title = styled.h2`
  font-size: 28px;
  line-height: 120%;
  font-weight: 600;
`;
