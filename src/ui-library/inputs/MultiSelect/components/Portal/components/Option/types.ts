import { IOption } from "@/common/types/general";
import { IEvent } from "../../types";

export interface IRow extends IEvent {
  item: IOption;
}
