"use client";
import { LINK_TEMPLATES } from "@/common/constants/links";
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
  const onSubmit = async (form: ILoginFormValues) => {
    try {
      const { data } = await AuthService.login(form);
      // if (data.status === 200) {
      // enqueueSnackbar({ variant: "success", message: "Successfully" });
      // window.location.href = LINK_TEMPLATES.PROFILE();
      // }
    } catch (e) {
      const error = e as IResponse;
      enqueueSnackbar({ variant: "error", message: error.message });
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder={"Enter Username"}
        {...register("username", {
          required: true,
        })}
        error={errors.username}
      />
      <Input
        placeholder={"Enter password"}
        type={"password"}
        {...register("password", {
          required: true,
          minLength: {
            message: `Password must contain at least 8 letters`,
            value: 8,
          },
        })}
        error={errors.password}
      />
      <SubmitButton type="submit">Sing in</SubmitButton>
      <EmptyButton
        type="button"
        onClick={() => push(LINK_TEMPLATES.REGISTRATION())}
      >
        Sing up
      </EmptyButton>
    </Form>
  );
};

export default Login;
