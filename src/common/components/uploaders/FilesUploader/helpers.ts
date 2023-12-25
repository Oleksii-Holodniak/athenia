import { excludeFile, fileValidate } from "@/common/helpers/upload-files";
import { IFileExcludes } from "@/common/types/general";
import { EnqueueSnackbar } from "notistack";
import { IUploadFilesResponse } from "./types";

export const ALLOW_FILES_FORMATS = [
  "jpg",
  "jpeg",
  "png",
  "docx",
  "doc",
  "pdf",
  "svg",
  "xlsx",
];

export const filterFilesToUpload = (
  values: FileList,
  enqueueSnackbar: EnqueueSnackbar
): IUploadFilesResponse => {
  const filesList: File[] = [];
  const stackFiles: IFileExcludes[] = [];
  for (let i = 0; i < values.length; i++) {
    try {
      const file = values.item(i);
      if (file !== null) {
        fileValidate(file, ALLOW_FILES_FORMATS);
        filesList.push(file);
        stackFiles.push(excludeFile(file));
      }
    } catch (e) {}
  }
  const unDownloadedFilesCount = values.length - filesList.length;
  if (unDownloadedFilesCount) {
    enqueueSnackbar(`${unDownloadedFilesCount} files could not be uploaded`, {
      variant: "error",
    });
  }

  return { filesList, stackFiles };
};
