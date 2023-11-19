import { LINK_TEMPLATES } from "@/common/constants/links";
import { INavigation } from "./interfaces";

export const navigation: INavigation[] = [
  {
    id: 0,
    name: "Home",
    path: LINK_TEMPLATES.HOME(),
  },
  {
    id: 1,
    name: "Courses",
    path: LINK_TEMPLATES.COURSES(),
  },
  {
    id: 2,
    name: "Popular",
    path: "",
  },
];
