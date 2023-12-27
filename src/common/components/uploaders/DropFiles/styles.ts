import { Button } from "@/ui-library/buttons";
import Image from "next/image";
import styled from "styled-components";
import { IErrored } from "./types";

export const Browse = styled(Button)`
  width: 180px;
`;

export const ImageUpload = styled(Image)`
  width: 100%;
  height: auto;
  max-width: 120px;
  aspect-ratio: 1 / 1;
  margin-bottom: 10px;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary.gray800};
  text-align: center;
  font-size: 24px;
  line-height: 1;
  font-weight: 600;
`;

export const Or = styled.span`
  line-height: 1;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary.gray800};
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.primary.gray600};
  width: 100%;
  text-align: center;
  font-size: 14px;
  margin-top: 10px;
  b {
    font-size: 14px;
    font-weight: 500;
  }
`;

export const Wrapper = styled.div<IErrored>`
  border: 2px dashed
    ${({ theme, isError }) =>
      isError ? theme.colors.primary.error600 : theme.colors.primary.gray300};
  background: ${({ theme, isError }) =>
    isError ? theme.colors.primary.error50 : theme.colors.primary.main};
  ${({ theme }) => theme.flex.column};
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  width: 100%;
  height: 100%;
  padding: 24px;
  gap: 8px;
  position: relative;
  overflow: hidden;
`;

export const Preview = styled(Image)`
  background: ${({ theme }) => theme.colors.primary.main};
  object-fit: cover;
`;
