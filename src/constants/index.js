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
    carrent,
    jobit,
    tripguide,
    threejs,
    python,
    sv,
    zipy,
    coursera,
    udemy,
    udemyStack,
    pythonCoursera,
    freecode,
    duke,
    campus,
    mimoWeb,
    mimo1,
    mimoSql,
    pong,
    snake,
    cart,
    notes,
    candy,
    dbank,
    firstPort,
    gptWhatsapp,
    tours,
    reminder,
    reviews,
    disney,
    svCertificate,
  } from "../assets";

  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "certificates",
      title: "Certificates",
      },
    {
      id: "experience",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
      id: "projects",
      title: "Projects",
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
      name: "Python",
      icon: python,
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
    
  ];
  
  const experiences = [
    {
      title: "Full-Stack intern",
      company_name: "Zipy",
      icon: zipy,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Learning from the best, about best practices related to programing and newer framewroks and laiberies",
        "Thinking about efficency of both server and client side.",
      ],
    },
    {
      title: "Full-Stack Student",
      company_name: "Sv-college",
      icon: sv,
      iconBg: "#383E56",
      date: "June 2022 - Jan 2023",
      points: [
        "As i wanted to get stronger foundation in react,",
        "I signed up into a physical college to imporve my skills",
        "I Got a final grade of 85 points of 100",
        "With this grade the college sent me to an internship.",
      ],
    },
    {
      title: "Self taught student",
      company_name: "Udemy/Coursera",
      icon: udemy,
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
      title: "Self taught student",
      company_name: "Udemy/Coursera",
      icon: coursera,
      iconBg: "#383E56",
      date: "March 2021 - April 2022",
      points: [
        "Iv'e started learning math related to data analytics and computer science,",
        "Topics like- linear algebra, Discrete mathematics, Calculus, Probabilty and Statistics.",
        "Math Gave me a good understanding of concepts used in programing.",
        "With this base i started learning Python, data structures and data manipulation.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Outstanding student who consistently demonstrated exceptional aptitude and dedication. A top-performer with an A+ honor. Highly recommended.",
      name: "Yaniv Almog",
      designation: "Teacher",
      company: "Sv-college",
      image: "https://scontent.ftlv18-1.fna.fbcdn.net/v/t39.30808-6/279146268_1690637841288743_4913742192122967193_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Iz2GSuf0LvsAX_ILjt_&_nc_ht=scontent.ftlv18-1.fna&oh=00_AfA05GtKw3fyHxvVVquRoxM4KGhvnvS3g-G-vwb8d4Eg1Q&oe=64437EBA",
    },
    {
      testimonial:
        "Highly skilled, reliable, and diligent. A valuable asset to any team.",
      name: "Yura",
      designation: "Senior Frontend",
      company: "Zipy",
      image: "https://ca.slack-edge.com/T0XM0LL0J-UAQ1UFNBT-7eecbbd5dbb1-72",
    },
    {
      testimonial:
        "Adept at complex backend solutions, dependable, and collaborative. An exceptional team player with outstanding technical skills",
      name: "Igor",
      designation: "Senior Backend",
      company: "Zipy",
      image: "https://ca.slack-edge.com/T0XM0LL0J-U2Q41SCFL-b8b95376741f-72",
    },
  ];

  const tagsColors = {
    html: 'orange-text-gradient',
    css: 'pink-text-gradient',
    react: 'blue-text-gradient',
    js: 'green-text-gradient',
    node: 'orange-text-gradient',
    mongo: 'green-text-gradient',
    sql: 'orange-text-gradient',
    gql: 'green-text-gradient',
    next: 'blue-text-gradient'
  }

  const projects = [
    {
      name: "Disney+ Clone",
      description:
        "Disney+ Clone with some API functions.",
      tags: [
        {
          name: "Next.js",
          color: tagsColors.next,
        },
        {
          name: "GQL",
          color: tagsColors.gql,
        },
        {
          name: "CSS",
          color: tagsColors.css,
        },
      ],
      image: disney,
      source_code_link: "https://github.com/Nivnivu/disney-clone",
      link: 'https://github.com/Nivnivu/disney-clone',
    },
    {
      name: "Whatsapp-GPT",
      description:
        "Using OpenAI API and Whatsapp.web.js i can get a fast response from Chat-GPT",
      tags: [
        {
          name: "Node.js",
          color: tagsColors.node,
        },
      ],
      image: gptWhatsapp,
      source_code_link: "https://github.com/Nivnivu/gpt-to-whatsapp",
      link: 'https://github.com/Nivnivu/gpt-to-whatsapp',
    },
    {
      name: "Crypto Predictions",
      description:
        "Scraping, manipulating, arranging and making statistics about top crypo curncies.",
      tags: [
        {
          name: "React",
          color: tagsColors.react,
        },
        {
          name: "Mongodb",
          color: tagsColors.mongo,
        },
        {
          name: "Node.js",
          color: tagsColors.node,
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Nivnivu/crypto2",
      link: 'https://rsicalc.herokuapp.com/'
    },
    {
      name: "First Portfolio",
      description:
        "My first ever portfolio",
      tags: [
        {
          name: "React",
          color: tagsColors.react,
        },
        {
          name: "CSS",
          color: tagsColors.css,
        },
      ],
      image: firstPort,
      source_code_link: "https://github.com/Nivnivu/personal-portfolio",
      link: 'https://nivnivu.github.io/personal-portfolio/'
    },
    {
      name: "Pac-Man Game",
      description:
        "A great and simple version of Pac-Man made with the basics",
      tags: [
        {
          name: "HTML",
          color: tagsColors.html,
        },
        {
          name: "Javascript",
          color: tagsColors.js,
        },
        {
          name: "CSS",
          color: tagsColors.css,
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Nivnivu/pacman-game",
      link: 'https://nivnivu.github.io/pacman-game/'
    },
    {
      name: "MovieLand",
      description:
        "An API app connected to movies api, giving data for any commerical movie.",
      tags: [
        {
          name: "React",
          color: tagsColors.react,
        },
        {
          name: "CSS",
          color: tagsColors.css,
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Nivnivu/react-movie-api/tree/master",
      link: 'https://nivnivu.github.io/react-movie-api/'
    },
    {
      name: "Pong Game",
      description:
        "Old school good old pong",
      tags: [
        {
          name: "HTML",
          color: tagsColors.html,
        },
        {
          name: "Javascript",
          color: tagsColors.js,
        },
        {
          name: "CSS",
          color: tagsColors.css,
        },

      ],
      image: pong,
      source_code_link: "https://github.com/Nivnivu/pong-game",
      link: 'https://nivnivu.github.io/pong-game/'
    },
    {
      name: "Snake Game",
      description:
        "Well known snake game",
      tags: [
        {
          name: "HTML",
          color: tagsColors.html,
        },
        {
          name: "Javascript",
          color: tagsColors.js,
        },
        {
          name: "CSS",
          color: tagsColors.css,
        },

      ],
      image: snake,
      source_code_link: "https://github.com/Nivnivu/snake-game",
      link: 'https://nivnivu.github.io/snake-game/'
    },
    {
      name: "Cart",
      description:
        "One page IDigital Clone",
      tags: [
        {
          name: "React",
          color: tagsColors.react,
        },
        {
          name: "CSS",
          color: tagsColors.css,
        },

      ],
      image: cart,
      source_code_link: "https://github.com/Nivnivu/react_app",
      link: 'https://nivnivu.github.io/react_app/'
    },
    {
      name: "Secure Notes",
      description:
        "Notes App runing with ICP-Blockchain as backend",
      tags: [
        {
          name: "React",
          color: tagsColors.react,
        },
        {
          name: "CSS",
          color: tagsColors.css,
        },
        {
          name: "Motoko",
          color: tagsColors.html,
        },
      ],
      image: notes,
      source_code_link: "https://github.com/Nivnivu/notes-icp",
      link: 'https://nivnivu.github.io/notes/'
    },
    {
      name: "DBank",
      description:
        "Demo runing on ICP Blockchain",
      tags: [
        {
          name: "React",
          color: tagsColors.react,
        },
        {
          name: "CSS",
          color: tagsColors.css,
        },
        {
          name: "Motoko",
          color: tagsColors.html,
        },
      ],
      image: dbank,
      source_code_link: "https://github.com/Nivnivu/dbank",
      link: ''
    },
    {
      name: "Candy-Crush",
      description:
        "Candy crush simple clone version",
      tags: [
        {
          name: "React",
          color: tagsColors.react,
        },
        {
          name: "CSS",
          color: tagsColors.css,
        },
      ],
      image: candy,
      source_code_link: "https://github.com/Nivnivu/barsh-crush-game",
      link: 'https://nivnivu.github.io/barsh-crush-game/'
    },
    {
      name: "Birthday reminder",
      description:
        "A simple Frontend App.",
      tags: [
        {
          name: "React",
          color: tagsColors.react,
        },
        {
          name: "CSS",
          color: tagsColors.css,
        },
      ],
      image: reminder,
      source_code_link: "https://github.com/Nivnivu/birthday-reminder",
      link: 'https://nivnivu.github.io/birthday-reminder/'
    },
    {
      name: "Tours App",
      description:
        "Mapping Tours to a React interface",
      tags: [
        {
          name: "React",
          color: tagsColors.react,
        },
        {
          name: "CSS",
          color: tagsColors.css,
        },
      ],
      image: tours,
      source_code_link: "https://github.com/Nivnivu/tours-app",
      link: 'https://nivnivu.github.io/tours-app/'
    },
    {
      name: "Reviews App",
      description:
        "Awesome and simple Reviews App with React",
      tags: [
        {
          name: "React",
          color: tagsColors.react,
        },
        {
          name: "CSS",
          color: tagsColors.css,
        },
      ],
      image: reviews,
      source_code_link: "https://nivnivu.github.io/reviews-app/",
      link: 'https://nivnivu.github.io/reviews-app/'
    },
  ];
  
  const certificates = [
    {
      name: "Full-Stack Development",
      image: svCertificate,
      verifyLink: "",
    },
    {
      name: "Full-Stack Bootcamp",
      image: udemyStack,
      verifyLink: "https://lh3.googleusercontent.com/fife/APg5EOalqPDaCSNFEnkEMfHg6aGhn6o7QuK6Qg9QBePnPwB7JNtH7uozxfJSpA6eGRoAJpyRucSqajyfz6UiHD4iC9Po4wpyO8miC8l9SJwEJT352o3kTK0WGlEDi3HlLmkpSYrrXeNFRpYo6HeFClVR4HFECm_edmdyvdDvjULozhDP_NA_SqfPk9ctN64_sAjLHRGToiHxB3G2t0W42mLDlOa86qBnXxuInzgI-jkVe3j3ZPJDUWMrylvN3ton8FumHb7Y03rSCYUEn8Z9kG3a2lGhvhCn5fJ6osROjx0MFGLYKPkUU9HG4f7N7gHwl3JiygSyO6505Q5McGqCzA76U_BIe0Fqsi11wq5EVOX5PuztxQCpz74KZDW8645ibrYsxO1B2JE0nqk5JGXey2POkPs6eGUqXPdUAje5xzB6YGMz2nuXePBtltzBkS8blaH3FQ3HJJsm2glnbPpsYnmVi0K9dvHJLXUiUCKbZCxjoLgnMxQabIIt2K1NvZsjch23tNsm7Z_XbW8AYn2FJLaGCmkzWrJ3Z9O813g8zwHebvpvARTMf8VCVJEgvUf4cDA6sbQ6NxeqMGQH2iS62ypNjaeuFnYXKR0E_dgay-rXFbRb6yIsJaAh5hyPlUnNRtkq0GaE-IGFIgyotrAAAJ45-hwq5WZTCcNPsBSo3Z43cn_5D1Dhjr0NgPYT8YlxNfWTzSZRDKMlnt18O5BB2wim6LEcoSYwi-yc9fD02BqewjsiYTggbQhXtQSEaomqB7j1iI8ApuHHWIh7z287h99bNOQhV9No-tH83rIqIlyOsJqVPcFvikqGJ9AP9qZTCNu7hAW62yedpEv697OZcGopPaM0vumLsZlnWu7p3CUe3pchDHFEArZUPiEeifox-51d-Tf32_DLlR2CA7eKaj86LUEUtnYGoTxlX-mu89qhbsNdNxIHKbpXj9hDqnwkjm0_eGg6XFNvi-fc=w1920-h937",
    },
    {
      name: "Python For Everybody with honor",
      image: pythonCoursera,
      verifyLink: "https://www.coursera.org/account/accomplishments/verify/L4CY4QXLX2QC",
    },
    {
      name: "Data Science Math Skills",
      image: duke,
      verifyLink: "https://www.coursera.org/account/accomplishments/verify/Q7SUGZUMYWET",
    },
    {
      name: "Responsive Web Design",
      image: freecode,
      verifyLink: "https://www.freecodecamp.org/certification/Nivbarsh/responsive-web-design",
    }, 
    {
      name: "Self.py",
      image: campus,
      verifyLink: "https://courses.campus.gov.il/certificates/30472d809b114cf8b8115b202412ee82",
    },
    {
      name: "Python",
      image: mimoWeb,
      verifyLink: "https://nivnivu.github.io/personal-portfolio/static/media/mimo.5a743441184fb17644e5.JPG",
    },
    {
      name: "Web Development",
      image: mimo1,
      verifyLink: "https://nivnivu.github.io/personal-portfolio/static/media/mimo-web.0d53f55ab726acf01184.JPG",
    },
    {
      name: "SQL",
      image: mimoSql,
      verifyLink: "https://nivnivu.github.io/personal-portfolio/static/media/mimo-sql.136aa7edc11cece06b3f.JPG",
    },



  ];

  export { services, technologies, experiences, testimonials, projects, certificates };