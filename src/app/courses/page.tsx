import { BaseLayout } from "@/common/layouts";
import { ICourse } from "@/common/types/models";
import { mocksCourses } from "@/mocks/courses";
import Courses from "@/modules/courses/Courses";

const getCourses = async (): Promise<{ courses: ICourse[] }> => {
  return { courses: mocksCourses };
};

const CoursesPage = async () => {
  const { courses } = await getCourses();
  return (
    <BaseLayout>
      <Courses courses={courses} />
    </BaseLayout>
  );
};

export default CoursesPage;
