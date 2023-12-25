import { StaticImageData } from "next/image";
import { ReactNode } from "react";
import { IBaseInputProps, IErrored } from "../types";

export interface IInput extends IBaseInputProps, IErrored {
  message?: string | ReactNode;
  label?: string;
  type?: "text" | "number" | "password";
  endIcon?: StaticImageData;
  startIcon?: ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IPosition {
  position: "left" | "right";
}
