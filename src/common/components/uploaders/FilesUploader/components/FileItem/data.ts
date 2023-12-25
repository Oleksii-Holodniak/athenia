import pdfImage from "@/assets/images/file-types/pdf.webp";
import wordImage from "@/assets/images/file-types/word.webp";
import { StaticImageData } from "next/image";

export const fileType: Record<string, StaticImageData> = {
  pdf: pdfImage,
  doc: wordImage,
  docx: wordImage,
};
