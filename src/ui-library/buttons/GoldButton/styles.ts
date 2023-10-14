"use client";

import styled, { css } from "styled-components";
import { IButton } from "./interfaces";

export const Button = styled.button<IButton>`
  padding: 6px 20px;
  border-radius: 50px;
  transition: all 0.4s ease;
  color: #191919;

  ${({ type }) =>
    type === "outline"
      ? css`
          border: 1px solid rgba(212, 210, 209, 1);
          background: rgb(254, 255, 235);
        `
      : css`
          background: rgb(221, 155, 47);
          background: linear-gradient(
            93deg,
            rgba(221, 155, 47, 1) 0%,
            rgba(255, 210, 78, 1) 25%,
            rgba(227, 208, 117, 1) 50%,
            rgba(255, 210, 78, 1) 75%,
            rgba(221, 155, 47, 1) 100%
          );
          border: 1px solid #fdfefa;
        `}
  box-shadow: 0px 0px 15px -5px #1919196c;
  &:active {
    transform: scale(0.95);
  }
`;
