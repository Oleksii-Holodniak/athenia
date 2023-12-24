"use client";
import { FC, useRef } from "react";
import { useCoursesStore } from ".";
import { IInitialCoursesProps } from "./types";

export const InitCoursesSync: FC<IInitialCoursesProps> = ({
  courses,
  total,
  params,
}) => {
  const initRef = useRef<boolean>();

  if (!initRef.current) {
    useCoursesStore.setState((state) => ({
      ...state,
      courses,
      total,
      filter: {
        ...state.filter,
        query: params.query || "",
        page: +params.page || 1,
        tags: params.tags ? params.tags?.split(",") : [],
      },
    }));
    initRef.current = true;
  }
  return null;
};
