import Image from "next/image";
import styled from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => theme.flex.row};
  background: ${({ theme }) => theme.colors.primary.main25};
  border-radius: 4px;
  height: 44px;
  padding: 10px 6px;
  gap: 8px;
`;

export const FileImage = styled(Image)`
  height: 24px;
  width: 18px;
  object-fit: cover;
`;

export const Info = styled.div`
  ${({ theme }) => theme.flex.column};
  ${({ theme }) => theme.text.overflow};
  flex: 1 1 auto;
  gap: 2px;
`;

export const CrossButton = styled.button`
  padding: 0;
  height: 18px;
  width: 18px;
  svg {
    transform: rotate(45deg);
    stroke: ${({ theme }) => theme.colors.primary.gray400};
  }
`;

export const Name = styled.span`
  color: ${({ theme }) => theme.colors.primary.gray800};
  ${({ theme }) => theme.text.overflow};
  font-size: 10px;
  font-weight: 400;
  margin-top: 2px;
`;

export const FileSize = styled.span`
  color: ${({ theme }) => theme.colors.primary.gray400};
  font-size: 8px;
  font-weight: 400;
`;
