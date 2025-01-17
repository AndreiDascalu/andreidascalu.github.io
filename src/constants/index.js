import {
  mobile,
  backend,
  web,
  javascript,
  java,
  scala,
  postgresql,
  python,
  cplusplus,
  html,
  css,
  postman,
  springboot,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  ooppgif,
  strawberrygif,
  annispizzagif,
  tripguide,
  threejs,
  raytracergif,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Graduate Student",
    icon: web,
  },
  {
    title: "Java Developer",
    icon: mobile,
  },
  {
    title: "Algorithms Enthusiast",
    icon: backend,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Scala",
    icon: scala,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C++",
    icon: cplusplus,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Spring Boot",
    icon: springboot,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Postman",
    icon: postman,
  },
];

const projects = [
  {
    name: "Strawberry Quality Prediction App",
    description:
      "Android app using image processing and machine learning to analyze strawberry characteristics such as ripeness, sweetness, and marketability. Implemented augmented reality with CameraX for real-time image analysis and segmentation. Awarded Best Demo at the 2023 BNAIC/BeNeLearn conference.",
    tags: [
      {
        name: "android",
        color: "blue-text-gradient",
      },
      {
        name: "java",
        color: "green-text-gradient",
      },
      {
        name: "machine learning",
        color: "pink-text-gradient",
      },
    ],
    image: strawberrygif,
    source_code_link: "https://github.com/",
  },
  {
    name: "Quizzzz!",
    description:
      "Multiplayer educational game that tests knowledge of energy consumption through a series of multiple-choice questions. Players earn points for correct answers, with each level having an increased difficulty.",
    tags: [
      {
        name: "spring",
        color: "blue-text-gradient",
      },
      {
        name: "h2db",
        color: "green-text-gradient",
      },
      {
        name: "javafx",
        color: "pink-text-gradient",
      },
    ],
    image: ooppgif,
    source_code_link: "https://github.com/",
  },
  {
    name: "Anni's Pizza",
    description:
      "User friendly back-end ordering system application created in Java. Used to manage order creation, restaurant menu updates, regional chain management, client authentication and manager actions. ",
    tags: [
      {
        name: "spring",
        color: "blue-text-gradient",
      },
      {
        name: "h2db",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
    image: annispizzagif,
    source_code_link: "https://github.com/",
  },
  {
    name: "Recursive raytracer",
    description:
      "Ray tracer built in C++, adapting functionalities such as shadows, area lights, texture filtering, depth of field and acceleration data structures in order to build a fully functional raytracing application.",
    tags: [
      {
        name: "opengl",
        color: "blue-text-gradient",
      },
      {
        name: "mingw",
        color: "green-text-gradient",
      },
      {
        name: "c++",
        color: "pink-text-gradient",
      },
    ],
    image: raytracergif,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, projects };
