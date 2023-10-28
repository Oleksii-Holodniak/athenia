"use client";

import styled, { css } from "styled-components";

import { IOpen } from "./types";

export const Details = styled.div`
  border: 1px solid #0000000c;
`;

export const Summary = styled.div<IOpen>`
  cursor: pointer;
  padding: 16px;
  width: 100%;
  text-align: left;
  position: relative;
  span {
    display: block;
    width: calc(100% - 40px);
    font-size: 16px;
    font-weight: 700;
    line-height: 1.5;
    ${({ theme }) => theme.text.getLineClamp(2)}
  }
  &::after,
  &::before {
    content: "";
    width: 14px;
    height: 1px;
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    right: 16px;
    background-color: #000000;
    transition: all 0.35s linear;
    transform: rotate(-90deg);
  }
  &::after {
    transform: rotate(-180deg);
  }

  ${({ open }) =>
    open &&
    css`
      hr {
        opacity: 1;
      }
      &::before {
        transform: rotateZ(0deg);
      }
      &::after {
        transform: rotateZ(0);
      }
    `}
`;

export const Line = styled.hr`
  border: none;
  outline: 0;
  position: absolute;
  height: 1px;
  opacity: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
  bottom: 0;
  left: 0;
  transition: all 0.35s linear;
`;

export const Wrapper = styled.div<IOpen>`
  display: grid;
  overflow: hidden;
  transition: all 0.35s ease-out;
  ${({ open }) =>
    open
      ? css`
          grid-template-rows: 1fr;
        `
      : css`
          grid-template-rows: 0fr;
        `}
`;

export const Text = styled.div<IOpen>`
  margin: 0;
  background: linear-gradient(
    180deg,
    #dedede20 0%,
    rgba(157, 141, 255, 0) 100%
  );
  transform: translate3d(0, 0, 0);
  position: relative;
  overflow: hidden;
  position: relative;
  color: var(--gray);
  font-weight: 600;
  font-size: 14px;
  transition: all 0.35s ease-out;
  line-height: 1.5;
  min-height: 0;
  ${({ open }) =>
    open
      ? css`
          padding: 16px;
        `
      : css`
          padding: 0 16px;
        `}
  p {
    color: var(--gray);
    font-weight: 600;
    font-size: 14px;
    line-height: 1.5;
  }
`;
