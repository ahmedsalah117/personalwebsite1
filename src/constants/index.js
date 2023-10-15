import {
  forkify,
  admin,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  terminalback,
  terminal,
  route,
  altice,
  electron,
  bootstrap,
  next,
  movies,
  games,
  mapty,
  bankist,
  food,
  crud,
  expenses,
  bankistAdvanced,
} from "../assets";

export const navLinks = [
  {
    id: "overview",
    title: "Overview",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-End Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  // {
  //   title: "Backend Developer",
  //   icon: backend,
  // },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "NextJS",
    icon: next,
  },

  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "React Native",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Electron JS",
    icon: electron,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "git",
  //   icon: git,
  // },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
];

const experiences = [
  {
    title: "Front-End Developer",
    company_name: "Terminal",
    icon: terminal,
    iconBg: "#383E56",
    date: "Present",
    points: [
      "Developing and maintaining web applications using NextJS, React, React Native, Electron JS and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Front End Web Developer Trainee",
    company_name: "Route Academy",
    icon: route,
    iconBg: "#E6DEDD",
    date: "Jul 2022 - Dec 2022",
    points: [
      "Acquired strong foundations in computer science fundamentals, including Object-Oriented Programming (OOP), Data Structures, and Algorithms, using C++",
      "Developed proficiency in a wide range of web development technologies, including HTML, CSS, Sass, Bootstrap, JavaScript, TypeScript, jQuery, React JS, Redux, Git, and GitHub",
      "Participated in hands-on projects and exercises, applying learned concepts to real-world scenarios and enhancing problem-solving skills",
      "Showcased proficiency in React JS by developing projects that leveraged its component-based architecture and state management capabilities",
    ],
  },
  {
    title: "Senior Business Technical Support & Billing Agent",
    company_name: "Altice USA",
    icon: altice,
    iconBg: "#383E56",
    date: "Apr 2022 - Dec 2022",
    points: [
      " Represented the First-level of Business customer troubleshooting to Altice business customers, over the phone",
    ],
  },
  {
    title: "Corporate Executive Customer Relations Specialist",
    company_name: "Altice USA",
    icon: altice,
    iconBg: "#E6DEDD",
    date: "Nov 2021 - Mar 2022",
    points: [
      " Responsible for resolving the most highly escalated customer-initiated issues received by internal & partner employees, agencies, and executives to obtain the best possible resolution while maintaining the highest professional standards.",
    ],
  },
  {
    title: "Residential Technical Support & Billing Agent",
    company_name: "Altice USA",
    icon: altice,
    iconBg: "#E6DEDD",
    date: "May 2020 - Oct 2021",
    points: [
      " Successfully resolved technical issues and billing inquiries for a huge number of residential customers on a daily basis, maintaining a customer satisfaction rating of 98%",
    ],
  },
];

const projects = [
  {
    name: "Admin Dashboard",
    description: [
      "• This application is designed for managing and visualizing data in a user-friendly and customizable manner.",
      "• It includes various components such as a calendar, kanban board, color picker, and a text editor.",
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "SyncFusion",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: admin,
    source_code_link:
      "https://github.com/ahmedsalah117/admin-dashboard/tree/master",
    preview_link: "https://ahmedsalah117.github.io/admin-dashboard/",
  },
  {
    name: "The Movies App",
    description: [
      "• A professional and visually appealing platform that showcases the latest trending movies and actors.",

      "• You can use the following credentials to login: ",
      "email : testtest@testtest.com",
      "pass : Ahmed@1171998",
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "authentication",
        color: "pink-text-gradient",
      },
      {
        name: "axios",
        color: "blue-text-gradient",
      },
    ],
    image: movies,
    source_code_link: "https://github.com/ahmedsalah117/The-movies-app",
    preview_link: "https://ahmedsalah117.github.io/The-movies-app/",
  },
  {
    name: "Game Over",
    description: [
      "• Single Page React JS Application (SPA) which displays video games playable on both web browsers and Windows.",

      "• You can use the following credentials to login",

      "email: testtest@testtest.com",

      "password: Ahmed@1171998",
    ],
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "context_API",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: games,
    source_code_link: "https://github.com/ahmedsalah117/game-over",
    preview_link: "https://ahmedsalah117.github.io/game-over/",
  },

  {
    name: "Food Order App",
    description: [
      "• This is a demo food order app. Through this project I managed to create a great opportunity to sharpen my skills in React context API, handling HTTP requests, and user input handling (forms).",
    ],
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "form_handling",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: food,
    source_code_link: "https://github.com/ahmedsalah117/Expenses-Tracker",
    preview_link: "https://ahmedsalah117.github.io/Expenses-Tracker/",
  },
  {
    name: "Forkify",
    description: [
      "• This project was developed to practice my JavaScript skills in various areas especially OOP , DOM manipulation and the MVC architecture.",
    ],
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "OOP",
        color: "green-text-gradient",
      },
      {
        name: "MVC_Architecture",
        color: "pink-text-gradient",
      },
    ],
    image: forkify,
    source_code_link: "https://github.com/ahmedsalah117/forkify-app",
    preview_link:
      "https://6483915c30c84a1898e3cfe9--forkify-ahmed-bahnasy.netlify.app/",
  },
  {
    name: "Mapty",
    description: [
      "• This app allows users to track their running and cycling activities using the Leaflet library to display a map and the geolocation API to determine the user's coordinates and display them on the map.",
    ],
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "LeafLet",
        color: "green-text-gradient",
      },
      {
        name: "maps",
        color: "pink-text-gradient",
      },
    ],
    image: mapty,
    source_code_link: "https://github.com/ahmedsalah117/Mapty-app",
    preview_link: "https://ahmedsalah117.github.io/Mapty-app/",
  },

  {
    name: "Bank Landing Page",
    description: [
      "• This is a simple bank landing page built using Html , CSS , and Javascript . This was mainly built to practice advanced JS DOM Manipulation, and images lazy loading",
      ,
    ],
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Lacy_loading",
        color: "green-text-gradient",
      },
      {
        name: "DOM_Manipulation",
        color: "pink-text-gradient",
      },
    ],
    image: bankistAdvanced,
    source_code_link: "https://github.com/ahmedsalah117/bankist-advanced",
    preview_link: "https://ahmedsalah117.github.io/bankist-advanced/",
  },

  {
    name: "Bankist",
    description: [
      "• This is a simple demo bank application built using Html , CSS , and Javascript . This was mainly built to practice JS array methods , dates , times , Numbers , and Math methods.",
      "• The app was built in an amazing UI. You can use the user 'js' and pin '1111' to try it out.",
    ],
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Array_Methods",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: bankist,
    source_code_link: "https://github.com/ahmedsalah117/Bankist-app",
    preview_link: "https://ahmedsalah117.github.io/Bankist-app/",
  },
  {
    name: "Expenses Calculator",
    description: [
      "• This is an expenses tracker app that helps users track all of their expenses in an organized way and have a yearly overview of their expenses.",
    ],
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "React_Props",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: expenses,
    source_code_link: "https://github.com/ahmedsalah117/Expenses-Tracker",
    preview_link: "https://ahmedsalah117.github.io/Expenses-Tracker/",
  },
  {
    name: "CRUD Table",
    description: [
      "• This is a CRUD system built using JavaScript and Bootstrap to make sure I grasped the fundamentals of JavaScript",
      "• The app allows users to enter product information and store it in the browser's local storage",
      "• Users can view, update, and delete the product information.",
      ,
    ],
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "CRUD_Operations",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: crud,
    source_code_link: "https://github.com/ahmedsalah117/CRUD-System",
    preview_link: "https://ahmedsalah117.github.io/CRUD-System/",
  },
];

export { services, technologies, experiences, projects };
