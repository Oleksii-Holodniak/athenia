"use client";
import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  justify-content: center;
  ${({ theme }) => theme.leveling.flex.column}
  gap: 24px;
  max-width: 500px;
  margin: 0 auto;
  div {
    ${({ theme }) => theme.leveling.flex.column}
  }
  input {
    outline: none;
    height: 44px;
    border-radius: 4px;
    padding: 12px;
  }
`;

export const Form = styled.form`
  ${({ theme }) => theme.leveling.flex.column}
  gap: 24px;
`;

export const Message = styled.span`
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  text-align: right;
  color: red;
`;
