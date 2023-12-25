import { StaticImageData } from "next/image";
import { TSocialMediaType } from "./general";

export interface IUser {
  id: string;
  email: string;
  username: string;
}

export interface IMedia {
  link: string;
  name: TSocialMediaType;
}

export interface ICourse {
  id: string;
  owners: IUser[];
  students: IUser[];
  tags: string[];
  media: IMedia[];
  preview: string | StaticImageData;
  title: string;
  description: string;
  price: number;
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
