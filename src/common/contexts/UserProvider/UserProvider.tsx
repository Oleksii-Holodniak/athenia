"use client";
import { IUser } from "@/common/types/models";
import { FC, createContext, useContext, useState } from "react";
import { IUserContext, IUserProps } from "./types";

const UserContext = createContext<IUserContext>({} as IUserContext);

export const useUser = () => useContext(UserContext);

export const UserProvider: FC<IUserProps> = ({ children, initUser }) => {
  const [user, setUser] = useState<IUser | null>(initUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
