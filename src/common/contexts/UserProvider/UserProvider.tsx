"use client";
import { IUser } from "@/common/types/models";
import { FC, createContext, useContext, useState } from "react";
import { IUserContext, IUserProps } from "./types";

const UserContext = createContext<IUserContext>({} as IUserContext);

export const useUser = () => useContext(UserContext);

export const UserProvider: FC<IUserProps> = ({
  children,
  initUser,
  status,
}) => {
  console.log("status :", status);
  console.log("process.env.COOKIES_NAME :", process.env.COOKIES_NAME);
  console.log("process.env.BASE_URL :", process.env.BASE_URL);

  console.log("process.env.BASE_URL aaaaaaaaaaaaa:", process.env.BASE_URL);

  const [user, setUser] = useState<IUser | null>(initUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
