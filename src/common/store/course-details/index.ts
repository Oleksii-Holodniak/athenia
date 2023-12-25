import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { IDetailsInitStoreProps, IDetailsStoreProps } from "./types";

const initialState: IDetailsInitStoreProps = {
  isAdditingExam: false,
  isAdditingMaterial: false,
  tab: "materials",
};

export const useDetailsStore = create<IDetailsStoreProps>()(
  devtools(
    immer((set) => ({
      ...initialState,
      onChangeTab: (tag) => {
        set((state) => {
          state.tab = tag;
        });
      },
      setIsAdditing: (value, name) => {
        set((state) => {
          if (name === "exams") {
            state.isAdditingExam = value;
          }
          if (name === "materials") {
            state.isAdditingMaterial = value;
          }
        });
      },
    }))
  )
);
