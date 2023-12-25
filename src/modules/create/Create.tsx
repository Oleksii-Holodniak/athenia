"use client";
import { IconKey } from "@/common/components/icons";
import { filterOptions } from "@/common/constants/general";
import { generateHash } from "@/common/helpers/hash";
import { Input, MultiSelect, TextArea } from "@/ui-library/inputs";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CoursesService } from "./api";
import { FileUpload } from "./components";
import { Flex, Form, Row, Submit, Wrapper } from "./styles";
import { ICreateFormValues } from "./types";

const Create = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm<ICreateFormValues>({
    mode: "onSubmit",
    defaultValues: {
      securityCode: generateHash(),
    },
  });

  const [file, setFile] = useState<File | null>(null);

  const onSubmit = async (form: ICreateFormValues) => {
    try {
      const res = await CoursesService.createCourses(form);
      console.log("res :", res);
    } catch (error) {}
  };

  return (
    <Wrapper>
      <Flex>
        <FileUpload
          onChangeFile={(file) => setFile(file)}
          isError={!file && isSubmitted}
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
          <Row>
            <MultiSelect
              options={filterOptions}
              placeholder="Choose categories"
              label="Categories"
              registerOptions={register("tags")}
              error={errors.tags}
            />
            <Input
              label="Security code"
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
          </Row>
          <Submit type="submit">Submit</Submit>
        </Form>
      </Flex>
    </Wrapper>
  );
};

export default Create;
