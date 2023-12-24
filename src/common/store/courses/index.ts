import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { ICoursesStoreProps, IInitialCoursesStoreProps } from "./types";

const initialState: IInitialCoursesStoreProps = {
  courses: null,
  total: 0,
  filter: {
    query: "",
    page: 1,
    limit: 16,
    tags: [],
  },
};

export const useCoursesStore = create<ICoursesStoreProps>()(
  devtools(
    immer((set) => ({
      ...initialState,
      onChangeFilterFieldHandler: (value, name) => {
        set((state) => {
          state.filter = { ...state.filter, [name]: value };
        });
      },
    }))
  )
);
