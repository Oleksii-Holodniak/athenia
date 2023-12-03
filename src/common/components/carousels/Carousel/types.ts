import { PropsWithChildren } from "react";
import { SwiperProps } from "swiper/react";

export interface ITabsCarousel extends PropsWithChildren {
  breakpoints?: any;
  config?: SwiperProps;
}
