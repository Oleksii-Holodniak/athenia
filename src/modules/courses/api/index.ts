import { ICoursesFilter } from "@/common/store/courses/types";
import axios from "@/services/base";

export const CourseService = {
  async searchCourses(params: ICoursesFilter) {
    const data = await axios.get(
      `/course/search?page=${params.page}&limit=${params.limit}&query=${
        params.query
      }&tags=${params.tags.join(",")}`
    );
    return data.data;
  },
};
