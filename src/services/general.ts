import { mocksCourses } from "@/mocks/courses";
import axios from "@/services/base";

export const UserService = {
  async getUser() {
    const data = await axios.post("/user/info");
    return data;
  },

  async logOut() {
    await axios.post("/auth/logout");
  },
};

export const CoursesService = {
  async getCourses() {
    const data = await axios.post("/course");
    return data;
  },
};
