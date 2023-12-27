"use client";
import { SnackbarProvider } from "notistack";
import { FC, PropsWithChildren } from "react";

const SnackbarLayout: FC<PropsWithChildren> = ({ children }) => (
  <SnackbarProvider>{children}</SnackbarProvider>
);

export default SnackbarLayout;
