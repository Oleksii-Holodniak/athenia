import imageCard1 from "@/assets/images/categories/1.webp";
import imageCard2 from "@/assets/images/categories/2.webp";
import imageCard3 from "@/assets/images/categories/3.jpg";
import imageCard4 from "@/assets/images/categories/4.webp";
import imageCard5 from "@/assets/images/categories/5.webp";
import imageCard6 from "@/assets/images/categories/6.webp";
import imageCard7 from "@/assets/images/categories/7.webp";
import imageCard8 from "@/assets/images/categories/8.jpg";

import imageCourse from "@/assets/images/course.jpg";

import imageArch from "@/assets/images/awards/arch.webp";
import imageHelmet from "@/assets/images/awards/helmet.webp";
import imageTroyan from "@/assets/images/awards/troyan.webp";

import imageComment1 from "@/assets/images/comments/1.png";
import imageComment2 from "@/assets/images/comments/2.png";
import imageComment3 from "@/assets/images/comments/3.png";
import imageComment4 from "@/assets/images/comments/4.png";
import imageComment5 from "@/assets/images/comments/5.png";
import imageComment6 from "@/assets/images/comments/6.png";
import imageComment7 from "@/assets/images/comments/7.png";

import { ICourse } from "@/common/types/general";
import { IAccordion, IAward, ICategory, IComment } from "./types";
export const mockCourse: ICourse[] = [
  {
    id: 1,
    owner: 101,
    info: {
      image: imageCourse,
      name: "Course 1",
      description:
        "This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course 1",
      price: 10.99,
    },
  },
  {
    id: 2,
    owner: 102,
    info: {
      image: imageCourse,
      name: "Course 2",
      description:
        "This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course 2",
      price: 19.99,
    },
  },
  {
    id: 3,
    owner: 103,
    info: {
      image: imageCourse,
      name: "Course 3",
      description:
        "This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course 3",
      price: 14.99,
    },
  },
  {
    id: 4,
    owner: 104,
    info: {
      image: imageCourse,
      name: "Course 4",
      description:
        "This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course 4",
      price: 24.99,
    },
  },
  {
    id: 5,
    owner: 105,
    info: {
      image: imageCourse,
      name: "Course 5",
      description:
        "This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course 5",
      price: 9.99,
    },
  },
  {
    id: 6,
    owner: 106,
    info: {
      image: imageCourse,
      name: "Course 6",
      description:
        "This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course 6",
      price: 12.99,
    },
  },
  {
    id: 7,
    owner: 107,
    info: {
      image: imageCourse,
      name: "Course 7",
      description:
        "This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course 7",
      price: 17.99,
    },
  },
  {
    id: 8,
    owner: 108,
    info: {
      image: imageCourse,
      name: "Course 8",
      description:
        "This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course 8",
      price: 21.99,
    },
  },
  {
    id: 9,
    owner: 109,
    info: {
      image: imageCourse,
      name: "Course 9",
      description:
        "This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course 9",
      price: 15.99,
    },
  },
  {
    id: 10,
    owner: 110,
    info: {
      image: imageCourse,
      name: "Course 10",
      description:
        "This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course 10",
      price: 11.99,
    },
  },
  {
    id: 11,
    owner: 111,
    info: {
      image: imageCourse,
      name: "Course 11",
      description:
        "This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course 11",
      price: 13.99,
    },
  },
  {
    id: 12,
    owner: 112,
    info: {
      image: imageCourse,
      name: "Course 12",
      description:
        "This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course 12",
      price: 16.99,
    },
  },
  {
    id: 13,
    owner: 113,
    info: {
      image: imageCourse,
      name: "Course 13",
      description:
        "This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course This is course 13",
      price: 18.99,
    },
  },
];

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

export const comments: IComment[] = [
  {
    id: 21,
    image: imageComment1,
    name: "John Smith",
    comment:
      "This online learning platform is fantastic! I've learned so much, and the quality of the courses is top-notch.",
  },
  {
    id: 22,
    image: imageComment2,
    name: "Alice Johnson",
    comment:
      "I can't express how grateful I am for this educational website. It has helped me advance in my career and gain valuable skills.",
  },
  {
    id: 23,
    image: imageComment3,
    name: "Michael Brown",
    comment:
      "The instructors are knowledgeable and engaging. The content is well-structured, and the quizzes and assignments are a great way to reinforce learning.",
  },
  {
    id: 24,
    image: imageComment4,
    name: "Sarah Davis",
    comment:
      "I love the flexibility of online learning. It allows me to balance my studies with my job and family life.",
  },
  {
    id: 25,
    image: imageComment5,
    name: "David Wilson",
    comment:
      "The discussion forums are a great place to connect with other learners. It's a supportive community, and we can help each other out.",
  },
  {
    id: 26,
    image: imageComment6,
    name: "Jessica Martinez",
    comment:
      "The range of courses here is impressive. Whether you're a beginner or an expert, there's something for everyone.",
  },
  {
    id: 27,
    name: "Daniel Garcia",
    image: imageComment7,
    comment:
      "I appreciate the certificates I've earned from completing courses here. They have real value in my industry.",
  },
  {
    id: 28,
    image: imageComment1,
    name: "Emily Rodriguez",
    comment:
      "The video lectures are clear, and the platform's user-friendly design makes it easy to navigate and learn.",
  },
  {
    id: 29,
    name: "James Miller",
    image: imageComment2,
    comment:
      "The affordability of these courses is a big plus. I can gain new skills without breaking the bank.",
  },
  {
    id: 30,
    image: imageComment3,
    name: "Olivia Taylor",
    comment:
      "I've recommended this online learning platform to all my friends. It's a game-changer for personal and professional development.",
  },
  {
    id: 31,
    name: "William Jackson",
    image: imageComment4,
    comment:
      "The interactive quizzes and assignments challenge me to apply what I've learned. It's a great way to stay engaged.",
  },
  {
    id: 32,
    name: "Sophia Hernandez",
    image: imageComment5,
    comment:
      "The customer support team is responsive and helpful. Any issues I've had were quickly resolved.",
  },
  {
    id: 33,
    image: imageComment6,
    name: "Christopher White",
    comment:
      "I've taken multiple courses here, and I'm consistently impressed with the quality and relevance of the content.",
  },
  {
    id: 34,
    name: "Ava Lewis",
    image: imageComment7,
    comment:
      "The on-demand nature of the courses allows me to learn at my own pace. No pressure, no deadlines.",
  },
  {
    id: 35,
    name: "Joseph Clark",
    image: imageComment1,
    comment:
      "I appreciate the diversity of instructors and teaching styles. It keeps things interesting and engaging.",
  },
  {
    id: 36,
    name: "Mia Turner",
    image: imageComment2,

    comment:
      "The mobile app is a lifesaver. I can learn on the go, which is incredibly convenient.",
  },
  {
    id: 37,
    name: "Alexander Scott",
    image: imageComment3,

    comment:
      "I've gained valuable skills here that have directly benefited my career. I'm grateful for this resource.",
  },
  {
    id: 38,
    name: "Grace Young",
    image: imageComment4,
    comment:
      "The real-world applications of the knowledge I've gained have been a game-changer for me. I feel more confident in my work.",
  },
  {
    id: 39,
    name: "Benjamin Lee",
    image: imageComment5,

    comment:
      "I'm amazed at how much I've learned in a short time. The courses are packed with practical information.",
  },
  {
    id: 40,
    name: "Lily Hall",
    image: imageComment6,
    comment:
      "I've always wanted to learn these skills, and this platform has made it possible. Thank you!",
  },
];
