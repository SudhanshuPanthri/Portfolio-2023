import p1 from "./assets/1.png";
import p2 from "./assets/2.png";
import p3 from "./assets/3.png";
import p4 from "./assets/4.png";
import p5 from "./assets/5.png";
import p6 from "./assets/6.png";
import p7 from "./assets/7.png";

const data = [
  {
    id: "01",
    title: "Querio",
    description: "A query forum for students",
    functionalities: [
      {
        id: 1,
        functionality: "Secure authentication using bcrypt and JWT",
      },
      {
        id: 2,
        functionality: "Answering Multiple Queries",
      },
    ],
    techStack: ["React JS", "Node JS", "Express JS", "MongoDB"],
    images: [
      {
        id: 1,
        url: p1,
      },
      {
        id: 2,
        url: p2,
      },
    ],
    repoUrl: "https://github.com/SudhanshuPanthri/Querio-Client",
  },
  {
    id: "02",
    title: "Vichaar",
    description: "A minimal messaging app built on React Native",
    functionalities: [
      {
        id: 1,
        functionality: "Secure authentication using Firebase",
      },
      {
        id: 2,
        functionality: "Real time updation and message sharing",
      },
    ],
    techStack: ["React Native", "Firebase"],
    images: [
      {
        id: 1,
        url: p3,
      },
      {
        id: 2,
        url: p4,
      },
      {
        id: 3,
        url: p5,
      },
    ],
    repoUrl: "https://github.com/SudhanshuPanthri/vichaar_final",
  },
  {
    id: "03",
    title: "Airbnb Clone",
    description:
      "A Resting Place Lookup website with the ability to book and add your own accommodation",
    functionalities: [
      {
        id: 1,
        functionality: "Secure authentication using bcrypt and JWT",
      },
      {
        id: 2,
        functionality:
          "Uploading own accomadations and searching places on categories ",
      },
    ],
    techStack: ["React JS", "Node JS", "Express JS", "MongoDB"],
    images: [
      {
        id: 1,
        url: p6,
      },
      {
        id: 2,
        url: p7,
      },
    ],
    repoUrl: "https://github.com/SudhanshuPanthri/AIRBNB-clone-2023",
  },
];

export default data;
