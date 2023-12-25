import imageFileUnknown from "@/assets/images/file-types/unknown.webp";
import { IconPlus } from "@/common/components/icons";
import { formatFileSize } from "@/common/helpers/upload-files";
import { FC } from "react";
import { fileType } from "./data";
import {
  CrossButton,
  FileImage,
  FileSize,
  Info,
  Name,
  Wrapper,
} from "./styles";
import { IFileItemProps } from "./types";

const FileItem: FC<IFileItemProps> = ({ item, onDelete }) => (
  <Wrapper>
    <FileImage
      src={fileType[item.mimetype] || imageFileUnknown}
      alt={item.mimetype}
    />
    <Info>
      <Name>{item.filename}</Name>
      <FileSize>{formatFileSize(item.filesize, "Bytes", "MB")}</FileSize>
    </Info>
    <CrossButton onClick={() => onDelete(item.id)}>
      <IconPlus />
    </CrossButton>
  </Wrapper>
);

export default FileItem;
