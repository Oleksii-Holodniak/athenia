import { ReactNode } from "react";
import { IBaseInput } from "../types";

export interface IWrapper {
  customHeight?: number;
}

export interface ITextArea extends IBaseInput, IWrapper {
  message?: string | ReactNode;
}
