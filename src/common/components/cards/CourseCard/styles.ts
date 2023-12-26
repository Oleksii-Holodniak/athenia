import Image from "next/image";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px 0 0 24px;
  cursor: pointer;
  @media (hover: hover) {
    &:hover {
      .preview {
        transform: scale(1.05);
      }
      .container {
        box-shadow: 0px 0px 20px -5px #10101065;
      }
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px 24px 0 24px;
  box-shadow: 0px 0px 20px -10px #10101065;
  border-radius: 12px;
  position: relative;
  transition: all 0.4s ease;
`;

export const Glossiness = styled.div`
  transform: translate(-48px, -48px);
  width: calc(100% + 24px);
  height: 200px;
  position: relative;
  border-radius: 12px;
  border: 1px solid #cbcbcb5b;
  overflow: hidden;
  background-color: #fff;
`;

export const Preview = styled(Image)`
  height: 100%;
  width: 100%;
  position: relative;
  object-fit: cover;
  z-index: -1;
  transition: all 0.4s ease;
`;

export const Flex = styled.div`
  ${({ theme }) => theme.flex.row};
  position: relative;
`;

export const Information = styled.div`
  ${({ theme }) => theme.flex.column};
  width: 100%;
  gap: 8px;
  transform: translateY(-24px);
`;

export const Title = styled.div`
  ${({ theme }) => theme.text.getLineClamp(2)};
  font-size: 18px;
  font-weight: 600;
`;

export const Description = styled.p`
  font-size: 14px;
  padding: 0;
  ${({ theme }) => theme.text.getLineClamp(3)};
`;

export const TagList = styled.div`
  ${({ theme }) => theme.flex.row};
  flex-wrap: wrap;
  width: 100%;
  gap: 8px;
`;

export const Tags = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.gray200};
  color: ${({ theme }) => theme.colors.primary.gray800};
  padding: 2px 6px;
  font-size: 12px;
  white-space: nowrap;
  border-radius: 4px;
`;
