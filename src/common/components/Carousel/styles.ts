"use client";

import styled from "styled-components";

export const CarouselContainer = styled.div`
  position: relative;
  .swiper {
    width: 100%;
    height: 100%;
    padding-bottom: 30px;
  }
  width: 100%;
  overflow: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: none;
  padding: 2px 0;
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  .slider_container {
    padding-top: 16px;
    padding-bottom: 44px;
  }
  .swiper-pagination-bullet {
    background-color: #b3b3b3;
    width: 12px;
    height: 12px;
    &-active-main {
      background-color: var(--red);
    }
  }
  @media screen and (max-width: 767px) {
    .slider_container {
      padding-top: 0;
    }
  }
`;

export const SwiperContainer = styled.div`
  width: 100%;
  overflow: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: none;
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  .slider_container {
    width: calc(100% + 1px);
  }
`;
