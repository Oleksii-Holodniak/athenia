import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;

export const FormContainer = styled.form`
  ${({ theme }) => theme.flex.column};
  width: 100%;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  ${({ theme }) => theme.flex.row};
  justify-content: flex-end;
  gap: 16px;
  padding-top: 24px;
`;

export const AddMaterial = styled.button`
  background: ${({ theme }) => theme.colors.primary.main};
  border: 1px solid ${({ theme }) => theme.colors.primary.gray300};
  ${({ theme }) => theme.flex.center};
  width: 100%;
  border-radius: 8px;
  padding: 16px;
  span {
    display: block;
    height: 44px;
    aspect-ratio: 1 /1;
    border-radius: 50%;
    ${({ theme }) => theme.flex.center};
    background-color: ${({ theme }) => theme.colors.primary.gray50};
  }
  svg {
    border-radius: 50%;
    path {
      stroke: ${({ theme }) => theme.colors.primary.gray400};
    }
  }
  @media (hover: hover) {
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary.gray25};
    }
  }
`;

export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: calc(100% - 424px) 400px;
  grid-gap: 24px;
  padding-bottom: 60px;
`;
