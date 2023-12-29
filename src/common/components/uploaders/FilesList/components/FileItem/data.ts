import imageAI from "@/assets/images/file-types/AI.svg";
import imageAVI from "@/assets/images/file-types/AVI.svg";
import imageDOC from "@/assets/images/file-types/DOC.svg";
import imageGIF from "@/assets/images/file-types/GIF.svg";
import imageJPG from "@/assets/images/file-types/JPG.svg";
import imageMKV from "@/assets/images/file-types/MKV.svg";
import imageMP3 from "@/assets/images/file-types/MP3.svg";
import imagePDF from "@/assets/images/file-types/PDF.svg";
import imagePPT from "@/assets/images/file-types/PPT.svg";
import imagePSD from "@/assets/images/file-types/PSD.svg";
import imageSVG from "@/assets/images/file-types/SVG.svg";
import imageTXT from "@/assets/images/file-types/TXT.svg";

import { StaticImageData } from "next/image";

export const videoFormats = ["mkv", "avi", "mp4", "mov"];

export const fileType: Record<string, StaticImageData> = {
  pdf: imagePDF,
  doc: imageDOC,
  docx: imageDOC,
  ai: imageAI,
  gif: imageGIF,
  jpg: imageJPG,
  mkv: imageMKV,
  mp3: imageMP3,
  ppt: imagePPT,
  psd: imagePSD,
  svg: imageSVG,
  txt: imageTXT,
  avi: imageAVI,
};
