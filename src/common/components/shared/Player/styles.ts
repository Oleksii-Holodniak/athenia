import styled from "styled-components";

export const Wrapper = styled.div`
  margin: auto;
  flex: 1 1 auto;
  width: 100%;
  position: relative;
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  background-color: #000;
  border-top-right-radius: 14px;
  border-top-left-radius: 14px;
`;

export const Controls = styled.div`
  transition: all 0.4s ease-in;
  ${({ theme }) => theme.flex.row};
  gap: 12px;
  width: 100%;
  position: absolute;
  z-index: 3;
  bottom: 0;
  left: 0;
  background-color: #fff;
  padding: 14px 4px;
`;

export const Button = styled.button`
  ${({ theme }) => theme.flex.center};
  padding: 8px;
  border-radius: 50%;
  aspect-ratio: 1 / 1;
  box-shadow: 0px 0px 20px -5px #10101065;
`;

export const Range = styled.input``;

export const SideControls = styled.div`
  ${({ theme }) => theme.flex.row};
  gap: 12px;
  margin-left: auto;
`;
