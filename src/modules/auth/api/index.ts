import axios from "@/services/base";
import Cookies from "cookies-js";
import { ILoginFormValues, IRegisterApi } from "../types";
export const AuthService = {
  async register(form: IRegisterApi) {
    const data = await axios.post("/auth/signup", form);
    return data;
  },
  async login(form: ILoginFormValues) {
    const data = await axios.post("/auth/signin", form);
    const cookie = Cookies.get(process.env.COOKIES_NAME!);
    return data;
  },
};
