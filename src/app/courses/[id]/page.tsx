import { BaseLayout } from "@/common/layouts";
import { InitDetailsSync } from "@/common/store/course-details/InitDetailsSync";
import { ICourse } from "@/common/types/models";
import CourseDetails from "@/modules/course-details/CourseDetails";
import { ICoursesDetailsPageProps } from "@/modules/course-details/types";
import { NextPage } from "next";
import { cookies } from "next/headers";

const getCourseByQuery = async (id: number): Promise<ICourse | undefined> => {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get(process.env.COOKIES_NAME!);

    const res = await fetch(`${process.env.BASE_URL}/course/${id}`, {
      headers: {
        Cookie: `${token?.name}=${token?.value}`,
      },
    });

    if (res.status === 200) {
      const data = await res.json();
      if (data?.status !== 200) {
        return undefined;
      }
      if (data?.result && data.result.length > 0) {
        return data.result[0];
      } else {
        return undefined;
      }
    } else {
      console.error(`Error fetching user data. Status: ${res.status}`);
      return undefined;
    }
  } catch (error) {
    return undefined;
  }
};

const DetailsPage: NextPage<ICoursesDetailsPageProps> = async ({ params }) => {
  if (!params || !params.id) {
    return <div>Error: Missing ID parameter</div>;
  }
  const courseData = await getCourseByQuery(params.id);

  if (!courseData) {
    return <div>Error: No data</div>;
  }
  return (
    <BaseLayout>
      <InitDetailsSync course={courseData} />
      <CourseDetails />
    </BaseLayout>
  );
};

export default DetailsPage;
