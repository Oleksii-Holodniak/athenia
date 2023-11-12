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
import { ILoginFormValues } from "../types";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormValues>({ mode: "onSubmit" });
  const { push } = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const onSubmit = async (data: ILoginFormValues) => {
    try {
      const { status } = await AuthService.login(data);
      if (status === 200) {
        enqueueSnackbar({ variant: "success", message: "Successfully" });
      }
    } catch (e) {
      const error = e as IResponse;
      enqueueSnackbar({ variant: "error", message: error.message });
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder={"Enter email"}
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
      <SubmitButton type="submit">Sing up</SubmitButton>
      <EmptyButton
        type="button"
        onClick={() => push(LINK_TEMPLATES.REGISTRATION())}
      >
        Sing in
      </EmptyButton>
    </Form>
  );
};

export default Login;
