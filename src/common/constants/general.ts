import { SwiperProps } from "swiper/react";
import { IOption } from "../types/general";

export const BASE_COVERFLOW_CONFIG: SwiperProps = {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  className: "slider_container",
};

export const CATEGORIES = [
  "Programming",
  "Management",
  "Languages",
  "Science",
  "Design",
  "Languages",
  "Humanities",
  "Fitness",
  "History",
  "Ecology",
  "Legal",
  "Culinary",
] as const;

export const filterOptions: IOption<string>[] = [
  {
    id: "1",
    label: "Programming",
    value: "programming",
  },
  {
    id: "2",
    label: "Management",
    value: "management",
  },
  {
    id: "3",
    label: "Languages",
    value: "languages",
  },
  {
    id: "4",
    label: "Science",
    value: "science",
  },
  {
    id: "5",
    label: "Design",
    value: "design",
  },
  {
    id: "6",
    label: "Humanities",
    value: "humanities",
  },
  {
    id: "7",
    label: "History",
    value: "history",
  },
  {
    id: "8",
    label: "Fitness",
    value: "fitness",
  },
  {
    id: "9",
    label: "Ecology",
    value: "ecology",
  },
  {
    id: "10",
    label: "Legal",
    value: "legal",
  },
  {
    id: "11",
    label: "Culinary",
    value: "culinary",
  },
];
