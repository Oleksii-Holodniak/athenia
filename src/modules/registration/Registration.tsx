"use client";
import { patterns } from "@/common/helpers/patterns";
import { renderInputError } from "@/common/helpers/renderInputError";
import { AuthService } from "@/services/auth";
import { Button } from "@/ui-library/buttons";
import { useForm } from "react-hook-form";
import { Form, Message, Wrapper } from "./styles";
import { IRegistrationFormValues } from "./types";
import { setCookie } from "cookies-next";

const Registration = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<IRegistrationFormValues>({ mode: "onSubmit" });

  const onSubmit = async (data: IRegistrationFormValues) => {
    const { confirm_password, password, email } = data;
    if (password !== confirm_password) {
      setError("confirm_password", {
        type: "validate",
        message: "Passwords do not match",
      });
      setError("password", {
        type: "validate",
        message: "Passwords do not match",
      });
      return;
    }
    const regData = {
      username: data.name,
      email,
      password,
    };
    try {
      const user = await AuthService.register(regData);
      console.log("user :", user);
    } catch (e) {}
    console.log("data :", data);
  };

  return (
    <Wrapper>
      <h2>Reg</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            placeholder={"Enter fName"}
            {...register("name", {
              required: true,
              maxLength: 30,
            })}
          />
          {errors.name && <Message>{renderInputError(errors.name)}</Message>}
        </div>
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
        <div>
          <input
            placeholder={"Enter confirm"}
            type={"password"}
            {...register("confirm_password", {
              required: true,
              minLength: { message: "8", value: 8 },
            })}
          />
          {errors.confirm_password && (
            <Message>{renderInputError(errors.confirm_password)}</Message>
          )}
        </div>
        <Button>Sing in</Button>
      </Form>
    </Wrapper>
  );
};

export default Registration;
