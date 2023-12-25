import Image from "next/image";
import styled from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => theme.flex.column};
  justify-content: center;
  align-items: center;
  inset: 0;
  position: absolute;
  padding: 24px;
  gap: 16px;
  button {
    margin-top: 12px;
    width: 120px;
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  text-align: center;
  width: 100%;
  max-width: 600px;
`;

export const Lock = styled(Image)`
  height: 120px;
  width: 120px;
  object-fit: contain;
`;
