import { DropFiles, FilesList } from "@/common/components/uploaders";
import { useDetailsStore } from "@/common/store/course-details";
import { Button } from "@/ui-library/buttons";
import { Input, TextArea } from "@/ui-library/inputs";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ButtonContainer, FormContainer, Grid } from "./styles";
import { IMaterialValues } from "./types";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm<IMaterialValues>({
    mode: "onSubmit",
  });
  const [files, setFiles] = useState<File[]>([]);

  const setIsAdditing = useDetailsStore((state) => state.setIsAdditing);

  const onSubmit = () => {};
  return (
    <Grid>
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
        <FilesList
          files={files}
          onDelete={(id) =>
            setFiles((prev) =>
              prev.filter((file) => file.lastModified.toString() !== id)
            )
          }
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
      <DropFiles
        onChangeFile={(file) => setFiles((prev) => [...prev, file])}
        isAbleToPreview={false}
      />
    </Grid>
  );
};

export default Form;
