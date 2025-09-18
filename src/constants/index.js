import { color } from "framer-motion";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  starbucks,
  tesla,
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
  discord_bot,
  pet_care,
  event_management,
  rephrasing_tool,
  nexuschat,
  invoice_generator,
  python,
  postgresql,
  kubernetes,
  aws,
  redis,
  rabbitmq,
  graphql,
  restapi,
  cicd,
  github_actions,
  github,
  mysql,
  shadcn,
  zod,
  project_management,
  crm,
  b2b,
  paw_smart,
  telemed,
  emr,
  payflow,
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
    title: "Enterprise Application Development",
    icon: web,
  },
  {
    title: "Digital Transformation Leadership",
    icon: mobile,
  },
  {
    title: "Scalable Architecture Design",
    icon: backend,
  },
  {
    title: "Cloud Infrastructure & DevOps",
    icon: creator,
  },
];

const technologies = [
  // Frontend Technologies
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
    name: "Next JS",
    icon: figma,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Shadcn/UI",
    icon: shadcn,
  },
  {
    name: "Zod",
    icon: zod,
  },
  // Backend Technologies
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "C#",
    icon: html,
  },
  {
    name: "Python",
    icon: python,
  },
  // API
  {
    name: "Rest API",
    icon: restapi,
  },
  {
    name: "GraphQL",
    icon: graphql,
  },
  // Databases
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "MS SQL",
    icon: redux,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  // Development & Deployment Tools
  {
    name: "Redis",
    icon: redis,
  },
  {
    name: "RabbitMQ",
    icon: rabbitmq,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "CI/CD",
    icon: cicd,
  },
  {
    name: "GitHub Actions",
    icon: github_actions,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
  {
    name: "AWS",
    icon: aws,
  },
];

