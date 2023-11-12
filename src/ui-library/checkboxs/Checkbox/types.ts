import { HTMLAttributes, ReactNode } from "react";
import { FieldError } from "react-hook-form";

export interface ICheckbox extends HTMLAttributes<HTMLInputElement> {
  name?: string;
  message?: string | ReactNode;
  error?: FieldError;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
