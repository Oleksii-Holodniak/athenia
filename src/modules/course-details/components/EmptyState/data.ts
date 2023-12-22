import { StaticImageData } from "next/image";
import { TStateMessage } from "./types";

import imageExam from "@/assets/icons/empty/edit.svg";
import imageLink from "@/assets/icons/empty/link.svg";
import imageMaterial from "@/assets/icons/empty/file.svg";

export const messages: Record<TStateMessage, string> = {
  exams: "There are no test tasks in this course",
  links: "There are no additional links in this course",
  materials: "There are no educational materials in this course",
};

export const icon: Record<TStateMessage, StaticImageData> = {
  exams: imageExam,
  links: imageLink,
  materials: imageMaterial,
};
