import {
  IconClose,
  IconGraduationCap,
  IconKey,
} from "@/common/components/icons";
import { AnimatedModal } from "@/common/components/modals";
import { Input } from "@/ui-library/inputs";
import { FC } from "react";
import { useForm } from "react-hook-form";
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
    formState: { errors },
  } = useForm<IGetCourseValues>({ mode: "onSubmit" });

  const onSubmit = async (form: IGetCourseValues) => {
    console.log("form :", form);
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
            Enter the special key in the form of 16 characters that was given to
            you by your own for this course
          </Paragraph>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              placeholder="Enter security code"
              startIcon={<IconKey />}
              {...register("securityCode", {
                required: true,
                minLength: {
                  message: "Minimum field length: 16 characters",
                  value: 16,
                },
                maxLength: {
                  message: "Maximum field length: 16 characters",
                  value: 16,
                },
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
