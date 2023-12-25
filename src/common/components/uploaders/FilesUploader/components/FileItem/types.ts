import { IFileExcludes } from "@/common/types/general";

export interface IFileItemProps {
  item: IFileExcludes;
  onDelete: (id: string) => void;
}
