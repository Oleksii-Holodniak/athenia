import { IFile } from "@/common/types/models";

export interface IFileListProps {
  files?: IFile[];
  onDelete?: (ids: string) => void;
  readOnly?: boolean;
}
