import { useDetailsStore } from "@/common/store/course-details";
import { Button } from "@/ui-library/buttons";
import { Input } from "@/ui-library/inputs";
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
  const setIsAdditing = useDetailsStore((state) => state.setIsAdditing);

  const onSubmit = () => {};

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Link"
        placeholder="Enter link"
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
