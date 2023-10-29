"use client";
import { FC } from "react";
import "swiper/css";
import "swiper/css/autoplay";

import { Swiper } from "swiper/react";
import { CarouselContainer, SwiperContainer } from "./styles";
import { ITabsCarousel } from "./types";

const Carousel: FC<ITabsCarousel> = (props) => {
  const { children, breakpoints, config } = props;
  return (
    <CarouselContainer>
      <SwiperContainer>
        <Swiper {...config} breakpoints={breakpoints}>
          {children}
        </Swiper>
      </SwiperContainer>
    </CarouselContainer>
  );
};

export default Carousel;
