import { StaticImageData } from "next/image";
import { FieldError, Merge } from "react-hook-form";

export interface ICourse {
  id: number;
  owner: number;
  info: {
    image: string | StaticImageData;
    name: string;
    description: string;
    price: number;
  };
}
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

export interface IResponse {
  status: number;
  message: string;
}

export interface IActiveble {
  isActive: boolean;
}
