export interface IErrored {
  isError: boolean;
}
export interface IFileUploadProps extends IErrored {
  onChangeFile: (file: File) => void;
}
