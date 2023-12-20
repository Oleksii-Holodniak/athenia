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
  owner: number;
  bgColor: string;
  tags: string[];
  media: IMedia[];
  info: {
    image: string | StaticImageData;
    name: string;
    description: string;
    price: number;
  };
}
