import { PropsWithChildren } from "react";

export type ITheme = "default" | "gold";
export type IType = "fill" | "outline";

export interface IButton extends PropsWithChildren {
  isRounded?: boolean;
  theme?: ITheme;
  type?: IType;
}
