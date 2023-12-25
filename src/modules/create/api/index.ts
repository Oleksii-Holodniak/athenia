import axios from "axios";
import { ICreateFormValues } from "./../types";

export const CoursesService = {
  async createCourses(body: ICreateFormValues) {
    const formData = new FormData();
    formData.append("title", body.title);
    formData.append("description", body.description);
    formData.append("tags", body.tags.join(","));
    formData.append("preview", body.preview);

    const data = await axios.post(`${process.env.BASE_URL}/course`, formData, {
      withCredentials: true,
    });
    return data;
  },
};
