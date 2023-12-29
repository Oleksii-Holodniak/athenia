"use client";
import { DropFiles, FilesList } from "@/common/components/uploaders";
import { useDetailsStore } from "@/common/store/course-details";
import { IFile, IMaterial } from "@/common/types/models";
import { CourseService } from "@/modules/course-details/api";
import { Button } from "@/ui-library/buttons";
import { Input, TextArea } from "@/ui-library/inputs";
import { useSnackbar } from "notistack";
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
  const courseId = useDetailsStore((state) => state.course.id);
  const onAddNewMaterial = useDetailsStore((state) => state.addNewMaterial);
  const { enqueueSnackbar } = useSnackbar();
  const [files, setFiles] = useState<File[]>([]);

  const setIsAdditing = useDetailsStore((state) => state.setIsAdditing);

  const onSubmit = async (data: IMaterialValues) => {
    try {
      const res = await CourseService.addMaterials({
        ...data,
        files,
        courseId,
      });
      if (res.data.status === 200) {
        onAddNewMaterial(res.data.result[0] as IMaterial);
        enqueueSnackbar({
          variant: "success",
          message: "Successfully added",
        });
        setIsAdditing(false, "materials");
      }
    } catch (err) {
      enqueueSnackbar({ variant: "error", message: "Failed to add" });
    }
  };

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

        <FilesList
          files={files as IFile[]}
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
