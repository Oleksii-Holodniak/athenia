"use client";

import styled from "styled-components";

export const Container = styled.div`
  ${({ theme }) => theme.leveling.flex.column}
  gap: 120px;
`;

export const Wrapper = styled(Container)`
  ${({ theme }) => theme.content.sizing}
`;

export const Title = styled.h2`
  font-size: 28px;
  line-height: 120%;
  font-weight: 600;
`;
