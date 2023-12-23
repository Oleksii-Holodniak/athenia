import { IUser } from "@/common/types/models";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { IUserStoreProps } from "./types";

const initialState: IUserStoreProps = {
  user: null,
  isAuthorized: false,
};

export const useUserStore = create<IUserStoreProps>()(
  devtools(immer((set) => ({ ...initialState })))
);

export const useUsersSync = (user: IUser | null, isAuthorized: boolean) => {
  useUserStore.setState((state) => ({
    ...state,
    user,
    isAuthorized,
  }));
};
