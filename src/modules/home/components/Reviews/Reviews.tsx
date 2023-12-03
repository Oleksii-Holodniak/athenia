"use client";
import { Carousel } from "@/common/components/carousels";
import { FC } from "react";
import "swiper/css";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import { breakpoints, reviewsCarousel } from "./data";
import { Card, Column, Comment, ImageReview, Name } from "./styles";
import { IReviews } from "./types";

const Reviews: FC<IReviews> = (props) => {
  const { reviews } = props;
  const renderReview = () => {
    return reviews.map((item) => (
      <SwiperSlide key={item.id}>
        <Card>
          <ImageReview src={item.image} alt="review" />
          <Column>
            <Name>{item.name}</Name>
            <Comment>{item.comment}</Comment>
          </Column>
        </Card>
      </SwiperSlide>
    ));
  };

  return (
    <Carousel
      breakpoints={breakpoints}
      config={{ ...reviewsCarousel, modules: [EffectCoverflow, Autoplay] }}
    >
      {renderReview()}
    </Carousel>
  );
};

export default Reviews;
