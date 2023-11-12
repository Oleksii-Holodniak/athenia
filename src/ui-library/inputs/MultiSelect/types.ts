import { UseFormRegisterReturn } from "react-hook-form";
import { IBaseSelect } from "../types";

export interface IMultiSelect extends Omit<IBaseSelect, "value" | "onChange"> {
  value?: string[];
  onChange?: (value: string[]) => void;
  isClear?: boolean;
  registerOptions?: UseFormRegisterReturn<string>;
}
