import { StaticImageData } from "next/image";

export interface ICourse {
  id: number;
  owner: number;
  info: {
    image: string | StaticImageData;
    name: string;
    description: string;
    price: number;
  };
}
