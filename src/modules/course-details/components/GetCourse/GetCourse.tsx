import {
  IconClose,
  IconGraduationCap,
  IconKey,
} from "@/common/components/icons";
import { AnimatedModal } from "@/common/components/modals";
import { Input } from "@/ui-library/inputs";
import { useSnackbar } from "notistack";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { CourseService } from "../../api";
import {
  Content,
  Exit,
  Form,
  Head,
  Paragraph,
  Submit,
  Wrapper,
} from "./styles";
import { IGetCourse, IGetCourseValues } from "./types";

const GetCourse: FC<IGetCourse> = (props) => {
  const { onClose, opened } = props;
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<IGetCourseValues>({ mode: "onSubmit" });
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = async (form: IGetCourseValues) => {
    try {
      const res = await CourseService.getCourse(form.securityCode);
      if (res.status === 200) {
        enqueueSnackbar({
          variant: "success",
          message: "Successfully connected to new course",
        });
        window.location.reload();
      } else {
        setError("securityCode", {
          type: "validate",
          message: "Invalid security code",
        });
      }
    } catch (err) {
      enqueueSnackbar({ variant: "success", message: "Something went wrong" });
    }
  };

  return (
    <AnimatedModal opened={opened} onClose={onClose}>
      <Wrapper>
        <Head>
          <IconGraduationCap />
          Get a course
          <Exit type="button" onClick={onClose}>
            <IconClose />
          </Exit>
        </Head>
        <Content>
          <Paragraph>
            Enter the special key in the form of 32 characters that was given to
            you by your own for this course
          </Paragraph>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              placeholder="Enter security code"
              startIcon={<IconKey />}
              {...register("securityCode", {
                required: true,
              })}
              error={errors.securityCode}
            />
            <Submit type="submit">Submit</Submit>
          </Form>
        </Content>
      </Wrapper>
    </AnimatedModal>
  );
};

export default GetCourse;
