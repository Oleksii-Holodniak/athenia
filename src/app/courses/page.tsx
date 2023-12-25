import { BaseLayout } from "@/common/layouts";
import { InitCoursesSync } from "@/common/store/courses/InitCoursesSync";
import { IGetCoursesApiResponse } from "@/common/store/courses/types";
import Courses from "@/modules/courses/Courses";
import { ICoursesPageProps } from "@/modules/courses/types";
import { NextPage } from "next";

const getCourses = async (): Promise<IGetCoursesApiResponse | undefined> => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/course`);

    if (res.status === 200) {
      const data = await res.json();
      if (data?.result && data.result.length > 0) {
        return { courses: data.result || [], total: data.total };
      } else {
        return undefined;
      }
    } else {
      console.error(`Error fetching user data. Status: ${res.status}`);
      return undefined;
    }
  } catch (error) {}
};

const CoursesPage: NextPage<ICoursesPageProps> = async (props) => {
  const { searchParams } = props;
  const data = await getCourses();
  return (
    <BaseLayout>
      {data && (
        <InitCoursesSync
          courses={data.courses}
          total={data.total}
          params={searchParams}
        />
      )}
      <Courses />
    </BaseLayout>
  );
};

export default CoursesPage;
