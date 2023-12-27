export interface IErrored {
  isError?: boolean;
}
export interface IFileUploadProps extends IErrored {
  onChangeFile: (file: File) => void;
  allowFilesFormats?: string[];
  isAbleToPreview?: boolean;
  maxSize?: number;
}

export interface IFilesError {
  message: string;
}
