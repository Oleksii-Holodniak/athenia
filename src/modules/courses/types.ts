import { ICourse } from "@/common/types/models";

export interface ICoursesPage {
  courses: ICourse[];
}

export interface ICourseParams {
  page: number;
  query: string;
  tags: string;
}

export interface ICoursesPageProps {
  params: {};
  searchParams: ICourseParams;
}
