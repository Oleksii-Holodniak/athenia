import Image from "next/image";
import styled from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => theme.flex.row};
  background: ${({ theme }) => theme.colors.primary.main};
  border: 1px solid ${({ theme }) => theme.colors.primary.gray300};
  border-radius: 4px;
  height: 62px;
  padding: 10px 16px;
  gap: 8px;
  min-width: 280px;
  max-width: 280px;
`;

export const FileImage = styled(Image)`
  height: 32px;
  width: auto;
  object-fit: cover;
`;

export const Info = styled.div`
  ${({ theme }) => theme.flex.column};
  ${({ theme }) => theme.text.overflow};
  flex: 1 1 auto;
  gap: 2px;
`;

export const CrossButton = styled.button`
  ${({ theme }) => theme.flex.center};
  padding: 0;
  height: 18px;
  min-width: 18px;
  position: relative;
  &::after,
  &::before {
    content: "";
    position: absolute;
    width: 1px;
    height: 100%;
    background: ${({ theme }) => theme.colors.primary.gray400};
    border-radius: 1px;
    z-index: 2;
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
`;

export const Name = styled.span`
  color: ${({ theme }) => theme.colors.primary.gray800};
  ${({ theme }) => theme.text.overflow};
  font-size: 14px;
  font-weight: 600;
  margin-top: 2px;
`;

export const FileSize = styled.span`
  color: ${({ theme }) => theme.colors.primary.gray400};
  font-size: 10px;
  font-weight: 500;
`;
