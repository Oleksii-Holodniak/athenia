import Image from "next/image";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 2px 4px -2px rgba(16, 24, 40, 0.06),
    0px 4px 8px -2px rgba(16, 24, 40, 0.1);
  height: auto;
  transition: all 0.3s ease;
  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      transform: scale(1.02);
    }
  }
`;

export const CardImage = styled(Image)`
  width: 100%;
  aspect-ratio: 6 / 4;
  height: auto;
  object-fit: cover;
`;

export const Info = styled.div`
  padding: 8px 12px;
  display: flex;
  ${({ theme }) => theme.leveling.flex.column}
  gap: 4px;
`;

export const Title = styled.h4`
  font-size: 16px;
  color: #191919;
  font-weight: 700;
`;

export const Description = styled.span`
  font-size: 12px;
  color: #191919ad;
  font-weight: 600;
  ${({ theme }) => theme.text.getLineClamp(2)}
`;
