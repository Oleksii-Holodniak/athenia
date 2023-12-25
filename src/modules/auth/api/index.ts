import axios from "@/services/base";
import { ILoginFormValues, IRegisterApi } from "../types";
export const AuthService = {
  async register(form: IRegisterApi) {
    const data = await axios.post("/auth/signup", form);
    return data;
  },
  async login(form: ILoginFormValues) {
    const data = await axios.post("/auth/signin", form);
    return data;
  },
};
