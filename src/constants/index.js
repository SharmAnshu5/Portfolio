import {
    sql, backend,    ai,    web,    javascript,    python,    html,    css,    reactjs,    tensorflow,    tailwind,    nodejs,    django,    git,
    figma,   docker,    artifical,    chatbot,    hackerank,    hackerank1,    pythonnn,    softskill,    carrent,    jobit,    insuscanpro,    seabeneath,    threejs,
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
  
  const certifications = [
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


  export { services, technologies, certifications, projects };