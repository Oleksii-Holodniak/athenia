import axios from "@/services/base";
import baseAxios from "axios";
import {
  IExamAddValues,
  IMaterialAddValues,
} from "./../components/Forms/types";

export const CourseService = {
  async getCourse(id: string) {
    const data = await axios.post(`/course/student/${id}`);
    return data.data;
  },

  async addMaterials(body: IMaterialAddValues) {
    const formData = new FormData();
    body.files.forEach((file) => {
      formData.append(`files`, file);
    });
    formData.append("title", body.title);
    formData.append("description", body.description);
    formData.append("time", body.time.toString());
    formData.append("courseId", body.courseId);

    const data = await baseAxios.post(
      `${process.env.BASE_URL}/course/lecture`,
      formData,
      {
        withCredentials: true,
      }
    );
    return data;
  },
  async addExam(body: IExamAddValues) {
    const data = await axios.post(`${process.env.BASE_URL}/course/exam`, body);
    return data;
  },
};
