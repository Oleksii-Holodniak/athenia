import imageFace from "@/assets/images/categories/6.webp";

import { ICourse } from "@/common/types/models";

export const mocksCourses: ICourse[] = [
  {
    bgColor: "#000000",
    info: {
      description: `Glossy Paper Brand Psd Mockup | Pixeden Club Pixeden Glossy Paper
      Brand Psd Mockup | Pixeden Club UI Design: Glossy Buttons with CSS3
      Gradient - Hongkiat Hongkiat UI Design: Glossy Buttons with CSS3
      Gradient - Hongkiat Trending Resources tagged as glossy | Figma
      Community Figma Trending Resources tagged as glossy | Figma
      Community CSS Button Shine Hover Effect CodePen CSS Button Shine
      Hover Effect css-effects · GitHub Topics · GitHub GitH`,
      name: "History",
      image: imageFace,
      price: 30,
    },
    owner: 1,
    id: "1",
    media: [
      {
        link: "1",
        name: "telegram",
      },
      {
        link: "2",
        name: "facebook",
      },
      {
        link: "3",
        name: "instagram",
      },
    ],
    tags: ["history"],
  },
];
