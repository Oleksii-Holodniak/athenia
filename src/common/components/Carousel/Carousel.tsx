"use client";
import { BASE_COVERFLOW_CONFIG } from "@/common/constants/general";
import { FC } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";
import { CarouselContainer, SwiperContainer } from "./styles";
import { ITabsCarousel } from "./types";

const Carousel: FC<ITabsCarousel> = (props) => {
  const { children, breakpoints } = props;

  return (
    <CarouselContainer>
      <SwiperContainer>
        <Swiper
          {...BASE_COVERFLOW_CONFIG}
          modules={[Navigation, Pagination]}
          breakpoints={breakpoints}
        >
          {children}
        </Swiper>
      </SwiperContainer>
    </CarouselContainer>
  );
};

export default Carousel;
