import { IAccordion } from "@/modules/home/types";
import { Dispatch, SetStateAction } from "react";

export interface IAccordionItem {
  open: boolean | number;
  setOpen: Dispatch<SetStateAction<boolean | number>>;
  info: IAccordion;
}
export interface IOpen {
  open?: boolean;
}
