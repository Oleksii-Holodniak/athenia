import { IFileExcludes, IFormatFileSize } from "../types/general";

export const formatFileSize = (
  size: number,
  from: IFormatFileSize,
  to: IFormatFileSize
) => {
  const sizes: IFormatFileSize[] = ["Bytes", "KB", "MB", "GB"];
  const fromIndex = sizes.indexOf(from);
  const toIndex = sizes.indexOf(to);

  if (fromIndex < 0 || toIndex < 0) {
    throw new Error("Invalid input formats");
  }

  return `${(size / Math.pow(1024, toIndex - fromIndex)).toFixed(2)} ${to}`;
};

export const fileValidate = (file: File, formats: string[]) => {
  const size = 10000000; // 10mb

  const format = file.name.split(".").pop();
  if (format && !formats.includes(format)) {
    throw new Error(`${file.name} file is in the wrong format`);
  }
  if (file.size > size) {
    throw new Error("The size must be less than or equal to 10Mb");
  }
};

export const excludeFile = (file: File): IFileExcludes => {
  return {
    filename: file.name,
    id: file.lastModified.toString(),
    fileUrl: URL.createObjectURL(file),
    filesize: file.size,
    mimetype: file.name.split(".").pop() || "",
  };
};
