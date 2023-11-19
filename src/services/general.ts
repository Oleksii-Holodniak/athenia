import axios from "@/services/base";

export const UserService = {
  async getUser() {
    const data = await axios.post("/user/info");
    return data;
  },
};
