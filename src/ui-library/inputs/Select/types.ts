import { UseFormRegisterReturn } from "react-hook-form";
import { IBaseSelect } from "../types";

export interface IOpenable {
  isOpen: boolean;
}
export interface ISelect extends IBaseSelect {
  registerOptions?: UseFormRegisterReturn<string>;
}

export interface ISelectComponent
  extends Omit<ISelect, "options" | "label" | "value" | "error"> {
  error: boolean;
}
