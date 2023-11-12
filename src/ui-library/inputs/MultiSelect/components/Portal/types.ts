import { IOption } from "@/common/types/general";
export interface IEvent {
  tags: IOption[];
  onAdd: (id: IOption) => void;
  onRemove: (id: number) => void;
}

export interface IPortal extends IEvent {
  options: IOption[];
  isOpen: boolean;
}

export interface IWrapper {
  isOpen: boolean;
}
