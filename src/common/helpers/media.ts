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

export function objectToFormData(
  obj: any,
  formData = new FormData(),
  namespace = ""
) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      let formKey = namespace ? `${namespace}[${key}]` : key;
      if (typeof obj[key] === "object" && !(obj[key] instanceof File)) {
        objectToFormData(obj[key], formData, formKey);
      } else {
        formData.append(formKey, obj[key]);
      }
    }
  }
  return formData;
}
