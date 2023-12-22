import { FieldError, Merge } from "react-hook-form";

export type TErrorForm =
  | FieldError
  | Merge<FieldError, (FieldError | undefined)[]>;

export interface IError {
  error?: TErrorForm;
}
export interface IOption {
  value: string;
  id: number;
}

export type TSocialMediaType = "telegram" | "facebook" | "instagram";

export interface IResponse {
  status: number;
  message: string;
}

export interface IActiveble {
  isActive: boolean;
}
