"use client";
import { Button } from "@/ui-library/buttons";
import styled from "styled-components";

export const Form = styled.form`
  ${({ theme }) => theme.flex.column};
  width: 100%;
  max-width: 400px;
  @media screen and (max-width: 540px) {
    max-width: 100%;
  }
`;

export const SubmitButton = styled(Button)`
  padding: 10px 20px;
  @media screen and (max-width: 540px) {
    padding: 7px 20px;
  }
`;

export const EmptyButton = styled(SubmitButton)`
  background: transparent;
  box-shadow: none;
  text-shadow: none;
  border: none;
  color: rgba(221, 155, 47, 1);
`;
