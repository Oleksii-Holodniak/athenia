import { StaticImageData } from "next/image";
export interface IAccordion {
  title: string;
  description: string;
  id: number;
}

export interface ICategory {
  image: string | StaticImageData;
  id: number;
  path: string;
  name: string;
}

export interface IAward {
  title: string;
  description: string;
  id: number;
  image: string | StaticImageData;
}

export interface IComment {
  comment: string;
  image: StaticImageData;
  name: string;
  id: number;
}
