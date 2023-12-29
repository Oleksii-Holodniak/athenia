import imageFileUnknown from "@/assets/images/file-types/unknown.webp";
import { formatFileSize } from "@/common/helpers/upload-files";
import { useDetailsStore } from "@/common/store/course-details";
import { FC } from "react";
import { fileType, videoFormats } from "./data";
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
  const FILE_TYPE = item?.name?.split(".")?.pop() || "";
  const onSetVideoLink = useDetailsStore((state) => state.setVideoLink);
  const onOpen = useDetailsStore((state) => state.setOpenVideoViewer);

  const handlerOpenFile = () => {
    if (readOnly) {
      if (videoFormats.includes(FILE_TYPE)) {
        onSetVideoLink(item.link!);
        onOpen(true);
      } else {
        let downloadLink = document.createElement("a");
        downloadLink.href = item.link!;
        downloadLink.download = item.name;
        downloadLink.target = "_blank";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      }
    }
  };

  return (
    <Wrapper onClick={handlerOpenFile}>
      <FileImage
        src={fileType[FILE_TYPE] || imageFileUnknown}
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
