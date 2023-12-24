import { IError, IOpenable, IOption } from "@/common/types/general";
import { Dispatch, SetStateAction } from "react";
import { ICustomTagComponent } from "../../types";

export interface IInputProps<T> extends IOpenable, IError {
  options: IOption<T>[];
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  numbers: number;
  placeholder?: string;
  onClean: () => void;
  onRemove: (id: number | string) => void;
  CustomTag?: ICustomTagComponent<T>;
}
