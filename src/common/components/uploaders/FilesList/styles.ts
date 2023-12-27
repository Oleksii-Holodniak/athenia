import styled from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => theme.flex.column};
  gap: 12px;
  width: 100%;
`;

export const List = styled.div`
  ${({ theme }) => theme.content.hiddenScrollHorizontal};
  display: flex;
  justify-content: flex-start;
  gap: 12px;
  width: 100%;
  position: relative;
  overflow: auto;
  z-index: 1;
`;

export const EmptyState = styled.div`
  background: ${({ theme }) => theme.colors.primary.gray100};
  ${({ theme }) => theme.flex.center};
  border: 2px dashed ${({ theme }) => theme.colors.primary.gray300};
  color: ${({ theme }) => theme.colors.primary.gray400};
  font-size: 14px;
  font-weight: 400;
  width: 100%;
  gap: 8px;
  border-radius: 4px;
  height: 62px;
  img {
    height: 100%;
  }
`;