const experiences = [
  {
    title: "Senior Software Developer",
    company_name: "Philippine Children's Medical Center",
    icon: starbucks,
    iconBg: "#383E56",
    date: "November 2006 - July 2023",
    points: [
      "Architected and delivered enterprise-grade hospital information systems, reducing patient record processing time by 40% and improving operational efficiency across 15+ departments",
      "Led cross-functional development teams of 5+ engineers, driving the successful implementation of mission-critical web and desktop applications using C#, VB.NET, .NET Framework, ASP.NET and MS SQL Server",
      "Spearheaded digital transformation initiatives, training 500+ healthcare professionals and achieving 60% improvement in system adoption rates",
      "Designed scalable database architectures and implemented robust security protocols for handling sensitive patient data in compliance with healthcare regulations",
    ],
  },
  {
    title: "Systems Administrator",
    company_name: "Woodfields Consultants Inc.",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "July 2001 - September 2006",
    points: [
      "Engineered and optimized enterprise network infrastructure, ensuring 99.9% uptime and peak performance for business-critical operations",
      "Designed and implemented scalable system configurations aligned with organizational requirements and industry best practices",
      "Led infrastructure modernization projects, strengthening security protocols and reducing system vulnerabilities by 70%",
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
  // {
  //   name: "Electronic Medical Records (EMR) System - Ongoing (78% Complete)",
  //   description:
  //     "designed for modern healthcare facilities, built with enterprise-grade technologies and following healthcare industry best practices. This comprehensive healthcare management platform provides healthcare professionals with an intuitive, secure, and efficient solution for managing patient care, medical records, and clinical workflows.",
  //   tags: [
  //     {
  //       name: "React + TypeScript + REST API + C# (.NET) + PostgreSQL + AWS",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: emr,
  //   source_code_link: "https://jbc-devportfolio.vercel.app/",
  // },
  // {
  //   name: "Telemedicine Platform - Ongoing (85% Complete)",
  //   description:
  //     "An enterprise-grade Telemedicine Platform that revolutionizes healthcare delivery through cutting-edge technology. Built with React 18, Node.js, C# (.NET), and MongoDB, our platform provides secure, scalable, and intelligent healthcare solutions for patients, doctors, and healthcare administrators.",
  //   tags: [
  //     {
  //       name: "React + TypeScript + REST API + C# (.NET) + MongoDB + AWS",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: telemed,
  //   source_code_link: "https://jbc-devportfolio.vercel.app/",
  // },
  // {
  //   name: "Project Management SaaS Platform - Ongoing (85% Complete)",
  //   description:
  //     "A cutting-edge, enterprise-grade Project Management SaaS Platform that revolutionizes how teams collaborate and deliver results. Featuring intelligent Kanban boards with drag-and-drop task management, real-time collaboration, and visual workflow orchestration, our platform empowers organizations to streamline workflows and achieve ambitious goals through powerful project visualization.",
  //   tags: [
  //     {
  //       name: "React + TypeScript + REST API + Python (FastAPI) + MongoDB + AWS",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: project_management,
  //   source_code_link: "https://jbc-devportfolio.vercel.app/",
  // },
  {
    name: "Telemedicine Platform - Ongoing",
    description:
      "A comprehensive telemedicine platform that bridges the gap between patients and healthcare professionals through secure, accessible digital solutions. This is more than just a telemedicine platform - it's your trusted gateway to quality healthcare. We connect patients with certified healthcare professionals through secure video consultations, making healthcare accessible anytime, anywhere.",
    tags: [
      {
        name: "100% Microservices Architecture",
        color: "pink-text-gradient",
      },
      { name: " ", color: "pink-text-gradient" },
      {
        name: "Frontend",
        color: "pink-text-gradient",
      },
      {
        name: "- React 19 + TypeScript",
        color: "pink-text-gradient",
      },
      {
        name: "- Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "- shadcn/ui + Radix UI",
        color: "pink-text-gradient",
      },
      {
        name: "- React Query + Context API",
        color: "pink-text-gradient",
      },
      {
        name: "- React Hook Form + Zod validation",
        color: "pink-text-gradient",
      },
      {
        name: "- Socket.io for notifications",
        color: "pink-text-gradient",
      },
      {
        name: "- Lucide React icons",
        color: "pink-text-gradient",
      },
      {
        name: " ",
        color: "pink-text-gradient",
      },
      {
        name: "Backend",
        color: "pink-text-gradient",
      },
      {
        name: "- C# (ASP.NET Core 8+ Web API)",
        color: "pink-text-gradient",
      },
      {
        name: "- RESTful API architecture",
        color: "pink-text-gradient",
      },
      {
        name: "- PostgreSQL with Entity Framework Core",
        color: "pink-text-gradient",
      },
      {
        name: "- JWT + ASP.NET Identity",
        color: "pink-text-gradient",
      },
      {
        name: "- OpenAPI/Swagger API documentation",
        color: "pink-text-gradient",
      },
      {
        name: "- FluentValidation",
        color: "pink-text-gradient",
      },
      {
        name: "- AutoMapper",
        color: "pink-text-gradient",
      },
      { 
        name: "- WebRTC for video consultations",
        color: "pink-text-gradient",
      },
      {
        name: "- Stripe for payment processing",
        color: "pink-text-gradient",
      },
      {
        name: "- SignalR for real-time communication",
        color: "pink-text-gradient",
      },
      {
        name: "- HIPAA compliance",
        color: "pink-text-gradient",
      },
      {
        name: " ",
        color: "pink-text-gradient",
      },
      {
        name: "Deployment",
        color: "pink-text-gradient",
      },
      {
        name: "- AWS App Runner",
        color: "pink-text-gradient",
      },
      {
        name: "- GitHub Actions for CI/CD Pipelines",
        color: "pink-text-gradient",
      },
      {
        name: "- Docker for containerization",
        color: "pink-text-gradient",
      },
    ],
    image: telemed,
    source_code_link: "https://jbc-devportfolio.vercel.app",
  },
  {
    name: "Payment Platform - Ongoing",
    description:
      "A full-stack, enterprise-grade digital payment platform built with modern technologies and industry best practices. This production-ready application demonstrates expertise in microservices architecture, progressive web apps, real-time notifications, and scalable fintech solutions.",
    tags: [
      {
        name: "100% Microservices Architecture",
        color: "pink-text-gradient",
      },
      {
        name: "Production Ready - Handles millions of users",
        color: "pink-text-gradient",
      },
      {
        name: "Horizontally Scalable - Each service scales independently",
        color: "pink-text-gradient",
      },
      {
        name: "Cloud Native - Docker and Kubernetes ready",
        color: "pink-text-gradient",
      },
      {
        name: "Enterprise Grade - Security, monitoring, logging included",
        color: "pink-text-gradient",
      },
      {
        name: "PWA with offline capabilities and push notifications",
        color: "pink-text-gradient",
      },
      {
        name: "VAPID compliant - for push notifications",
        color: "pink-text-gradient", 
      },
      {
        name: " ",
        color: "pink-text-gradient",
      },
      {
        name: "Frontend",
        color: "pink-text-gradient",
      },
      {
        name: "- React 18 + TypeScript",
        color: "pink-text-gradient",
      },
      {
        name: "- Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "- Headless UI",
        color: "pink-text-gradient",
      },
      {
        name: "- Lucide React icons",
        color: "pink-text-gradient",
      },
      {
        name: "- TanStack React Query",
        color: "pink-text-gradient",
      },
      {
        name: "- Zustand for lightweight state management",
        color: "pink-text-gradient",
      },
      {
        name: "- React Hook Form",
        color: "pink-text-gradient",
      },
      {
        name: "- Zod for schema validation",
        color: "pink-text-gradient",
      },
      {
        name: "- Axios HTTP client",
        color: "pink-text-gradient",
      },
      {
        name: "- Service Workers for PWA",
        color: "pink-text-gradient",
      },
      {
        name: "- Web Push API for VAPID notifications",
        color: "pink-text-gradient",
      },
      {
        name: "- App Manifest for installable PWA",
        color: "pink-text-gradient",
      },
      {
        name: " ",
        color: "pink-text-gradient",
      },
      {
        name: "Backend",
        color: "pink-text-gradient",
      },
      {
        name: "- Node.js + Fastify with TypeScript",
        color: "pink-text-gradient",
      },
      {
        name: "- MongoDB with Mongoose ODM",
        color: "pink-text-gradient",
      },
      {
        name: "- bcryptjs for secure password hashing",
        color: "pink-text-gradient",
      },
      {
        name: "- JWT for authentication",
        color: "pink-text-gradient",
      },
      {
        name: "- Express rate limiting",
        color: "pink-text-gradient",
      },
      {
        name: "- Helmet.js for security headers",
        color: "pink-text-gradient",
      },
      {
        name: "- CORS configuration",
        color: "pink-text-gradient",
      },
      {
        name: "- 5 independent microservices",
        color: "pink-text-gradient",
      },
      {
        name: "- Winston for logging",
        color: "pink-text-gradient",
      },
      {
        name: "- Morgan for HTTP request logging",
        color: "pink-text-gradient",
      },
      {
        name: "- Web Push for VAPID notifications",
        color: "pink-text-gradient",
      },
      {
        name: "- Redis for caching and session management",
        color: "pink-text-gradient",
      },
      {
        name: " ",
        color: "pink-text-gradient",
      },
      {
        name: "Deployment",
        color: "pink-text-gradient",
      },
      {
        name: "- AWS App Runner",
        color: "pink-text-gradient",
      },
      {
        name: "- GitHub Actions for CI/CD Pipelines",
        color: "pink-text-gradient",
      },
      {
        name: "- Docker for containerization",
        color: "pink-text-gradient",
      }
    ],
    image: payflow,
    source_code_link: "https://3u3db7q2ku.us-west-2.awsapprunner.com/",
  },
  {
    name: "CRM SaaS Platform",
    description:
      "An enterprise-grade CRM SaaS application built with modern technologies and best practices. The platform provides comprehensive customer relationship management features including contact management, sales pipeline, activity tracking, and analytics.",
    tags: [
      {
        name: "100% Monolithic Architecture",
        color: "pink-text-gradient",
      },
      {
        name: " ",
        color: "pink-text-gradient",
      },
      {
        name: "Frontend",
        color: "pink-text-gradient",
      },
      {
        name: "- React 19 + TypeScript",
        color: "pink-text-gradient",
      },
      {
        name: "- Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "- Lucide React icons",
        color: "pink-text-gradient",
      },
      {
        name: "- Zustand for state management",
        color: "pink-text-gradient",
      },
      {
        name: "- React Router for client-side routing",
        color: "pink-text-gradient",
      },
      {
        name: "- Zod for schema validation",
        color: "pink-text-gradient",
      },
      {
        name: "- Vitest",
        color: "pink-text-gradient",
      },
      {
        name: "- React Testing Library",
        color: "pink-text-gradient",
      },
      {
        name: "- Playwright",
        color: "pink-text-gradient",
      },
      {
        name: " ",
        color: "pink-text-gradient",
      },
      {
        name: "Backend",
        color: "pink-text-gradient",
      },
      {
        name: "- Node.js + Fastify with TypeScript",
        color: "pink-text-gradient",
      },
      {
        name: "- TypeScript for type-safe development",
        color: "pink-text-gradient",
      },
      {
        name: "- GraphQL API architecture",
        color: "pink-text-gradient",
      },
      {
        name: "- MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "- JWT for authentication",
        color: "pink-text-gradient",
      },
      {
        name: "- bcryptjs",
        color: "pink-text-gradient",
      },
      {
        name: "- Nodemailer + Resend for email services",
        color: "pink-text-gradient",
      },
      {
        name: "- Jest + Supertest for API testing",
        color: "pink-text-gradient",
      },
      {
        name: "- Socket.io for real-time communication",
        color: "pink-text-gradient",
      },
      {
        name: " ",
        color: "pink-text-gradient",
      },
      {
        name: "Deployment",
        color: "pink-text-gradient",
      },
      {
        name: "- AWS App Runner",
        color: "pink-text-gradient",
      },
      {
        name: "- GitHub Actions for CI/CD Pipelines",
        color: "pink-text-gradient",
      },
      {
        name: "- Docker for containerization",
        color: "pink-text-gradient",
      },
    ],
    image: crm,
    source_code_link: "https://3u3db7q2ku.us-west-2.awsapprunner.com/",
  },
  {
    name: "Event Management & Ticketing Platform",
    description:
      "A comprehensive Event Management and Ticketing Platform that allows organizers to create and manage events while providing attendees with an intuitive way to discover and purchase tickets. A full-stack web application that bridges the gap between event organizers and attendees.",
    tags: [
      {
        name: "Frontend",
        color: "pink-text-gradient",
      },
      {
        name: "- React 18 + TypeScript",
        color: "pink-text-gradient",
      },
      {
        name: "- Tailwind CSS",
        color: "pink-text-gradient",
      },
      { name: "- shadcn/ui + Radix UI", color: "pink-text-gradient" },
      { name: "- Lucide React icons", color: "pink-text-gradient" },
      {
        name: "- React Hook Form + Zod validation",
        color: "pink-text-gradient",
      },
      { name: " ", color: "pink-text-gradient" },
      {
        name: "Backend",
        color: "pink-text-gradient",
      },
      { name: "- Node.js + Fastify with TypeScript", color: "pink-text-gradient" },
      { name: "- RESTful API architecture", color: "pink-text-gradient" },
      {
        name: "- TypeScript for type-safe development",
        color: "pink-text-gradient",
      },
      { name: "- MongoDB", color: "pink-text-gradient" },
      { name: "- Google OAuth", color: "pink-text-gradient" },
      { name: "- bcryptjs", color: "pink-text-gradient" },
      { name: "- JWT Tokens", color: "pink-text-gradient" },
      { name: " ", color: "pink-text-gradient" },
      {
        name: "Deployment",
        color: "pink-text-gradient",
      },
      { name: "- Vercel", color: "pink-text-gradient" },
      {
        name: "- GitHub Actions for CI/CD Pipelines",
        color: "pink-text-gradient",
      },
      { name: "- Docker for containerization", color: "pink-text-gradient" },
    ],
    image: event_management,
    source_code_link: "https://jbc-event-management.vercel.app/",
  },
  {
    name: "Invoice Management Platform",
    description:
      "An enterprise-grade and production-ready Invoice Generator SaaS application that transforms how businesses handle invoice management. Built with Next.js 15 and featuring advanced Redis caching, automated email workflows, comprehensive testing, and enterprise-level security - this platform delivers the performance and reliability that modern businesses demand.",
    tags: [
      {
        name: "React + TypeScript + Node.js + REST API + MongoDB + Vercel",
        color: "pink-text-gradient",
      },
    ],
    image: invoice_generator,
    source_code_link: "https://jbc-invoice-generator.vercel.app/",
  },
  {
    name: "AI-Powered Content Rephrasing & Optimization Tool",
    description:
      "A production-ready, enterprise-grade SaaS application designed for content creators, marketers, business, and writers who want to enhance their written communication. Built with modern web technologies and powered by Google’s Gemini AI, this platform offers a complete suite of content optimization tools in a user-friendly interface.",
    tags: [
      {
        name: "Next.js + TypeScript + Node.js + REST API + MongoDB + Vercel",
        color: "pink-text-gradient",
      },
    ],
    image: rephrasing_tool,
    source_code_link: "https://jbc-rephrasing-tool.vercel.app/",
  },
  {
    name: "Real-Time Chat Platform",
    description:
      "A cutting-edge, enterprise-grade andproduction-ready real-time messaging platform that combines modern web technologies with enterprise-level features. Built with performance, scalability, and user experience at its core, NexusChat delivers seamless communication with advanced privacy controls, comprehensive monitoring, and bulletproof reliability.",
    tags: [
      {
        name: "Next.js + TypeScript + Node.js + REST API + MongoDB + Vercel",
        color: "pink-text-gradient",
      },
    ],
    image: nexuschat,
    source_code_link: "https://jbc-chat-app.vercel.app/",
  },
  {
    name: "Expense Tracker",
    description:
      "A comprehensive web application designed to help users manage their personal finances by tracking expenses, categorizing spending, and visualizing financial data. Built with modern web technologies, this application provides an intuitive interface for users to monitor their spending habits and make informed financial decisions.",
    tags: [
      {
        name: "Next.js + TypeScript + Node.js + REST API + MongoDB + Vercel",
        color: "pink-text-gradient",
      },
    ],
    image: expense_tracker,
    source_code_link: "https://jbc-expense-tracker.vercel.app/",
  },
  {
    name: "Inventory Management System",
    description:
      "Helps store managers efficiently track products, monitor stock levels, and generate reports for streamlined inventory control.",
    tags: [
      {
        name: "C# + ADO.NET + .NET Framework + MS SQL Server",
        color: "pink-text-gradient",
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
        name: "C# + ADO.NET + .NET Framework + MS SQL Server",
        color: "pink-text-gradient",
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
        name: "VB.NET + ADO.NET + .NET Framework + MS SQL Server + SAP Crystal Reports",
        color: "pink-text-gradient",
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
        name: "ASP.NET + ADO.NET + .NET Framework + MS SQL Server",
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
        name: "ASP.NET + ADO.NET + .NET Framework + MS SQL Server",
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
        name: "ASP.NET + ADO.NET + .NET Framework + MS SQL Server",
        color: "pink-text-gradient",
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
        name: "ASP.NET + ADO.NET + .NET Framework + MS SQL Server",
        color: "pink-text-gradient",
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
        name: "ASP.NET + ADO.NET + .NET Framework + MS SQL Server",
        color: "pink-text-gradient",
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
        name: "VB.NET + ADO.NET + .NET Framework + MS SQL Server + SAP Crystal Reports",
        color: "pink-text-gradient",
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
        name: "VB.NET + ADO.NET + .NET Framework + MS SQL Server + SAP Crystal Reports",
        color: "pink-text-gradient",
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
        name: "VB.NET + ADO.NET + .NET Framework + MS SQL Server + SAP Crystal Reports",
        color: "pink-text-gradient",
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
        name: "VB.NET + ADO.NET + .NET Framework + MS SQL Server + SAP Crystal Reports",
        color: "pink-text-gradient",
      },
    ],
    image: ris,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
