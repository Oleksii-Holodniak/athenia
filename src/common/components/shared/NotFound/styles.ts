import Image from "next/image";
import styled from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => theme.flex.column}
  background-color: ${({ theme }) => theme.colors.primary.main};
  box-shadow: 0px 4px 12px 0px rgba(16, 24, 40, 0.06);
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 100%;
  p {
    font-size: 20px;
    max-width: 470px;
    line-height: 1.4;
    text-align: center;
  }
`;

export const HermesImage = styled(Image)`
  height: 200px;
  width: 200px;
  object-fit: contain;
`;
