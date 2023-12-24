import { BaseLayout } from "@/common/layouts";
import { InitCoursesSync } from "@/common/store/courses/InitCoursesSync";
import { ICourse } from "@/common/types/models";
import { mocksCourses } from "@/mocks/courses";
import Courses from "@/modules/courses/Courses";
import { ICoursesPageProps } from "@/modules/courses/types";
import { NextPage } from "next";

const getCourses = async (): Promise<{ courses: ICourse[] }> => {
  return { courses: mocksCourses };
};

const CoursesPage: NextPage<ICoursesPageProps> = async (props) => {
  const { searchParams } = props;
  const { courses } = await getCourses();
  return (
    <BaseLayout>
      <InitCoursesSync courses={courses} total={44} params={searchParams} />
      <Courses />
    </BaseLayout>
  );
};

export default CoursesPage;
