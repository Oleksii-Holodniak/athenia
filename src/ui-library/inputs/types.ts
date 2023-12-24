import { IError, IOption } from "@/common/types/general";

export interface IBaseInputProps extends IError {
  value?: string;
  disabled?: boolean;
  name?: string;
  label?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export interface IBaseSelectProps extends IBaseInputProps {
  options: IOption<string>[];
}
