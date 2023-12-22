import { ICourse } from "@/common/types/models";

export interface ICoursesDetailsPageProps {
  params: {
    id: number;
  };
}

export interface ICoursesDetailsProps {
  course: ICourse;
}
