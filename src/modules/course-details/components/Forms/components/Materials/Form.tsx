import { FilesUploader } from "@/common/components/uploaders";
import { useDetailsStore } from "@/common/store/course-details";
import { Button } from "@/ui-library/buttons";
import { Input, TextArea } from "@/ui-library/inputs";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ButtonContainer, FormContainer } from "./styles";
import { IMaterialValues } from "./types";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm<IMaterialValues>({
    mode: "onSubmit",
  });
  const [filesWillAdd, setFilesWillAdd] = useState<File[]>([]);
  const [filesToDelete, setFilesToDelete] = useState<string[]>([]);

  const setIsAdditing = useDetailsStore((state) => state.setIsAdditing);

  const onSubmit = () => {};
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
      <TextArea
        label="Description"
        placeholder="Enter description"
        customHeight={200}
        {...register("description", {
          required: true,
        })}
        error={errors.description}
      />
      <FilesUploader
        items={[]}
        onChange={(array) => setFilesWillAdd(array)}
        onDelete={(id) => setFilesToDelete((prev) => [...prev, id[0]])}
      />
      <ButtonContainer>
        <Button
          variant="outline"
          onClick={() => setIsAdditing(false, "materials")}
        >
          Cancel
        </Button>
        <Button type="submit">Submit</Button>
      </ButtonContainer>
    </FormContainer>
  );
};

export default Form;
