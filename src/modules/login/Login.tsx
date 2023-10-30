"use client";
import { patterns } from "@/common/helpers/patterns";
import { renderInputError } from "@/common/helpers/renderInputError";
import { AuthService } from "@/services/auth";
import { Button } from "@/ui-library/buttons";
import { useForm } from "react-hook-form";
import { Form, Message, Wrapper } from "../registration/styles";
import { ILoginFormValues } from "./types";

const Login = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<ILoginFormValues>({ mode: "onSubmit" });

  const onSubmit = async (data: ILoginFormValues) => {
    try {
      const user = await AuthService.register({
        username: data.email,
        password: data.password,
      });
      console.log("user :", user);
    } catch (e) {}
  };

  return (
    <Wrapper>
      <h2>Reg</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            placeholder={"Enter e-mail"}
            {...register("email", {
              required: true,
              pattern: {
                value: patterns.email,
                message: "Incorrect email",
              },
            })}
          />
          {errors.email && <Message>{renderInputError(errors.email)}</Message>}
        </div>
        <div>
          <input
            placeholder={"Enter password"}
            type={"password"}
            {...register("password", {
              required: true,
              minLength: { message: "8", value: 8 },
            })}
          />
          {errors.password && (
            <Message>{renderInputError(errors.password)}</Message>
          )}
        </div>
        <Button>Sing up</Button>
      </Form>
    </Wrapper>
  );
};

export default Login;
