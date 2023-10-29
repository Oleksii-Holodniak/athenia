import { SwiperProps } from "swiper/react";

export const reviewsCarousel: SwiperProps = {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 3,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  slideToClickedSlide: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 80,
    modifier: 6,
    slideShadows: true,
  },
};

export const breakpoints = {
  200: {
    slidesPerView: 2,
  },
  540: {
    slidesPerView: 2.5,
  },
};
