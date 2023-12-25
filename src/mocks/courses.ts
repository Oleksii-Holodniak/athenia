import { ICourse } from "@/common/types/models";

export const mocksCourses: ICourse[] = [
  {
    id: "1",
    tags: ["programming", "javascript"],
    media: [],
    preview: "https://picsum.photos/800/900",
    title: "JavaScript Basics",
    description: "Learn the fundamentals of JavaScript programming.",
  },
  {
    id: "2",
    tags: ["web development", "html", "css"],
    media: [],
    preview: "https://picsum.photos/500/400",
    title: "HTML and CSS Mastery",
    description:
      "Master the art of building responsive websites with HTML and CSS.",
  },
  {
    id: "3",
    tags: ["data science", "python"],
    media: [],
    preview: "https://picsum.photos/500/600",
    title: "Python for Data Science",
    description: "Explore the world of data science with Python programming.",
  },
  {
    id: "4",
    tags: ["mobile development", "react native"],
    media: [
      {
        link: "",
        name: "telegram",
      },
    ],

    preview: "https://picsum.photos/900/600",
    title: "React Native Essentials",
    description: "Build cross-platform mobile apps with React Native.",
  },
  {
    id: "5",
    tags: ["backend development", "node.js"],
    media: [],
    preview: "https://picsum.photos/500/700",
    title: "Node.js in Action",
    description: "Learn server-side JavaScript with Node.js.",
  },
  {
    id: "6",
    tags: ["machine learning", "tensorflow"],
    media: [],
    preview: "https://picsum.photos/800/800",
    title: "TensorFlow Fundamentals",
    description: "Dive into the basics of machine learning with TensorFlow.",
  },
  {
    id: "7",
    tags: ["frontend development", "vue.js"],
    media: [],
    preview: "https://picsum.photos/600/601",
    title: "Vue.js for Beginners",
    description: "Build interactive user interfaces with Vue.js.",
  },
  {
    id: "8",
    tags: ["cloud computing", "aws"],
    media: [],
    preview: "https://picsum.photos/700/600",
    title: "AWS Cloud Essentials",
    description: "Get started with cloud computing using Amazon Web Services.",
  },
  {
    id: "9",
    tags: ["cybersecurity", "ethical hacking"],
    media: [],
    preview: "https://picsum.photos/800/700",
    title: "Ethical Hacking 101",
    description: "Learn the fundamentals of ethical hacking and cybersecurity.",
  },
  {
    id: "10",
    tags: ["frontend development", "angular"],
    media: [],
    preview: "https://picsum.photos/800/600",
    title: "Angular Masterclass",
    description:
      "Master the Angular framework for building dynamic web applications.",
  },
];
