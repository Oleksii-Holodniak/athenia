import { useDetailsStore } from "@/common/store/course-details";
import { IExam } from "@/common/types/models";
import { CourseService } from "@/modules/course-details/api";
import { Button } from "@/ui-library/buttons";
import { Input, TextArea } from "@/ui-library/inputs";
import { useSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import { ButtonContainer, FormContainer } from "../Materials/styles";
import { IExamsValues } from "./types";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm<IExamsValues>({
    mode: "onSubmit",
  });
  const { enqueueSnackbar } = useSnackbar();

  const setIsAdditing = useDetailsStore((state) => state.setIsAdditing);
  const onAddNewExam = useDetailsStore((state) => state.addNewExam);
  const courseId = useDetailsStore((state) => state.course.id);

  const onSubmit = async (data: IExamsValues) => {
    try {
      const res = await CourseService.addExam({ ...data, courseId });
      if (res.data.status === 200) {
        onAddNewExam(res.data.result[0] as IExam);
        enqueueSnackbar({
          variant: "success",
          message: "Successfully added",
        });
        setIsAdditing(false, "exams");
      }
    } catch (err) {
      enqueueSnackbar({ variant: "error", message: "Failed to add" });
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Title"
        placeholder="Enter title"
        {...register("title", {
          required: true,
        })}
        error={errors.title}
      />
      <Input
        label="Time to pass"
        placeholder="Enter time in hours"
        type="number"
        step="1"
        {...register("time", {
          required: true,
          min: {
            value: 1,
            message: `Minimum value: 1 hour`,
          },
        })}
        error={errors.time}
      />
      <TextArea
        label="Description"
        placeholder="Enter description"
        customHeight={200}
        {...register("description", {
          required: true,
        })}
        error={errors.description}
      />
      <Input
        label="Link"
        placeholder="https://example.com"
        {...register("link", {
          required: true,
        })}
        error={errors.link}
      />
      <ButtonContainer>
        <Button variant="outline" onClick={() => setIsAdditing(false, "exams")}>
          Cancel
        </Button>
        <Button type="submit">Submit</Button>
      </ButtonContainer>
    </FormContainer>
  );
};

export default Form;
