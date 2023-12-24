"use client";
import { Button } from "@/ui-library/buttons";
import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.primary.main};
  width: 100vw;
  max-width: 500px;
  box-shadow: 0px 3px 6px 0px rgba(16, 24, 40, 0.14);
  border-radius: 12px;
  border: 1px solid #eaecf0;
  padding: 24px;
`;

export const Head = styled.div`
  ${({ theme }) => theme.flex.row};
  color: ${({ theme }) => theme.colors.primary.gray800};
  width: 100%;
  gap: 8px;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 24px;
  align-items: center;
`;

export const Exit = styled.button`
  ${({ theme }) => theme.flex.center};
  margin-left: auto;
`;

export const Content = styled.div`
  width: 100%;
  ${({ theme }) => theme.flex.column};
  gap: 16px;
`;

export const Paragraph = styled.p`
  font-size: 14px;
  line-height: 20px;
`;

export const Form = styled.form`
  ${({ theme }) => theme.flex.column};
  width: 100%;
`;

export const Submit = styled(Button)`
  margin-left: auto;
  width: 120px;
`;
