import imageNoFileAttached from "@/assets/icons/files-search.svg";
import { useOnClickOutside } from "@/common/hooks";
import { IFileExcludes } from "@/common/types/general";
import Image from "next/image";
import { useSnackbar } from "notistack";
import { FC, useEffect, useId, useRef, useState } from "react";
import { FileItem } from "./components";
import { filterFilesToUpload } from "./helpers";
import { EmptyState, List, LoadingState, Wrapper } from "./styles";
import { IFileListProps } from "./types";

const FilesUploader: FC<IFileListProps> = (props) => {
  const { items, onChange, isLoading, onDelete } = props;

  const [files, setFiles] = useState<IFileExcludes[]>(items || []);
  const [isOpen, setIsOpen] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const refFileList = useRef<HTMLDivElement>(null);

  useOnClickOutside(refFileList, () => setIsOpen(false));

  const uploadId = useId();

  const onAddFileHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const values: FileList | null = e.target.files;
    if (!values) {
      return null;
    }
    const { filesList, stackFiles } = filterFilesToUpload(
      values,
      enqueueSnackbar
    );

    if (stackFiles?.length) {
      setFiles((prev) => [...stackFiles, ...prev]);
      if (typeof onChange === "function") {
        onChange(filesList);
      }
    }
  };

  const onDeleteFileHandler = (id: string) => {
    if (typeof onDelete === "function") {
      onDelete([id]);
    }
    setFiles((prev) => {
      return prev.filter((file) => file.id !== id);
    });
  };

  const renderFiles = (full: boolean) => {
    return (full ? files.slice(2) : files.slice(0, 2))?.map((item) => (
      <FileItem key={item.id} item={item} onDelete={onDeleteFileHandler} />
    ));
  };

  useEffect(() => {
    setFiles(items || []);
  }, [items?.length]);

  return (
    <Wrapper>
      <List gridView={files.length} ref={refFileList}>
        {!!files?.length ? (
          renderFiles(false)
        ) : (
          <EmptyState>
            <Image src={imageNoFileAttached} alt="file search" /> No file
            attached
          </EmptyState>
        )}
        {isLoading && <LoadingState>Loading...</LoadingState>}
      </List>
    </Wrapper>
  );
};

export default FilesUploader;
