"use client";
import { IUser } from "@/common/types/models";
import { useRef } from "react";
import { useUserStore } from ".";

export const InitUserSync = ({
  user,
  isAuthorized,
}: {
  user: IUser | null;
  isAuthorized: boolean;
}) => {
  const initRef = useRef<boolean>();

  if (!initRef.current) {
    useUserStore.setState((state) => ({
      ...state,
      user,
      isAuthorized,
    }));
    initRef.current = true;
  }
  return null;
};
