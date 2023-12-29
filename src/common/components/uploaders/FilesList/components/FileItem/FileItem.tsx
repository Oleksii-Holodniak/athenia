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

const FileItem: FC<IFileItemProps> = ({ item, onDelete, readOnly }) => {
  const handlerOpenFile = () => {
    if (readOnly) {
      let downloadLink = document.createElement("a");
      downloadLink.href = item.link!;
      downloadLink.download = item.name;
      downloadLink.target = "_blank";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };

  return (
    <Wrapper onClick={handlerOpenFile}>
      <FileImage
        src={fileType[item?.name?.split(".")?.pop() || ""] || imageFileUnknown}
        alt={item.name}
      />
      <Info>
        <Name>{item.name}</Name>
        <FileSize>{formatFileSize(item.size, "Bytes", "MB")}</FileSize>
      </Info>
      {!readOnly && (
        <CrossButton
          type={"button"}
          onClick={() => onDelete?.(item.lastModified?.toString()!)}
        />
      )}
    </Wrapper>
  );
};

export default FileItem;
