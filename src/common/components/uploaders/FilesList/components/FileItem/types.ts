import { IFile } from "@/common/types/models";

export interface IFileItemProps {
  item: IFile;
  readOnly: boolean;
  onDelete?: (ids: string) => void;
}
