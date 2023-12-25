import { IFileExcludes } from "@/common/types/general";
import { IFileUploadModel } from "@/common/types/models";

export interface IUploadFilesResponse {
  filesList: File[];
  stackFiles: IFileExcludes[];
}

export interface IFileListProps {
  items?: IFileUploadModel[];
  onChange?: (files: File[]) => void;
  isLoading?: boolean;
  onDelete?: (ids: string[]) => void;
}

export interface IListProps {
  gridView: number;
}
