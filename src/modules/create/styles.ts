import styled from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => theme.content.sizing};
  ${({ theme }) => theme.flex.column};
  width: 100%;
  padding-top: 40px !important;
`;

export const Flex = styled.div`
  display: grid;
  grid-template-columns: repeat(2, calc(50% - 12px));
  width: 100%;
  gap: 24px;
`;

export const Form = styled.form`
  ${({ theme }) => theme.flex.column};
  height: 100%;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(2, calc(50% - 12px));
  width: 100%;
  gap: 24px;
`;
