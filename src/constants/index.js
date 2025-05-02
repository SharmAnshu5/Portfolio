import {
    sql, backend,    ai,    web,    javascript,    python,    html,    css,    reactjs,    tensorflow,    tailwind,    nodejs,    django,    git,
    figma,   docker,    starbucks,    tesla,    shopify,    carrent,    jobit,    tripguide,    threejs,  } 
  from "../assets";
  
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
      title: "Backend Developer",
      icon: backend,
      
    },
    {
      title: "SQL",
      icon: sql,
    },
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "AI Developer",
      icon: ai,
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
      name: "Python",
      icon: python,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tensorflow",
      icon: tensorflow,
    },
    {
      name: "tailwind",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Django",
      icon: django,
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
  
  const education = [
    {
      title: "Graduation",
      School_name: "ABES institute of technology ",
      icon: starbucks,
      iconBg: "#383E56",
      date: "November 2021 - currently pursuing",
      points: [
        "Pursuing a Bachelor of Science in Computer Science and AI at ABES Institute of Technology.",
        "Currently in the final year, achieving a strong academic record with a percentage of 72.56%.",
        "Focused on advancing expertise in AI, machine learning, and computer science fundamentals."
      ],
    },
    {
      title: "12 Class",
      School_name: "Arpan Public School",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "March 2021",
      points: [
        "Completed 12th grade (CBSE) at Arpan Public School in 2021:",
        "Achieved an overall score of 83.33%.",
        "Focused on science subjects including Physics, Chemistry, and Mathematics."
      ],
    },
    {
      title: "High School",
      School_name: "Arpan Public School",
      icon: shopify,
      iconBg: "#383E56",
      date: "June 2019",
      points: [
        "Completed 10th grade (CBSE) at Arpan Public School in 2019.",
        "Achieved an overall score of 84.44%.",
        "Developed foundational skills in mathematics, science, and computer studies."
      ],
    },
  ];
  
  const projects = [
    {
      name: "AI Powerd web chatbot",
      description:
        [
          "Developed an advanced chatbot capable of understanding and responding to user inquiries in a natural language format .",
          "Employed TensorFlow for machine learning model development, NLTK for text processing, and NumPy for numerical computations.",
          "Created a user-friendly frontend interface utilizing HTML, CSS, and React to facilitate seamless interactions.",
          "Successfully trained and deployed the chatbot model, achieving high accuracy rates in recognizing user intent and delivering relevant information."
        ],
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "TensorFlow",
          color: "green-text-gradient",
        },
        {
          name: "Python",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/SharmAnshu5/Chatbot",
    },
    {
      name: "3D Portfolio",
      description:
        "Using Three.js, I created interactive 3D elements for web applications. This project taught the basics of rendering, object manipulation, and animations, adding a dynamic dimension to my portfolio website.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Three JS",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/SharmAnshu5/Portfolio",
    },
    {
      name: "InsuScan Pro",
      description: [ 
        "Technologies: Python, FastAPI, Streamlit, XGBoost, scikit-learn, PyMuPDF, pdf2image, python-docx.",
        "Developed an AI-based system to extract key medical data from PDF and DOCX reports.",
        "Used machine learning models (XGBoost, scikit-learn) to predict diabetes presence and classify it as Type 1 or Type 2.",
        "Built a complete application with a FastAPI backend and an interactive Streamlit frontend.",
        "Integrated tools like PyMuPDF, pdf2image, and python-docx for document parsing and preprocessing.",
        "Implemented real-time prediction, classification, and summarization, improving accessibility of medical insights."
      ],
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "scikit-learn",
          color: "green-text-gradient",
        },
        {
          name: "Streamlit",
          color: "pink-text-gradient",
        },
        {
          name: "xgboost",
          color: "blue-text-gradient",
        },
        {
          name: "fastapi",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/SharmAnshu5/InsuScan_Pro",
    },
  ];
  
  export { services, technologies, education, projects };
