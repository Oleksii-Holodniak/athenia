import imageFileUnknown from "@/assets/images/file-types/unknown.webp";
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
      src={fileType[item?.name?.split(".").pop()] || imageFileUnknown}
      alt={item.type}
    />
    <Info>
      <Name>{item.name}</Name>
      <FileSize>{formatFileSize(item.size, "Bytes", "MB")}</FileSize>
    </Info>
    <CrossButton onClick={() => onDelete?.(item.lastModified.toString())} />
  </Wrapper>
);

export default FileItem;
