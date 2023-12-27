import axios from "@/services/base";

export const CourseService = {
  async getCourse(id: string) {
    const data = await axios.post(`/course/student/${id}`);
    return data.data;
  },
};
