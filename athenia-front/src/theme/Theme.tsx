"use client";
import { FC, PropsWithChildren } from "react";
import { ThemeProvider, css } from "styled-components";

import { ITheme } from "./types";

export const config: ITheme = {
  text: {
    overflow: css`
      text-overflow: ellipsis;
      overflow: hidden;
      width: 100%;
      white-space: nowrap;
    `,
    getLineClamp: (lines: number = 4) =>
      css`
        display: -webkit-box;
        -webkit-line-clamp: ${lines};
        -webkit-box-orient: vertical;
        overflow: hidden;
      `,
  },
  leveling: {
    absoluteCenter: css`
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `,
    flex: {
      center: css`
        display: flex;
        justify-content: center;
        align-items: center;
      `,
      row: css`
        display: flex;
        align-items: center;
      `,
      column: css`
        display: flex;
        flex-direction: column;
      `,
      between: css`
        display: flex;
        align-items: center;
        justify-content: space-between;
      `,
    },
  },
  content: {
    sizing: css`
      width: 100%;
      max-width: 1920px;
      margin: 0 auto;
      position: relative;
      padding: 0 120px 0 120px;
      @media screen and (max-width: 1920px) {
        padding: 0 6.3vw;
      }
      @media screen and (max-width: 1440px) {
        padding: 0 7vw;
      }
      @media screen and (max-width: 1280px) {
        padding: 0 40px;
      }
      @media screen and (max-width: 767px) {
        padding: 0 16px;
      }
    `,
    hiddenScrollVertical: css`
      overflow: hidden;
      overflow-y: auto;
      &::-webkit-scrollbar {
        width: 0;
        height: 0;
      }
    `,
    hiddenScrollHorizontal: css`
      overflow: hidden;
      overflow-x: auto;
      &::-webkit-scrollbar {
        width: 0;
        height: 0;
      }
    `,
    image: css`
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
    `,
  },
};

const Theme: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  return <ThemeProvider theme={config}>{children}</ThemeProvider>;
};

export default Theme;
