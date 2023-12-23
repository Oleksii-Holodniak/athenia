import { IUser } from "@/common/types/models";

export interface IUserStoreProps {
  user: IUser | null;
  isAuthorized: boolean;
}
