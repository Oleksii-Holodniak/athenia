import { ICourse } from "@/common/types/models";
import { ICourseParams } from "@/modules/courses/types";

export interface ICoursesFilter {
  query: string;
  page: number;
  limit: number;
  tags: string[];
}

export interface IGetCoursesApiResponse {
  courses: ICourse[] | null;
  total: number;
}
export interface IInitialCoursesProps extends IGetCoursesApiResponse {
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
