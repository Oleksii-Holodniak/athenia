import { ICourse } from "@/common/types/models";
import { ICourseParams } from "@/modules/courses/types";

export interface ICoursesFilter {
  query: string;
  page: number;
  limit: number;
  tags: string[];
}

export interface IInitialCoursesProps {
  courses: ICourse[] | null;
  total: number;
  params: ICourseParams;
}

export interface IInitialCoursesStoreProps
  extends Omit<IInitialCoursesProps, "params"> {
  filter: ICoursesFilter;
}

export interface ICoursesStoreProps extends IInitialCoursesStoreProps {
  onChangeFilterFieldHandler: <K extends keyof ICoursesFilter>(
    value: ICoursesFilter[K],
    name: K
  ) => void;
}
