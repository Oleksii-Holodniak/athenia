import { StaticImageData } from "next/image";
import { TSocialMediaType } from "./general";

export interface IUser {
  id: string;
  email: string;
  username: string;
  ownerCourses: ICourse[];
  studentCourses: ICourse[];
}

export interface IMedia {
  link: string;
  name: TSocialMediaType;
}

export interface IExam {
  title: string;
  description: string;
  link: string;
  time: string;
}

export interface IFile {
  link?: string;
  name: string;
  size: number;
  id?: string;
  lastModified?: number;
}

export interface IMaterial {
  createDate: string;
  description: string;
  files: IFile[];
  id: string;
  serial: number;
  time: string;
  title: string;
}

export interface ICourse {
  id: string;
  owners: IUser[];
  students?: IUser[];
  tags: string[];
  materials: IMaterial[];
  exams: IExam[];
  media: IMedia[];
  preview: string | StaticImageData;
  title: string;
  description: string;
  securityCode?: string;
  time: number;
}

export interface IFileUploadModel {
  fileUrl: string;
  id: string;
  mimetype: string;
  filesize: number;
  filename: string;
  authorId: string;
  parentId: string;
}
