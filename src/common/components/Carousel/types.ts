import { PropsWithChildren } from "react";
import { CoverflowEffectOptions } from "swiper/types";

export interface ITabsCarousel extends PropsWithChildren {
  breakpoints?: any;
  coverflowConfig?: CoverflowEffectOptions;
}
