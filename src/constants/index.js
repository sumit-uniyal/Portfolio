import project1 from "../assets/projects/pms.png";
import project2 from "../assets/projects/backend.png";
import project3 from "../assets/projects/tracking_tool.png";
import project4 from "../assets/projects/portfolio.png";
import book_my_show from '../assets/projects/book_my_show.png'

export const HERO_CONTENT = `Experienced Full-Stack Developer with 2.7+ years of expertise in designing, developing, and deploying scalable web applications using Node.js and React. Skilled in front-end development with React Hooks and server-side programming with Node.js. Proficient in building RESTful APIs, integrating third-party services, and managing databases with MongoDB (NoSQL) and SQL.

Strong in performance optimization, troubleshooting complex issues, and implementing robust security measures. Experienced in code reviews, enhancing code quality, and implementing testing procedures to ensure reliability. A collaborative team player, well-versed in Git, agile workflows, and end-to-end MERN stack development..`;

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
    title: "Backend API Development & Modular System Enhancement",
    image: project2,
    description:
      "Developed and optimized backend API services with database integration, enhancing system efficiency and reliability. Built key modules like HR Dashboard, Quality Tracker, Timesheet, and Ticketing System, creating a dynamic and interactive user experience. Improved team productivity by implementing efficient state management and issue tracking",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Intellectual Property Management & Innovation Tracking Tool",
    image: project3,
    description:
      "Developed a tool to manage Intellectual Property and streamline the innovation process, providing clear insights for admins and executives. Built a real-time tracking system for inventors, enhancing transparency in monetization. Optimized API integration, database performance, and version control to ensure efficient development and seamless user experience across devices.",
    technologies: ["HTML", "CSS", "Tailwind CSS", "React", "Node.js", "MongoDB", "Express.js"],
  },
  
];
export const PERSONAL_PROJECTS = [
  {
    title: "BOOK MY SHOW CLONE",
    image: book_my_show,
    description:
      "Built a complete movie ticket booking web application using the MERN stack, offering a seamless experience for both users and admins. The frontend was developed using React.js, Redux for state management, and styled with Tailwind CSS, delivering a responsive and modern UI. On the backend, Node.js and Express.js were used to create RESTful APIs, while MongoDB handled data storage efficiently. The application features secure JWT-based authentication, allowing role-based access for users and admins. Users can browse movies, select seats, choose show dates, and make real-time payments via the Razorpay Payment Gateway. The integration supports dynamic pricing and payment status handling. The admin panel allows adding and managing movie listings and viewing all booking details. The project demonstrates strong backend logic, clean UI design, third-party integration, and full-stack deployment experience.",
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
