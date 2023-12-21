import imageCard1 from "@/assets/images/categories/1.webp";
import imageCard2 from "@/assets/images/categories/2.webp";
import imageCard3 from "@/assets/images/categories/3.jpg";
import imageCard4 from "@/assets/images/categories/4.webp";
import imageCard5 from "@/assets/images/categories/5.webp";
import imageCard6 from "@/assets/images/categories/6.webp";
import imageCard7 from "@/assets/images/categories/7.webp";
import imageCard8 from "@/assets/images/categories/8.jpg";

import imageArch from "@/assets/images/awards/arch.webp";
import imageHelmet from "@/assets/images/awards/helmet.webp";
import imageTroyan from "@/assets/images/awards/troyan.webp";

import { IAccordion, IAward, ICategory } from "./types";

export const theBest: IAccordion[] = [
  {
    description:
      "Study course materials according to your individual schedule. Download our mobile apps to continue learning on the go or while traveling.",
    id: 1,
    title: "Anywhere and anytime",
  },
  {
    description: `Want to share your expertise, skills and knowledge with the world? Our online learning platform gives you the opportunity to create your own educational course and become an educator trusted by thousands of students around the world.`,
    id: 2,
    title: "Create your own course",
  },
  {
    description:
      "Free knowledge is a section of our online learning platform intended for those who have ambitions to develop and deepen their knowledge in various fields, not limited to standard courses. It's a place where you can freely explore topics that interest you and learn from a variety of sources.",
    id: 3,
    title: "Free knowledge",
  },
  {
    description:
      "Variety of Courses is a section of our online learning platform that offers a wide selection of training programs to meet any educational needs and interests. Whether you're new to a particular industry or looking for an opportunity to further your professional development, you'll find courses that interest you.",
    id: 4,
    title: "Variety of Courses",
  },
];

export const categories: ICategory[] = [
  {
    id: 1,
    image: imageCard1,
    name: "Languages",
    path: "/",
  },
  {
    id: 2,
    image: imageCard2,
    name: "Languages",
    path: "/",
  },
  {
    id: 3,
    image: imageCard3,
    name: "Languages",
    path: "/",
  },
  {
    id: 4,
    image: imageCard4,
    name: "Languages",
    path: "/",
  },
  {
    id: 5,
    image: imageCard5,
    name: "Languages",
    path: "/",
  },
  {
    id: 6,
    image: imageCard6,
    name: "Languages",
    path: "/",
  },
  {
    id: 7,
    image: imageCard7,
    name: "Languages",
    path: "/",
  },
  {
    id: 8,
    image: imageCard8,
    name: "Languages",
    path: "/",
  },
];

export const awards: IAward[] = [
  {
    description:
      "An interactive platform, fast feedback and your own pace of learning await you",
    id: 1,
    image: imageTroyan,
    title: "Easy",
  },
  {
    description:
      "Learn with the best teachers and expert practitioners from Ukrainian and international foundations and companies, such as: Coca-Cola, Monobank, Ubisoft, UN, OSCE and others    ",
    id: 2,
    image: imageArch,
    title: "Effectively",
  },
  {
    description:
      "Forget about boring courses! With us, you will get a real internship, become a NABU detective and study history in memes. And this is just the beginning!",
    id: 3,
    image: imageHelmet,
    title: "Interesting",
  },
];
