"use client";
import { BASE_COVERFLOW_CONFIG } from "@/common/constants/general";
import { FC } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

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
          modules={[Autoplay]}
          breakpoints={breakpoints}
        >
          {children}
        </Swiper>
      </SwiperContainer>
    </CarouselContainer>
  );
};

export default Carousel;
