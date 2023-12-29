import { ICourse } from "@/common/types/models";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { IDetailsInitStoreProps, IDetailsStoreProps } from "./types";

const initialState: IDetailsInitStoreProps = {
  isAdditingExam: false,
  isAdditingMaterial: false,
  tab: "materials",
  course: {} as ICourse,
  openVideoViewer: false,
  videoLink: "",
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
      addNewMaterial: (material) => {
        set((state) => {
          state.course.materials.push(material);
        });
      },
      addNewExam: (exam) => {
        set((state) => {
          state.course.exams.push(exam);
        });
      },
      setOpenVideoViewer: (value) => {
        set((state) => {
          state.openVideoViewer = value;
        });
      },
      setVideoLink: (value) => {
        set((state) => {
          state.videoLink = value;
        });
      },
    }))
  )
);
