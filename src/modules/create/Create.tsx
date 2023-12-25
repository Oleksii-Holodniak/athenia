"use client";
import imageUpload from "@/assets/images/decoration/upload.png";
import { IconKey } from "@/common/components/icons";
import { filterOptions } from "@/common/constants/general";
import { Input, MultiSelect, TextArea } from "@/ui-library/inputs";
import { useForm } from "react-hook-form";
import {
  Browse,
  Flex,
  Form,
  ImageUpload,
  Or,
  Paragraph,
  Preview,
  Row,
  Title,
  Wrapper,
} from "./styles";
import { ICreateFormValues } from "./types";

const Create = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateFormValues>({ mode: "onSubmit" });

  const onSubmit = async (form: ICreateFormValues) => {
    console.log("form :", form);
  };

  return (
    <Wrapper>
      <Flex>
        <Preview>
          <ImageUpload src={imageUpload} alt="upload" />
          <Title>Drag files to upload</Title>
          <Or>or</Or>
          <Browse>Browse files</Browse>
          <Paragraph>
            Max file size: <b>10MB</b>
            <br />
            Supported file types: <b>JPG, PNG, SVG, JPEG</b>
          </Paragraph>
        </Preview>
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
        </Form>
      </Flex>
    </Wrapper>
  );
};

export default Create;
