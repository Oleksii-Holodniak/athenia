"use client";
import { LINK_TEMPLATES } from "@/common/constants/links";
import { patterns } from "@/common/helpers/patterns";
import { IResponse } from "@/common/types/general";
import { Input } from "@/ui-library/inputs";
import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import { AuthService } from "../api";
import { EmptyButton, Form, SubmitButton } from "../styles";
import { IRegistrationFormValues } from "../types";

const Registration = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<IRegistrationFormValues>({ mode: "onSubmit" });
  const { push } = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const onSubmit = async (data: IRegistrationFormValues) => {
    const { confirm_password, password, email, username } = data;
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
      username,
      email,
      password,
    };
    try {
      const { data } = await AuthService.register(regData);
      if (data.status === 200) {
        enqueueSnackbar({ variant: "success", message: "Successfully" });
        window.location.href = LINK_TEMPLATES.PROFILE();
      }
    } catch (e) {
      const error = e as IResponse;
      enqueueSnackbar({ variant: "error", message: error.message });
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder={"Enter Name"}
        {...register("username", {
          required: true,
          maxLength: 30,
        })}
        error={errors.username}
      />
      <Input
        placeholder={"Enter e-mail"}
        {...register("email", {
          required: true,
          pattern: {
            value: patterns.email,
            message: "Incorrect email",
          },
        })}
        error={errors.email}
      />
      <Input
        placeholder={"Enter password"}
        type={"password"}
        {...register("password", {
          required: true,
          minLength: { message: "8", value: 8 },
        })}
        error={errors.password}
      />
      <Input
        placeholder={"Enter confirm"}
        type={"password"}
        {...register("confirm_password", {
          required: true,
          minLength: { message: "8", value: 8 },
        })}
        error={errors.confirm_password}
      />
      <SubmitButton type="submit">Sing in</SubmitButton>
      <EmptyButton type="button" onClick={() => push(LINK_TEMPLATES.LOGIN())}>
        Sing up
      </EmptyButton>
    </Form>
  );
};

export default Registration;
