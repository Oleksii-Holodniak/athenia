import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.primary.main};
  ${({ theme }) => theme.flex.column};
  width: 100vw;
  max-width: 900px;
  height: calc(100vh - 80px);
  max-height: 700px;
  box-shadow: 0px 3px 6px 0px rgba(16, 24, 40, 0.14);
  border-radius: 12px;
  border: 1px solid #eaecf0;
  gap: 8px;
  padding: 12px 12px 0 12px;
  aspect-ratio: 1 / 2;
  position: relative;
  overflow: hidden;
`;

export const Exit = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  ${({ theme }) => theme.flex.center};
  background: ${({ theme }) => theme.colors.primary.main};
  margin-left: auto;
  padding: 6px;
  border-radius: 50%;
  aspect-ratio: 1 / 1;
  z-index: 3;
  box-shadow: 0px 0px 20px -5px #10101065;
`;
