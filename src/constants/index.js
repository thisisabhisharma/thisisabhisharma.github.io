import {
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
  smc,
  ebslon,
  MakeitLive,
  dacby,
  jootelelo,
  threejs,
  smc2,
  paramount,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Video Editior",
    icon: creator,
  },
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
    name: "React JS",
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
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Mobile App Developer",
    company_name: "SMC Insurance Brokers Private Limited",
    icon: smc,
    iconBg: "#383E56",
    date: "June 2022 - April 2023",
    points: [
      "Developing and maintaining mobile application using React Native and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-device compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Ebslon Infotech Pvt Ltd",
    icon: ebslon,
    iconBg: "#E6DEDD",
    date: "April 2021 - May 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React js Developer",
    company_name: "MakeitLive Media Pvt. Ltd",
    icon: MakeitLive,
    iconBg: "#383E56",
    date: "May 2019 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "SMC Insurance Mobile App",
    description:
      "Designed, Developed & Deployed entire mobile application of smc insurance both android and ios platform (build on react native).",
    tags: [
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: smc2,
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.smcinsurance&pli=1",
  },
  {
    name: "Dacby",
    description:
      "Developed a website which was build on React.js, Dacby is an Indian app based company with headquarters in Gurgaon whose goal is to build services for the growing gaming industry and come up with solutions for the gaming related issues that currently persist in the gaming market.",
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
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: dacby,
    source_code_link: "https://dacby.com/",
  },
  {
    name: "Joote Lelo",
    description:
      "Collaborated in a team to develop a website which was build on Mern Stack, Jootelelo is a private label retailer of its footwear collection. The store offers footwear for men, women & kids that are made by in-house designers based in Agra.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jootelelo,
    source_code_link: "http://www.jootelelo.in/",
  },
  {
    name: "Paramount Instruments",
    description:
      "Collaborated in a team to develop a website, Paramount Instruments Pvt. Ltd. is an associate company of the well-known “Paramount Group” as ISO 9001, ISO 14001 & ISO 45001 Certified Group, Established in 1964. At Paramount, we are committed to providing OUTSTANDING QUALITY CONTROL SOLUTIONS and WORLD-CLASS Testing Instruments for Textiles, Yarn, Fabric Inspection, Footwear, Leather, Artificial Leather, Automotive, Coated Fabrics, Non-Woven, Paper, Carboard and Packaging Industry",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: paramount,
    source_code_link: "https://paramountinstruments.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
