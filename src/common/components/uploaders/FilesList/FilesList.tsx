import imageNoFileAttached from "@/assets/icons/files-search.svg";
import Image from "next/image";
import { FC } from "react";
import { FileItem } from "./components";
import { EmptyState, List, Wrapper } from "./styles";
import { IFileListProps } from "./types";

const FilesList: FC<IFileListProps> = (props) => {
  const { onDelete, files } = props;

  const renderFiles = () => {
    return files?.map((item) => (
      <FileItem key={item.lastModified} item={item} onDelete={onDelete} />
    ));
  };

  return (
    <Wrapper>
      <List>
        {!!files?.length ? (
          renderFiles()
        ) : (
          <EmptyState>
            <Image src={imageNoFileAttached} alt="file search" /> No file
            attached
          </EmptyState>
        )}
      </List>
    </Wrapper>
  );
};

export default FilesList;
