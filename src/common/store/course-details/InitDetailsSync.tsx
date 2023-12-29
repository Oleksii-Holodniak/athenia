"use client";
import { ICourse } from "@/common/types/models";
import { FC, useRef } from "react";
import { useDetailsStore } from ".";

export const InitDetailsSync: FC<{ course: ICourse }> = ({ course }) => {
  const initRef = useRef<boolean>();

  if (!initRef.current) {
    useDetailsStore.setState((state) => ({
      ...state,
      isAdditingExam: false,
      isAdditingMaterial: false,
      tab: "materials",
      course,
    }));
    initRef.current = true;
  }
  return null;
};
