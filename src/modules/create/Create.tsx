"use client";
import { DropFiles } from "@/common/components/uploaders";
import { filterOptions } from "@/common/constants/general";
import { LINK_TEMPLATES } from "@/common/constants/links";
import { Input, MultiSelect, TextArea } from "@/ui-library/inputs";
import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CoursesService } from "./api";
import { Flex, Form, Submit, Wrapper } from "./styles";
import { ICreateFormValues } from "./types";

const Create = () => {
  const {
    register,
    handleSubmit,
    setError,
    setValue,
    clearErrors,
    formState: { errors, isSubmitted },
  } = useForm<ICreateFormValues>({
    mode: "onSubmit",
  });
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const { enqueueSnackbar } = useSnackbar();
  const { push } = useRouter();
  const onChangeSelectHandler = (value: string[]) => {
    if (isSubmitted && !isSubmitSuccessful) {
      if (value.length) {
        clearErrors("tags");
      } else {
        setError("tags", { type: "required" });
      }
    }
    setValue("tags", value);
  };

  const onSubmit = async (form: ICreateFormValues) => {
    try {
      if (file) {
        const res = await CoursesService.createCourses({
          ...form,
          preview: file,
        });
        enqueueSnackbar({
          variant: "success",
          message: "Successfully created",
        });
        await push(LINK_TEMPLATES.COURSES());
      }
    } catch (error) {
      enqueueSnackbar({
        variant: "error",
        message: "Something went wrong",
      });
    }
  };

  return (
    <Wrapper>
      <Flex>
        <DropFiles
          onChangeFile={(file) => setFile(file)}
          isError={!file && isSubmitted}
          allowFilesFormats={["jpg", "png", "svg", "jpeg"]}
        />
        <Form onSubmit={handleSubmit(onSubmit)}>
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
          <MultiSelect
            options={filterOptions}
            placeholder="Choose categories"
            label="Categories"
            registerOptions={register("tags", {
              required: true,
            })}
            error={errors.tags}
            onChange={(value) => onChangeSelectHandler(value)}
            isClear={isSubmitSuccessful}
          />
          <Submit type="submit">Submit</Submit>
        </Form>
      </Flex>
    </Wrapper>
  );
};

export default Create;
