"use client";
import { FC, PropsWithChildren } from "react";
import { ThemeProvider, css } from "styled-components";

import { SnackbarProvider } from "notistack";
import { ITheme } from "./types";

export const config: ITheme = {
  colors: {
    primary: {
      gold700: "#ebb402",
      gold600: "#f0dd0c",
      gold300: "#F8DE22",
      gold200: "#ffff00",
      gold100: "#fdfd16",
      gold10: "#fff7dd",

      main: "#ffffff",
      main10: "#F9FCFF",
      main25: "#F5FAFF",
      main50: "#EFF7FF",
      main100: "#D7EBFF",
      main200: "#C1E0FF",
      main300: "#8DBFF1",
      main400: "#53A2F0",
      main500: "#358CE1",
      main600: "#1F75CB",
      main700: "#1261AF",
      main800: "#174A7C",
      main900: "#033465",
      // gray
      gray25: "#FCFCFD",
      gray50: "#F9FAFB",
      gray100: "#F2F4F7",
      gray200: "#EAECF0",
      gray300: "#D0D5DD",
      gray400: "#98A2B3",
      gray500: "#6A7482",
      gray600: "#475467",
      gray700: "#344054",
      gray800: "#1D2939",
      gray900: "#101828",
      // blue gray
      blueGray25: "#FCFCFD",
      blueGray50: "#F8F9FC",
      blueGray100: "#EAECF5",
      blueGray200: "#D5D9EB",
      blueGray300: "#AFB5D9",
      blueGray400: "#717BBC",
      blueGray500: "#4E5BA6",
      blueGray600: "#3E4784",
      blueGray700: "#363F72",
      blueGray800: "#293056",
      blueGray900: "#101323",
      // error
      error25: "#FFFBFA",
      error50: "#FEF3F2",
      error100: "#FEE4E2",
      error200: "#FECDCA",
      error300: "#FDA29B",
      error400: "#F97066",
      error500: "#F04438",
      error600: "#D92D20",
      error700: "#B42318",
      error800: "#912018",
      error900: "#7A271A",
    },
  },
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
  absoluteCenter: css`
    opacity: absolute;
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
  return (
    <ThemeProvider theme={config}>
      <SnackbarProvider>{children}</SnackbarProvider>
    </ThemeProvider>
  );
};

export default Theme;
