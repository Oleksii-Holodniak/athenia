import { Dispatch, SetStateAction } from "react";

export interface IBuyCourseProps {
  setOpened: Dispatch<SetStateAction<boolean>>;
  opened: boolean;
}
