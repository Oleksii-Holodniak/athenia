import axios from "./base";

export const AuthService = {
  async register(form: any) {
    const data = await axios.post("/auth/signup", form);
    console.log("data :", data.headers["set-cookie"]);

    return data;
  },
  async login(form: any) {
    const { data } = await axios.post("/auth/signin", form);
    return data;
  },
};
