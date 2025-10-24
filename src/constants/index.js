import {
    sql, backend,    ai,    web,    javascript,    python,    html,    css,    reactjs,    tensorflow,    tailwind,    nodejs,    django,    git,
    figma,   docker,    artifical,    chatbot,    hackerank,    hackerank1,    pythonnn,    softskill,    carrent,    jobit,    insuscanpro,    datascience,  
    seabeneath,    threejs,    automation,   inventia,   Freelance,    auto,    autoProject,    fastfood,    fast,    inventiaProject,    inventiaLogo

    } 
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
      title: "Automation",
      icon: automation,
    },       
    {
      title: "AI Developer",
      icon: ai,
    },
    {
      title: "Data Science",
      icon : datascience
    },
    {
      title: "Backend Developer",
      icon: backend,      
    },
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "SQL",
      icon: sql,
    }
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
  
  const certifications = [
  {
    title: "AI, ML & Data Science Internship",
    provider: "Inventia Technologies",
    icon: inventia,
    iconBg: "#383E56",
    date: "July 2025",
    points: [
      "Worked as an AI and Data Science Engineer Intern focusing on model training, data preprocessing, and deployment.",
      "Built intelligent solutions integrating TensorFlow and scikit-learn for automated classification tasks.",
      "Performed end-to-end experimentation with Python-based ML pipelines, data cleaning, and visualization.",
      "Collaborated with mentors to develop scalable models for prediction and automation use cases.",
    ],   
  }, 
  {
    title: "Artificial Intelligence",
    provider: "Great Learning",
    icon: artifical,
    iconBg: "#383E56",
    date: "April 2024",
    points: [
      "Completed an introductory course on Artificial Intelligence.",
      "Learned about AI fundamentals, applications, and ethical considerations.",
      "Gained foundational knowledge in machine learning and neural networks."
    ],
  },
  {
    title: "Building Chatbots with Google Dialogflow",
    provider: "Great Learning",
    icon: chatbot,
    iconBg: "#E6DEDD",
    date: "April 2024",
    points: [
      "Built interactive chatbots using Google Dialogflow.",
      "Learned NLP integration, intents, entities, and context management.",
      "Practiced designing real-world conversational AI systems."
    ],
  },
  {
    title: "Developing Soft Skills and Personality",
    provider: "NPTEL (IIT Kanpur)",
    icon: softskill,
    iconBg: "#383E56",
    date: "July 2023",
    points: [
      "Completed an 8-week course on soft skill development.",
      "Covered communication, emotional intelligence, and workplace behavior.",
      "Enhanced presentation, interpersonal, and team collaboration skills."
    ],
  },
  {
    title: "Python (Basic)",
    provider: "HackerRank",
    icon: hackerank,
    iconBg: "#E6DEDD",
    date: "May 2024",
    points: [
      "Earned HackerRank certificate for Python (Basic) skills.",
      "Demonstrated understanding of data types, loops, functions, and conditionals.",
      "Validated ability to solve beginner-level programming problems in Python."
    ],
  },
  {
    title: "Problem Solving (Intermediate)",
    provider: "HackerRank",
    icon: hackerank1,
    iconBg: "#383E56",
    date: "May 2024",
    points: [
      "This certification challenged me with problems involving greedy algorithms, nested loops, string manipulation, and efficient array operations.",
      "Each question tested not just logic, but speed and optimization — pushing me to think cleanly under pressure.",
      "Improved problem-solving skills in programming using Python."
    ],
  },
  {
    title: "Problem Solving (Basic)",
    provider: "HackerRank",
    icon: pythonnn,
    iconBg: "#383E56",
    date: "May 2024",
    points: [
      "Earned HackerRank certificate for Problem Solving (Basic).",
      "Practiced logic building, loops, and condition-based problems.",
      "Improved problem-solving skills in programming using Python."
    ],
  }

 ]; 
 const Experience = [
  {
    name: "AI, ML & Data Science Internship – Inventia Technologies",
    description: [
      "Worked as an AI and Data Science Engineer Intern focusing on model training, data preprocessing, and deployment.",
      "Built intelligent solutions integrating TensorFlow and scikit-learn for automated classification tasks.",
      "Performed end-to-end experimentation with Python-based ML pipelines, data cleaning, and visualization.",
      "Collaborated with mentors to develop scalable models for prediction and automation use cases.",
    ],
    tags: [
      { name: "Python", color: "pink-text-gradient" },
      { name: "TensorFlow", color: "green-text-gradient" },
      { name: "React", color: "blue-text-gradient" },
      { name: "Machine Learning", color: "yellow-text-gradient" },
    ],
    companyLogo: inventiaLogo,
    projectImage: inventiaProject,
    source_code_link: "https://github.com/SharmAnshu5/Energy-Consumption-Forecasting-Internship-Project",
  },

  {
    name: "Software Developer & Automation Engineer – Technical Team",
    description: [
      "Led the development of an internal RPA automation project aimed at optimizing repetitive business processes.",
      "Built and deployed custom Python-based automation scripts integrating Selenium, PyAutoGUI, and scheduling tools.",
      "Streamlined multiple workflow systems to improve accuracy, performance, and reduce manual workload by 60%.",
      "Collaborated with the technical team on maintaining scalable automation pipelines and secure credential storage.",
    ],
    tags: [
      { name: "Python", color: "pink-text-gradient" },
      { name: "Automation", color: "orange-text-gradient" },
      { name: "RPA", color: "green-text-gradient" },
      { name: "FastAPI", color: "blue-text-gradient" },
    ],
    companyLogo: auto,
    projectImage: autoProject,
    source_code_link: "https://github.com/SharmAnshu5/RPA-Automation-",
  },

  {
    name: "Freelance Web Developer – QR Menu Project",
    description: [
      "Developed and deployed a digital QR-based menu system for a fast food restaurant.",
      "Designed a minimal yet elegant website to enhance customer ordering experience using React and Tailwind CSS.",
      "Integrated QR codes that dynamically load menu items and pricing in real-time.",
      "Handled complete end-to-end deployment — from frontend build to server configuration and maintenance.",
    ],
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "TailwindCSS", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
      { name: "Firebase", color: "yellow-text-gradient" },
    ],
    companyLogo: fast,
    projectImage: fastfood,
    source_code_link: "https://github.com/SharmAnshu5/Itlain-Bite-Pizza",
  },
  {
    name: "Freelance Developer (Currently Open for Projects)",
    description: [
      "Currently taking freelance projects focused on AI, automation, and full-stack web development.",
      "Offer end-to-end development services — from concept, design, and deployment to cloud integration.",
      "Skilled at building intelligent web apps with React, Node.js, and FastAPI.",
      "Passionate about working with startups and businesses to deliver high-quality software solutions."
    ],
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "FastAPI",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    companyLogo: Freelance,
    source_code_link: "https://github.com/SharmAnshu5",
  }
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
      description: [
        "Using Three.js, I created interactive 3D elements for web applications.",
        "This project taught the basics of rendering, object manipulation and animations, adding a dynamic dimension to my portfolio website."
      ],
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
      image: insuscanpro,
      source_code_link: "https://github.com/SharmAnshu5/InsuScan_Pro",
    },
    {
      name: "Sea Beneath Object Detection",
        description: [ 
          "Developed a deep learning-based system for detecting underwater objects in real-time.",
          "Developed a custom object detection model using YOLOv4, trained on underwater datasets containing labeled marine life",
          "submarines, and other objects.",
          "Applied advanced Deep Learning techniques to handle complex underwater conditions like low visibility and noise.",
          "Evaluated the model using precision, recall, and mean Average Precision (mAP) metrics.",
          "Explored real-world deployment scenarios using drones and autonomous underwater vehicles (AUVs)"
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
            name: "Open-CV",
            color: "pink-text-gradient",
          },
          {
            name: "Streamlit",
            color: "blue-text-gradient",
          },
          {
            name: "VOLO 5s",
            color: "green-text-gradient",
          },
          {
            name: "fastapi",
            color: "pink-text-gradient",
          },
        ],
        image: seabeneath,
        source_code_link: "https://github.com/SharmAnshu5/Sea-Beneath-Object-Detection",
    },
  ];
  const Recommendations = [
  {
    name: "Dr. Priya Mehta",
    role: "Senior Data Scientist & Mentor, Inventia Technologies",
    feedback:
      "Anshu Sharma demonstrated exceptional skill in AI and ML during his internship. His ability to integrate automation with data science impressed the entire team. Anshu’s strong problem-solving mindset and technical expertise make him a valuable asset to any organization.",
    image:
      "https://cdn-icons-png.flaticon.com/512/2922/2922561.png", // placeholder profile icon
    linkedin: "https://www.linkedin.com/in/anshu-sharma-b74a07221/",
  },
];


  export { services, technologies, certifications,Experience, projects,Recommendations };