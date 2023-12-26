import imageCulinary from "@/assets/images/categories/Culinary.webp";
import imageDesign from "@/assets/images/categories/Design.webp";
import imageEcology from "@/assets/images/categories/Ecology.webp";
import imageFitness from "@/assets/images/categories/Fitness.webp";
import imageHistory from "@/assets/images/categories/History.webp";
import imageLegal from "@/assets/images/categories/Legal.webp";
import imageProgramming from "@/assets/images/categories/Programming.webp";
import imageScience from "@/assets/images/categories/Science.webp";

import imageArch from "@/assets/images/awards/arch.webp";
import imageHelmet from "@/assets/images/awards/helmet.webp";
import imageTroyan from "@/assets/images/awards/troyan.webp";

import { LINK_TEMPLATES } from "@/common/constants/links";
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
    image: imageEcology,
    name: "Ecology",
    path: LINK_TEMPLATES.COURSES("", ["ecology"]),
  },
  {
    id: 2,
    image: imageLegal,
    name: "Legal",
    path: LINK_TEMPLATES.COURSES("", ["legal"]),
  },
  {
    id: 3,
    image: imageCulinary,
    name: "Culinary",
    path: LINK_TEMPLATES.COURSES("", ["culinary"]),
  },
  {
    id: 4,
    image: imageProgramming,
    name: "Programming",
    path: LINK_TEMPLATES.COURSES("", ["programming"]),
  },
  {
    id: 5,
    image: imageHistory,
    name: "History",
    path: LINK_TEMPLATES.COURSES("", ["history"]),
  },
  {
    id: 6,
    image: imageScience,
    name: "Science",
    path: LINK_TEMPLATES.COURSES("", ["science"]),
  },
  {
    id: 7,
    image: imageDesign,
    name: "Design",
    path: LINK_TEMPLATES.COURSES("", ["design"]),
  },
  {
    id: 8,
    image: imageFitness,
    name: "Fitness",
    path: LINK_TEMPLATES.COURSES("", ["fitness"]),
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
