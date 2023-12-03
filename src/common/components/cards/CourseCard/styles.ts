import Image from "next/image";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px 0 0 24px;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px 24px 0 24px;
  box-shadow: 0px 0px 20px -10px #10101065;
  border-radius: 12px;
  position: relative;
`;

export const Glossiness = styled.div`
  transform: translate(-48px, -48px);
  width: 100%;
  height: 200px;
  position: relative;
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  border: 1px solid #cbcbcb5b;
  overflow: hidden;
`;

export const Preview = styled(Image)`
  height: 100%;
  width: 100%;
  position: relative;
  object-fit: cover;
  z-index: -1;
`;

export const Social = styled.div`
  ${({ theme }) => theme.flex.column};
  gap: 18px;
  position: absolute;
  top: 24px;
  right: 24px;
  img {
    width: 28px;
    height: 28px;
  }
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
