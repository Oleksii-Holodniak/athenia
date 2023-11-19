import axios from "@/services/base";
import { parse } from "cookie";
import { ILoginFormValues, IRegisterApi } from "../types";
export const AuthService = {
  async register(form: IRegisterApi) {
    const data = await axios.post("/auth/signup", form);
    const cookies = parse(data.headers.cookie || "");
    console.log("cookies :", cookies);
    console.log("data :", data);
    return data;
  },
  async login(form: ILoginFormValues) {
    const data = await axios.post("/auth/signin", form);
    const cookies = parse(data.headers.cookie || "");
    console.log("cookies :", cookies);
    console.log("data :", data);
    return data;
  },
};
