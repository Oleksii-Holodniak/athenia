import imageFacebook from "@/assets/icons/social/facebook.svg";
import imageInstagram from "@/assets/icons/social/instagram.svg";
import imageMassager from "@/assets/icons/social/massager.svg";
import imageTelegram from "@/assets/icons/social/telegram.svg";

import { StaticImageData } from "next/image";

export const mediaType: Record<string, StaticImageData> = {
  telegram: imageTelegram,
  instagram: imageInstagram,
  facebook: imageFacebook,
};

export const getMediaType = (name: string): StaticImageData => {
  return mediaType[name] || imageMassager;
};
