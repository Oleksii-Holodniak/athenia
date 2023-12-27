"use client";
import { Button } from "@/ui-library/buttons";
import Image from "next/image";
import styled from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => theme.flex.column};
  width: 100%;
  gap: 24px;
`;

export const Head = styled.div`
  ${({ theme }) => theme.content.sizing};
  background-color: ${({ theme }) => theme.colors.primary.gray100};
  ${({ theme }) => theme.flex.row};
  width: 100%;
  height: 400px;
  transform: translateY(-10px);
`;

export const Banner = styled.div`
  ${({ theme }) => theme.flex.row};
  padding: 40px 0;
  width: 100%;
  height: 100%;
  gap: 24px;
`;

export const Content = styled.div`
  ${({ theme }) => theme.content.sizing};
  ${({ theme }) => theme.flex.column};
  width: 100%;
  gap: 40px;
  min-height: 400px;
  position: relative;
`;

export const ContentItem = styled.div`
  ${({ theme }) => theme.flex.column};
  gap: 16px;
`;

export const ImageCourse = styled(Image)`
  height: 100%;
  aspect-ratio: 2 / 3;
  object-fit: cover;
  border-radius: 12px;
  border: 1px solid #fff;
  background-color: #fff;
`;

export const Information = styled.div`
  ${({ theme }) => theme.flex.column};
  padding-top: 24px;
  flex: 1 1 auto;
  height: 100%;
  gap: 16px;
`;

export const Title = styled.h2`
  font-weight: 600;
`;

export const Paragraph = styled.p``;

export const SecurityCode = styled.div`
  ${({ theme }) => theme.flex.column};
  background-color: ${({ theme }) => theme.colors.primary.main};
  border: 1px solid ${({ theme }) => theme.colors.primary.gray200};
  height: fit-content;
  max-width: 150px;
  border-radius: 10px;
  overflow: auto;
  font-size: 16px;
  font-weight: 600;

  @media (hover: hover) {
    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.primary.gray300};
    }
  }
  span {
    display: block;
    padding: 12px;
    word-break: break-all;
  }
`;

export const Copy = styled.button`
  ${({ theme }) => theme.flex.center};
  background: ${({ theme }) => theme.colors.primary.gold700};
  width: 100%;
  gap: 6px;
  padding: 8px 0;
  margin-top: auto;
`;

export const Social = styled.div`
  ${({ theme }) => theme.flex.column};
  justify-content: flex-start;
  height: 100%;
  gap: 24px;
  img {
    width: 40px;
    height: 40px;
  }
`;

export const GetButton = styled(Button)`
  width: fit-content;
  margin-top: 12px;
`;

export const TagList = styled.div`
  ${({ theme }) => theme.flex.row};
  flex-wrap: wrap;
  width: 100%;
  gap: 8px;
`;

export const Tags = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.gray300};
  color: ${({ theme }) => theme.colors.primary.gray800};
  padding: 2px 6px;
  font-size: 12px;
  white-space: nowrap;
  border-radius: 4px;
`;
