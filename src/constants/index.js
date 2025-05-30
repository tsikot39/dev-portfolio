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
  threejs,
  storeit,
  carepulse,
  livedocs,
  ycdirectory,
  bowcourse,
  inventory,
  forkify,
  omnifood,
  tasktool,
  pms,
  dpa,
  ord,
  ris,
  xoom,
  imaginify,
  movies,
  course_app,
  expense_tracker,
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
    title: "Next.js",
    icon: web,
  },
  {
    title: "React",
    icon: mobile,
  },
  {
    title: "TypeScript",
    icon: backend,
  },
  {
    title: "Node.js",
    icon: creator,
  },
];

const technologies = [
  {
    name: "C#",
    icon: html,
  },
  {
    name: "CSS",
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
    name: "MS SQL",
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
    name: "Next JS",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Computer Programmer",
    company_name: "Philippine Children's Medical Center",
    icon: starbucks,
    iconBg: "#383E56",
    date: "November 2006 - July 2023",
    points: [
      "Developed full-stack hospital information systems that reduced patient record processing time by 40%",
      "Led a cross-functional team of 5 developers to implement mission-critical web and desktop applications using C#, VB.NET, ASP.NET and SQL Server.",
      "Trained over 500 healthcare and admin staff on software usage, improving system adoption by 60%.",
    ],
  },
  {
    title: "System Administrator",
    company_name: "Woodfields Consultants Inc.",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "July 2001 - September 2006",
    points: [
      "Managed and optimized network infrastructure, ensuring reliability and performance.",
      "Configured systems and devices, aligning with user needs and IT standards.",
      "Conducted system upgrades and maintenance, strengthening infrastructure security.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I've worked with him for over 15 years and have witnessed his passion to building projects. He has a strong enthusiasm for exploring new technologies.",
    name: "Nowell Edles",
    designation: "ISA II",
    company: "PCMC",
    image: starbucks,
  },
  {
    testimonial:
      "He developed a Patient Information System for us, which has been very useful and has made our work much easier. We are still using it to this day.",
    name: "Emily Sanchez",
    designation: "MSS Head",
    company: "PCMC",
    image: starbucks,
  },
  {
    testimonial:
      "He developed an Employee Information System with a pooling feature for managing employee information and other tasks. We have been using it for years.",
    name: "Mary Grace Morales",
    designation: "HR Head",
    company: "PCMC",
    image: starbucks,
  },
];

const projects = [
  {
    name: "Expense Tracker",
    description:
      "The Expense Tracker is a comprehensive web application designed to help users manage their personal finances by tracking expenses, categorizing spending, and visualizing financial data. Built with modern web technologies, this application provides an intuitive interface for users to monitor their spending habits and make informed financial decisions.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind css",
        color: "blue-text-gradient",
      },
      {
        name: "shadcn",
        color: "green-text-gradient",
      },
      {
        name: "recharts",
        color: "pink-text-gradient",
      },
      {
        name: "next-themes",
        color: "blue-text-gradient",
      },
      {
        name: "lucide react",
        color: "green-text-gradient",
      },
      {
        name: "next.js api routes",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
      {
        name: "mongoose",
        color: "green-text-gradient",
      },
      {
        name: "nextauth.js",
        color: "pink-text-gradient",
      },
      {
        name: "bcryptjs",
        color: "blue-text-gradient",
      },
      {
        name: "react hook form",
        color: "green-text-gradient",
      },
      {
        name: "zod",
        color: "pink-text-gradient",
      },
    ],
    image: expense_tracker,
    source_code_link: "https://jbc-expense-tracker.vercel.app/",
  },
  {
    name: "Movies Application",
    description:
      "Movies Application is a web application designed to help users discover and explore movies without the hassle. The app provides a clean, intuitive interface for searching through thousands of movies, viewing trending titles, and browsing popular films. It integrates with The Movie Database (TMDB) API for comprehensive movie data and uses Appwrite as a backend service to track and display trending searches.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind css",
        color: "blue-text-gradient",
      },
      {
        name: "react hooks",
        color: "green-text-gradient",
      },
      {
        name: "appwrite",
        color: "pink-text-gradient",
      },
      {
        name: "tmdb api",
        color: "blue-text-gradient",
      },
    ],
    image: movies,
    source_code_link: "https://jbc-movies-app.vercel.app/",
  },
  {
    name: "Storage Management Solution",
    description:
      "Store It is a modern, user-friendly cloud storage management application designed to help users efficiently organize, store, and manage their digital files. The application provides a seamless experience for uploading, categorizing, and accessing files from anywhere, with a focus on intuitive user interface and robust security features.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind css",
        color: "blue-text-gradient",
      },
      {
        name: "shadcn",
        color: "green-text-gradient",
      },
      {
        name: "recharts",
        color: "pink-text-gradient",
      },
      {
        name: "react hook form",
        color: "blue-text-gradient",
      },
      {
        name: "zod",
        color: "green-text-gradient",
      },
      {
        name: "react dropzone",
        color: "pink-text-gradient",
      },
      {
        name: "appwrite",
        color: "blue-text-gradient",
      },
      {
        name: "next.js server actions",
        color: "green-text-gradient",
      },
    ],
    image: storeit,
    source_code_link: "https://jbc-store-it.vercel.app/",
  },
  {
    name: "Patient Management System",
    description:
      "CarePulse is a modern, web-based patient management system designed to streamline healthcare appointment scheduling and management. The application provides separate interfaces for patients and administrators, enabling efficient healthcare service delivery and management.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind css",
        color: "blue-text-gradient",
      },
      {
        name: "shadcn",
        color: "green-text-gradient",
      },
      {
        name: "react hook form",
        color: "pink-text-gradient",
      },
      {
        name: "zod",
        color: "blue-text-gradient",
      },
      {
        name: "tanstack table",
        color: "green-text-gradient",
      },
      {
        name: "next themes",
        color: "pink-text-gradient",
      },
      {
        name: "appwrite",
        color: "blue-text-gradient",
      },
      {
        name: "next.js server actions",
        color: "green-text-gradient",
      },
      {
        name: "twilio",
        color: "pink-text-gradient",
      },
    ],
    image: carepulse,
    source_code_link: "https://jbc-carepulse.vercel.app/",
  },
  {
    name: "Realtime Collaboration Management App",
    description:
      "LiveDocs is a modern, real-time collaborative document editing platform that allows multiple users to work on the same document simultaneously. It provides a rich text editing experience with role-based access control, threaded comments, and a clean, intuitive user interface.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "clerk",
        color: "blue-text-gradient",
      },
      {
        name: "liveblocks",
        color: "green-text-gradient",
      },
      {
        name: "lexical",
        color: "pink-text-gradient",
      },
      {
        name: "shadcn",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind css",
        color: "green-text-gradient",
      },
      {
        name: "lucide react",
        color: "pink-text-gradient",
      },
    ],
    image: livedocs,
    source_code_link: "https://jbc-livedocs.vercel.app/",
  },
  {
    name: "Video Conferencing App",
    description:
      "Xoom is a modern video conferencing application inspired by Zoom. It provides a seamless platform for users to create, join, and manage virtual meetings. The application offers a user-friendly interface with features for scheduling meetings, recording sessions, and managing personal meeting rooms.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind css",
        color: "blue-text-gradient",
      },
      {
        name: "shadcn",
        color: "green-text-gradient",
      },
      {
        name: "next.js api routes",
        color: "pink-text-gradient",
      },
      {
        name: "stream.io",
        color: "blue-text-gradient",
      },
      {
        name: "clerk",
        color: "green-text-gradient",
      },
    ],
    image: xoom,
    source_code_link: "https://jbc-xoom.vercel.app/",
  },
  {
    name: "AI-Powered Image Processor App",
    description:
      "An AI image SaaS platform with advanced image processing, secure payments, image search, and AI features like restoration, recoloring, object removal, generative filling, and background removal.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "clerk",
        color: "blue-text-gradient",
      },
      {
        name: "cloudinary",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
      {
        name: "shadcn",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
    ],
    image: imaginify,
    source_code_link: "https://jbc-imaginify.vercel.app/",
  },
  {
    name: "Pitch Startup Platform",
    description:
      "A Next.js 15 platform for entrepreneurs to pitch ideas, join competitions, and explore others with a sleek, user-friendly design.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "sanity",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "shadcn",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
    ],
    image: ycdirectory,
    source_code_link: "https://jbc-ycdirectory.vercel.app/",
  },
  {
    name: "Recipe Web Application",
    description:
      "A web app to search over a million recipes, bookmark favorites, and add personal recipes, built with HTML, SASS, JavaScript, Parcel, and API integration.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
      {
        name: "api",
        color: "blue-text-gradient",
      },
    ],
    image: forkify,
    source_code_link: "https://jbc-forkify.vercel.app/",
  },
  {
    name: "Conceptual AI-powered Meal Subscriptions Platform",
    description:
      "A responsive, elegantly designed website offering a personalized daily meal delivery service crafted using JavaScript, HTML and CSS.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: omnifood,
    source_code_link: "https://jbc-omnifood.vercel.app/",
  },
  {
    name: "Course Management Android App",
    description:
      "Course App is a Kotlin-based Android app for students to manage schedules, explore courses, and view instructor info with a modern Jetpack Compose UI.",
    tags: [
      {
        name: "kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "jetpackcompose",
        color: "green-text-gradient",
      },
      {
        name: "material3",
        color: "pink-text-gradient",
      },
      {
        name: "SQLite",
        color: "blue-text-gradient",
      },
      {
        name: "androidstudio",
        color: "green-text-gradient",
      },
    ],
    image: course_app,
    source_code_link: "https://github.com/tsikot39/group5_mobiledev_project",
  },
  {
    name: "Bow Course Registration System",
    description:
      "A MERN stack platform where students register for courses, view schedules, and admins efficiently manage programs and enrollments.",
    tags: [
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
      {
        name: "express.js",
        color: "green-text-gradient",
      },
      {
        name: "react.js",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
    ],
    image: bowcourse,
    source_code_link: "https://github.com/tsikot39/bow-course",
  },
  {
    name: "Inventory Management System",
    description:
      "Helps store managers efficiently track products, monitor stock levels, and generate reports for streamlined inventory control.",
    tags: [
      {
        name: "csharp",
        color: "blue-text-gradient",
      },
      {
        name: "mssql",
        color: "green-text-gradient",
      },
      {
        name: "ado.net",
        color: "pink-text-gradient",
      },
      {
        name: "windowsforms",
        color: "blue-text-gradient",
      },
    ],
    image: inventory,
    source_code_link: "https://github.com/tsikot39/rad_finalproject_group5",
  },
  {
    name: "Task Management Tool",
    description:
      "A windows forms application for managing tasks, featuring add, edit, delete, and mark as completed options, with status filtering, title search, and color-coded due date tracking.",
    tags: [
      {
        name: "csharp",
        color: "blue-text-gradient",
      },
      {
        name: "mssql",
        color: "green-text-gradient",
      },
      {
        name: "ado.net",
        color: "pink-text-gradient",
      },
      {
        name: "windowsforms",
        color: "blue-text-gradient",
      },
    ],
    image: tasktool,
    source_code_link: "https://github.com/tsikot39/Task-Management-Tool",
  },
  {
    name: "Patient Information System",
    description:
      "A desktop application that organizes and stores detailed patient records, including medical history, demographics, treatments, diagnoses, prescriptions, and other healthcare-related data.",
    tags: [
      {
        name: "vb.net",
        color: "blue-text-gradient",
      },
      {
        name: "mssql",
        color: "green-text-gradient",
      },
      {
        name: "ado.net",
        color: "pink-text-gradient",
      },
      {
        name: "windowsforms",
        color: "blue-text-gradient",
      },
    ],
    image: pms,
    source_code_link: "https://github.com/tsikot39/patient-information-system",
  },
  {
    name: "Doctors PhilHealth Accreditation System",
    description:
      "A web application used to monitor and manage the accreditation status of doctors or healthcare providers with PhilHealth, the national health insurance program in the Philippines.",
    tags: [
      {
        name: "asp.net",
        color: "blue-text-gradient",
      },
      {
        name: "mssql",
        color: "green-text-gradient",
      },
      {
        name: "ado.net",
        color: "pink-text-gradient",
      },
      {
        name: ".netframework",
        color: "pink-text-gradient",
      },
    ],
    image: dpa,
    source_code_link:
      "https://github.com/tsikot39/doctors-philhealth-accreditation",
  },
  {
    name: "Online Research Abstract",
    description:
      "A web application providing a concise summary of research papers, articles, or studies, highlighting key points, findings, and conclusions for quick understanding.",
    tags: [
      {
        name: "asp.net",
        color: "blue-text-gradient",
      },
      {
        name: "mssql",
        color: "green-text-gradient",
      },
      {
        name: "ado.net",
        color: "pink-text-gradient",
      },
      {
        name: ".netframework",
        color: "pink-text-gradient",
      },
    ],
    image: ord,
    source_code_link: "https://github.com/",
  },
  {
    name: "Radiology Imaging System",
    description:
      "A web application for radiology departments to capture, store, process, and analyze medical images, aiding in diagnostic imaging and medical diagnosis.",
    tags: [
      {
        name: "asp.net",
        color: "blue-text-gradient",
      },
      {
        name: "mssql",
        color: "green-text-gradient",
      },
      {
        name: "ado.net",
        color: "pink-text-gradient",
      },
      {
        name: ".netframework",
        color: "blue-text-gradient",
      },
    ],
    image: ris,
    source_code_link: "https://github.com/",
  },
  {
    name: "PhilHealth SPC System",
    description:
      "A web application to track and manage the period of hospital confinement for insured individuals.",
    tags: [
      {
        name: "asp.net",
        color: "blue-text-gradient",
      },
      {
        name: "mssql",
        color: "green-text-gradient",
      },
      {
        name: "ado.net",
        color: "pink-text-gradient",
      },
      {
        name: ".netframework",
        color: "blue-text-gradient",
      },
    ],
    image: ris,
    source_code_link: "https://github.com/",
  },
  {
    name: "BLS Courses System",
    description:
      "A web application designed to track, manage, and monitor the training and certification of individuals in basic life support courses.",
    tags: [
      {
        name: "asp.net",
        color: "blue-text-gradient",
      },
      {
        name: "mssql",
        color: "green-text-gradient",
      },
      {
        name: "ado.net",
        color: "pink-text-gradient",
      },
      {
        name: ".netframework",
        color: "blue-text-gradient",
      },
    ],
    image: ris,
    source_code_link: "https://github.com/",
  },
  {
    name: "PhilHealth eClaims Web Service",
    description:
      "A windows forms application integrated with PhilHealth eClaims web service for processing claims and reimbursements. Users can check member eligibility, submit claims online, and track their status.",
    tags: [
      {
        name: "vb.net",
        color: "blue-text-gradient",
      },
      {
        name: "mssql",
        color: "green-text-gradient",
      },
      {
        name: "ado.net",
        color: "pink-text-gradient",
      },
      {
        name: ".netframework",
        color: "blue-text-gradient",
      },
    ],
    image: ris,
    source_code_link: "https://github.com/",
  },
  {
    name: "Employee Information System",
    description:
      "A desktop application for securely managing and organizing employee information, serving as a centralized hub for data storage and retrieval.",
    tags: [
      {
        name: "vb.net",
        color: "blue-text-gradient",
      },
      {
        name: "mssql",
        color: "green-text-gradient",
      },
      {
        name: "ado.net",
        color: "pink-text-gradient",
      },
      {
        name: ".netframework",
        color: "blue-text-gradient",
      },
    ],
    image: ris,
    source_code_link: "https://github.com/",
  },
  {
    name: "HR Pooling System",
    description:
      "A desktop application for effective human resource management, providing a structured framework for talent acquisition, development, and deployment to align with organizational goals and growth.",
    tags: [
      {
        name: "vb.net",
        color: "blue-text-gradient",
      },
      {
        name: "mssql",
        color: "green-text-gradient",
      },
      {
        name: "ado.net",
        color: "pink-text-gradient",
      },
      {
        name: ".netframework",
        color: "blue-text-gradient",
      },
    ],
    image: ris,
    source_code_link: "https://github.com/",
  },
  {
    name: "Employee Performance Management System",
    description:
      "A web application used to assess, track, and manage the performance of employees. This system helps in evaluating individual performance against set goals, identifying areas for improvement, and facilitating constructive feedback.",
    tags: [
      {
        name: "vb.net",
        color: "blue-text-gradient",
      },
      {
        name: "mssql",
        color: "green-text-gradient",
      },
      {
        name: "ado.net",
        color: "pink-text-gradient",
      },
      {
        name: ".netframework",
        color: "blue-text-gradient",
      },
    ],
    image: ris,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
