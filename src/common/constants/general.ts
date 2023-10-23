import { SwiperProps } from "swiper/react";

export const BASE_COVERFLOW_CONFIG: SwiperProps = {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  slideToClickedSlide: true,
  speed: 600,
  autoplay: true,
  allowTouchMove: true,
  allowSlideNext: true,
  allowSlidePrev: true,
  longSwipes: false,
  loopPreventsSliding: false,
  direction: "horizontal",
  scrollbar: { draggable: true },
  className: "slider_container",
};
