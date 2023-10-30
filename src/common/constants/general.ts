import { SwiperProps } from "swiper/react";

export const BASE_COVERFLOW_CONFIG: SwiperProps = {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  className: "slider_container",
};
