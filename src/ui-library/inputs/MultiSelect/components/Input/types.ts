import { IError, IOption } from "@/common/types/general";
import { Dispatch, SetStateAction } from "react";

export interface IInput extends IOpenable, IError {
  options: IOption[];
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  numbers: number;
  placeholder?: string;
  onClean: () => void;
  onRemove: (id: number) => void;
}

export interface IOpenable {
  isOpen: boolean;
}
