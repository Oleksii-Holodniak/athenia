import { IUser } from "@/common/types/models";
import { Dispatch, PropsWithChildren, SetStateAction } from "react";

export interface IUserContext {
  user: IUser | null;
  setUser: Dispatch<SetStateAction<IUser | null>>;
}

export interface IUserProps extends PropsWithChildren {
  initUser: IUser | null;
  status: string;
}
