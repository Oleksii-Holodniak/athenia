import { ICourse } from "@/common/types/models";

export const mocksCourses: ICourse[] = [
  {
    id: "1",
    owner: 123,
    tags: ["programming", "javascript"],
    media: [],
    info: {
      image: "https://picsum.photos/800/900",
      name: "JavaScript Basics",
      description: "Learn the fundamentals of JavaScript programming.",
      price: 29.99,
    },
  },
  {
    id: "2",
    owner: 456,
    tags: ["web development", "html", "css"],
    media: [],
    info: {
      image: "https://picsum.photos/500/400",
      name: "HTML and CSS Mastery",
      description:
        "Master the art of building responsive websites with HTML and CSS.",
      price: 39.99,
    },
  },
  {
    id: "3",
    owner: 789,
    tags: ["data science", "python"],
    media: [],
    info: {
      image: "https://picsum.photos/500/600",
      name: "Python for Data Science",
      description: "Explore the world of data science with Python programming.",
      price: 49.99,
    },
  },
  {
    id: "4",
    owner: 101,
    tags: ["mobile development", "react native"],
    media: [
      {
        link: "",
        name: "telegram",
      },
    ],
    info: {
      image: "https://picsum.photos/900/600",
      name: "React Native Essentials",
      description: "Build cross-platform mobile apps with React Native.",
      price: 59.99,
    },
  },
  {
    id: "5",
    owner: 112,
    tags: ["backend development", "node.js"],
    media: [],
    info: {
      image: "https://picsum.photos/500/700",
      name: "Node.js in Action",
      description: "Learn server-side JavaScript with Node.js.",
      price: 44.99,
    },
  },
  {
    id: "6",
    owner: 131,
    tags: ["machine learning", "tensorflow"],
    media: [],
    info: {
      image: "https://picsum.photos/800/800",
      name: "TensorFlow Fundamentals",
      description: "Dive into the basics of machine learning with TensorFlow.",
      price: 69.99,
    },
  },
  {
    id: "7",
    owner: 141,
    tags: ["frontend development", "vue.js"],
    media: [],
    info: {
      image: "https://picsum.photos/600/601",
      name: "Vue.js for Beginners",
      description: "Build interactive user interfaces with Vue.js.",
      price: 34.99,
    },
  },
  {
    id: "8",
    owner: 152,
    tags: ["cloud computing", "aws"],
    media: [],
    info: {
      image: "https://picsum.photos/700/600",
      name: "AWS Cloud Essentials",
      description:
        "Get started with cloud computing using Amazon Web Services.",
      price: 79.99,
    },
  },
  {
    id: "9",
    owner: 163,
    tags: ["cybersecurity", "ethical hacking"],
    media: [],
    info: {
      image: "https://picsum.photos/800/700",
      name: "Ethical Hacking 101",
      description:
        "Learn the fundamentals of ethical hacking and cybersecurity.",
      price: 54.99,
    },
  },
  {
    id: "10",
    owner: 174,
    tags: ["frontend development", "angular"],
    media: [],
    info: {
      image: "https://picsum.photos/800/600",
      name: "Angular Masterclass",
      description:
        "Master the Angular framework for building dynamic web applications.",
      price: 49.99,
    },
  },
];
