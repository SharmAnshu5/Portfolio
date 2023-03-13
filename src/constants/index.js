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
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      title: "Content Creator",
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
    {
      name: "Three JS",
      icon: threejs,
    },
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
      title: "Self taught student",
      company_name: "Udemy/Coursera",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2021 - April 2022",
      points: [
        "Iv'e started learning math related to data analytics and computer sience,",
        "Topics like- linear algebra, Discrete mathematics, Calculus, Probabilty and Statistics.",
        "Math Gave me a good understanding of conceptes used in programing.",
        "With this base i started learning Python, data structures and data manipulation.",
      ],
    },
    {
      title: "Self taught student",
      company_name: "Udemy/Coursera",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "April 2022 - July 2023",
      points: [
        "Getting in to Javascript in full power",
        "Finding the best online courses in full-stack",
        "Mastering the class and making note and code examples of each lesson.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Student",
      company_name: "Sv-college",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "As i wanted to get stronger foundation in react,",
        "I signed up into a physical college to imporve my skills",
        "I Got a final grade of 85 points of 100",
        "With this grade the college sent me to an internship.",
      ],
    },
    {
      title: "Zipy",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Learning from the best, about best practices related to programing and newer framewroks and laiberies",
        "Thinking about efficency of both server and client side.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Text about me text about me text about me",
      name: "Yaniv Almog",
      designation: "Teacher",
      company: "Sv-college",
      image: "https://scontent.fsdv1-2.fna.fbcdn.net/v/t39.30808-6/279146268_1690637841288743_4913742192122967193_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=yy7zR5TkUTQAX-rRZrb&_nc_ht=scontent.fsdv1-2.fna&oh=00_AfCV45748kQ4gFDziZO3hExqKtNsIEDv7LYgAGEtP3vD-Q&oe=641408BA",
    },
    {
      testimonial:
        "Text about me text about me text about me",
      name: "Yura",
      designation: "COO",
      company: "DEF Corp",
      image: "https://ca.slack-edge.com/T0XM0LL0J-UAQ1UFNBT-7eecbbd5dbb1-72",
    },
    {
      testimonial:
        "Text about me text about me text about me",
      name: "Dima",
      designation: "CEO",
      company: "Zipy",
      image: "https://ca.slack-edge.com/T0XM0LL0J-U0XMT5WTC-990f1cdb81c7-72",
    },
  ];
  
  const projects = [
    {
      name: "Crypto Perdictions",
      description:
        "Scraping, manipulating arrainging and making statistics about top crypo curncies.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "node.js",
          color: "orange-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Nivnivu/crypto2",
    },
    {
      name: "Pac-Man Game",
      description:
        "A great and simple version of Pac-Man made with the basics",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Nivnivu/pacman-game",
    },
    {
      name: "MovieLand",
      description:
        "An API app connected to movies api, giving data for any commerical movie.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };