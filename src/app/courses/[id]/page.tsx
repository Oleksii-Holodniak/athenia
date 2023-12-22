import { RootLayout } from "@/common/layouts";
import { ICourse } from "@/common/types/models";
import { mocksCourses } from "@/mocks/courses";
import CourseDetails from "@/modules/course-details/CourseDetails";
import { ICoursesDetailsPageProps } from "@/modules/course-details/types";
import { NextPage } from "next";

const getCourseByQuery = async (id: number): Promise<ICourse> => {
  return mocksCourses[id - 1];
};

const DetailsPage: NextPage<ICoursesDetailsPageProps> = async ({ params }) => {
  const courseData = await getCourseByQuery(params.id);
  return (
    <RootLayout>
      <CourseDetails course={courseData} />
    </RootLayout>
  );
};

export default DetailsPage;
