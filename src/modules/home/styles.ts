"use client";

import styled from "styled-components";

export const Container = styled.div`
  ${({ theme }) => theme.flex.column}
  padding-top: 120px;
`;

export const Full = styled.div`
  padding: 120px 0;
  width: 100%;
`;

export const Wrapper = styled(Container)`
  gap: 120px;
  ${({ theme }) => theme.content.sizing}
`;

export const Title = styled.h2`
  font-size: 28px;
  line-height: 120%;
  font-weight: 600;
`;
