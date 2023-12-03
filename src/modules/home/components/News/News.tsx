"use client";

import Carousel from "@/common/components/carousels/Carousel/Carousel";
import { BASE_COVERFLOW_CONFIG } from "@/common/constants/general";
import { FC } from "react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import { Title } from "../../styles";
import { Item } from "./components";
import { Wrapper } from "./styles";
import { INewsProps } from "./types";

const News: FC<INewsProps> = (props) => {
  const { courses } = props;

  const renderTabSlides = () => {
    return courses?.map((course) => (
      <SwiperSlide key={course.id}>
        <Item item={course} />
      </SwiperSlide>
    ));
  };

  return (
    <Wrapper>
      <Title>Popular Courses</Title>
      <Carousel config={{ ...BASE_COVERFLOW_CONFIG, modules: [Autoplay] }}>
        {renderTabSlides()}
      </Carousel>
    </Wrapper>
  );
};

export default News;
