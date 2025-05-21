import project1 from "../assets/projects/pms.png";
import project2 from "../assets/projects/reportgenrator.png";
import project3 from "../assets/projects/tracking_tool.png";
import project4 from "../assets/projects/portfolio.png";
import project5 from "../assets/projects/hrdashboard.png";
import project6 from "../assets/projects/backend.png";
import book_my_show from '../assets/projects/book_my_show.png'
import food_delivery from '../assets/projects/food_delivery.png'

export const HERO_CONTENT = `Experienced Full-Stack Developer with 2.10+ years of expertise in software development methodologies, designing and deploying scalable web applications using Node.js and React. Skilled in interpreting technical specifications, writing clean code, and defining software requirements.Proficient in front-end development with React Hooks and server-side programming with Node.js.Experienced in RESTful APIs, third-party integrations, and data solutions using MongoDB and MySQL.

Strong abilities in problem solving, resolving issues, and attention to detail. Excellent teamwork and communication skills. Adept in conducting code reviews, enhancing code quality performing integration testing, and following agile methodologies.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "April 2024 - Present", 
    role: "Software Developer",
    company: "Sagacious IP.",
    description: `Developed a Performance Management System (PMS) using React.js and Node.js, enhancing employee reviews and appraisals. Automated workflows reduced administrative overhead by 40%. Integrated real-time feedback and analytics for better decision-making. Optimized scalability with MongoDB, improving performance for 500+ users.`,
    technologies: ["Javascript", "React", "Node.js", "MongoDB", "Express.js"],
  },
  {
    year: "April 2023 - April 2024",
    role: "Junior Software Developer",
    company: "Sagacious IP",
    description: `Led backend API development with Node.js (Express) and MongoDB, improving system efficiency and reliability. Built and optimized modules like HR Dashboard, Quality Tracker, and Timesheet. Enhanced team productivity by integrating React Hooks for state management and better collaboration.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "Aug 2022 - April 2023",
    role: "Software Developer - Trainee",
    company: "Sagacious IP",
    description: `Developed an IP management tool to streamline innovation and provide actionable insights. Built a real-time tracking system for inventors, enhancing transparency. Designed responsive UIs with HTML and CSS for seamless user experience. Optimized databases and integrated APIs, ensuring efficient development with Git.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
];

export const PROJECTS = [
  {
    title: "Performance Management System (PMS)",
    image: project1,
    description:
      "Developed a Performance Management System (PMS) with automated workflows, real-time feedback, and performance analytics, enabling seamless employee reviews, appraisals, and efficient performance tracking.",
    technologies: ["HTML", "CSS", "Tailwind CSS", "React", "Node.js", "MongoDB", "Express.js"],
  },
  {
    title: "AI Report Genrator",
    image: project2,
    description:
      "Built an AI-powered report generation tool for Intellectual Property analysis using the ChatGPT API. The system accepts custom prompts from users and dynamically generates detailed, structured reports, streamlining documentation for legal, technical, and executive review. Integrated secure prompt handling, response formatting, and export functionality to enhance productivity and ensure data accuracy across platforms",
    technologies: ["HTML", "CSS", "React", "Node.js","MongoDB"],
  },
  {
    title: "Intellectual Property Management & Innovation Tracking Tool",
    image: project3,
    description:
      "Developed a tool to manage Intellectual Property and streamline the innovation process, providing clear insights for admins and executives. Built a real-time tracking system for inventors, enhancing transparency in monetization. Optimized API integration, database performance, and version control to ensure efficient development and seamless user experience across devices.",
    technologies: ["HTML", "CSS", "Tailwind CSS", "React", "Node.js", "MongoDB", "Express.js"],
  },
  {
    title: "HR Dashboard",
    image: project5,
    description:
      "Developed a comprehensive HR dashboard to streamline the entire employee lifecycle from onboarding to offboarding. Implemented features for efficient attendance tracking, leave management, and timesheet monitoring, providing HR and managers with real-time insights. Integrated automated workflows to simplify approvals and reduce manual errors. Optimized data synchronization across platforms, ensuring smooth performance and a seamless user experience across devices",
    technologies: ["HTML", "CSS", "Tailwind CSS", "React", "Node.js", "MongoDB", "Express.js"],
  },
  {
    title: "Quality Tracker App",
    image: project6,
    description:
      "Developed a Quality Tracker system to evaluate project standards at key development stages. The tool analyzes client feedback to identify gaps, track recurring issues, and assess overall quality. By aligning feedback with project milestones, it enables teams to proactively resolve issues and gain a clearer understanding of client expectations, ultimately improving delivery precision and client satisfaction.",
    technologies: ["HTML", "CSS", "Tailwind CSS", "React", "Node.js", "MongoDB", "Express.js"],
  },
  
];
export const PERSONAL_PROJECTS = [
  {
    title: "FOOD DELIVERY APP",
    image: food_delivery,
    description:
      "This is a full-stack food ordering application developed using the MERN stack where customers can browse a menu, add items to a cart, and place orders. The project includes secure authentication via both traditional login/register and Google Sign-In. The frontend is built with React.js and styled using standard CSS, providing a clean and responsive user interface across devices. On the backend, Express.js and Node.js handle user management, cart operations, and order processing, with MongoDB managing data efficiently. The app uses JWT for user session management and includes proper validations, creating a seamless experience from browsing to checkout.",
    github:"https://github.com/sumit-uniyal/Swiggy",
    live:"https://swiggy-yucg.onrender.com",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB", "Express.js"],
  },
  {
    title: "BOOK MY SHOW CLONE",
    image: book_my_show,
    description:
      "This is a fully functional movie ticket booking application built using the MERN stack — React.js for the frontend, Node.js and Express.js for the backend, and MongoDB for data management. The application allows users to browse available movies, view details, select seats, and make payments securely through Razorpay integration. It features secure user authentication and session management using JWT stored in HTTP-only cookies. The frontend is responsive and styled using Tailwind CSS, with Redux used for efficient state management. Backend APIs are modular and scalable, handling all core features like movies, users, and bookings, with proper error handling and validation mechanisms implemented.",
    github:"https://github.com/sumit-uniyal/Book-My-Show",
    live:"https://book-my-show-virid-theta.vercel.app/",
    technologies: ["HTML", "CSS", "Tailwind CSS", "React", "Node.js", "MongoDB", "Express.js"],
  },
  {
    title: "Portfolio Website",
    image: project4,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    github:"https://github.com/sumit-uniyal/Portfolio",
    live:"https://sumit-uniyal-full-stack-developer-portfolio.vercel.app/",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS"],
  },
  
];

export const CONTACT = {
  // address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+91 7895860469 ",
  email: "suniyal141@gmail.com",
};
