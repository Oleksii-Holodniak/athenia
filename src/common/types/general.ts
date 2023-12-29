import { FieldError, Merge } from "react-hook-form";
import { IFileUploadModel } from "./models";

export type TErrorForm =
  | FieldError
  | Merge<FieldError, (FieldError | undefined)[]>;

export interface IError {
  error?: TErrorForm;
}
export interface IOption<T> {
  value: T;
  id: number | string;
  label: string;
}

export type TSocialMediaType = "telegram" | "facebook" | "instagram";

export interface IResponse {
  status: number;
  message: string;
}

export interface IActiveble {
  isActive: boolean;
}

export interface IOpenable {
  isOpen: boolean;
}


export type TSelectOptionGenericType = string | number | boolean | object;

export type IFormatFileSize = "Bytes" | "KB" | "MB" | "GB";

export interface IFileExcludes
  extends Pick<
    IFileUploadModel,
    "id" | "filename" | "fileUrl" | "filesize" | "mimetype"
  > {}
