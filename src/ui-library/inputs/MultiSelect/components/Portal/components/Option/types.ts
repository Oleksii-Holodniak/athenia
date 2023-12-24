import { IOption } from "@/common/types/general";
import { ICustomOptionComponent } from "@/ui-library/inputs/MultiSelect/types";
import { IEvent } from "../../types";

export interface IOptionProps<T> extends IEvent<T> {
  item: IOption<T>;
  CustomOption?: ICustomOptionComponent<T>;
}
