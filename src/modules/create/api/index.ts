import axios from "@/services/base";
import { ICreateFormValues } from "./../types";

export const CoursesService = {
  async createCourses(body: ICreateFormValues) {
    const data = await axios.post("/course", body);
    return data;
  },
};
