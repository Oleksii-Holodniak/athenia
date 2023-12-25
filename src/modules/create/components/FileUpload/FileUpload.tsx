import imageUpload from "@/assets/images/decoration/upload.png";
import { useSnackbar } from "notistack";
import { FC, useState } from "react";
import {
  Browse,
  ImageUpload,
  Or,
  Paragraph,
  Preview,
  Title,
  Wrapper,
} from "./styles";
import { IFileUploadProps } from "./types";

const FileUpload: FC<IFileUploadProps> = (props) => {
  const { isError, onChangeFile } = props;
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);
  const { enqueueSnackbar } = useSnackbar();

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    handleFile(file);
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    handleFile(file);
  };

  const handleFile = (file: File | undefined) => {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      enqueueSnackbar({
        message: "Please select an image.",
        variant: "warning",
      });
      return;
    }

    const reader = new FileReader();

    reader.onload = (e) => {
      setPreviewSrc(e.target?.result as string);
    };

    reader.readAsDataURL(file);
    onChangeFile(file);
  };

  const handleClick = () => {
    const fileInput = document.getElementById("file-input") as HTMLInputElement;
    fileInput.click();
  };

  return (
    <Wrapper
      isError={isError}
      id="drop-area"
      onDrop={handleDrop}
      onDragOver={(event) => event.preventDefault()}
    >
      <ImageUpload src={imageUpload} alt="upload" />
      <Title>Drag files to upload</Title>
      <Or>or</Or>
      <Browse onClick={handleClick}>Browse files</Browse>
      <Paragraph>
        Max file size: <b>10MB</b>
        <br />
        Supported file types: <b>JPG, PNG, SVG, JPEG</b>
      </Paragraph>
      <input
        type="file"
        id="file-input"
        style={{ display: "none" }}
        onChange={handleFileSelect}
      />
      {previewSrc && <Preview src={previewSrc} alt="Preview" fill />}
    </Wrapper>
  );
};

export default FileUpload;
