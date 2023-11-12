import { IError, IOption } from "@/common/types/general";

export interface IBaseInput extends IError {
  value?: string;
  disabled?: boolean;
  name?: string;
  label?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export interface IBaseSelect extends IBaseInput {
  options: IOption[];
}
