"use client";

import Carousel from "@/common/components/Carousel/Carousel";
import { FC } from "react";
import "swiper/css";
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
      <Carousel>{renderTabSlides()}</Carousel>
    </Wrapper>
  );
};

export default News;
