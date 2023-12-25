import { Button } from "@/ui-library/buttons";
import Image from "next/image";
import styled from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => theme.content.sizing};
  ${({ theme }) => theme.flex.column};
  width: 100%;
  padding-top: 40px !important;
`;

export const Flex = styled.div`
  display: grid;
  grid-template-columns: repeat(2, calc(50% - 12px));
  width: 100%;
  gap: 24px;
`;

export const Preview = styled.div`
  border: 2px dashed ${({ theme }) => theme.colors.primary.gray300};
  background: ${({ theme }) => theme.colors.primary.main};
  ${({ theme }) => theme.flex.column};
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  width: 100%;
  height: 100%;
  padding: 24px;
  gap: 8px;
`;

export const Form = styled.form`
  ${({ theme }) => theme.flex.column};
  height: 100%;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(2, calc(50% - 12px));
  width: 100%;
  gap: 24px;
`;

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
