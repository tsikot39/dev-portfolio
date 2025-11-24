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
  digital_signature,
  appointment_pro,
  diagnostic_code,
  prescription_refill,
  medical_note,
  medical_chatbot,
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
  // {
  //   id: "contact",
  //   title: "Contact",
  // },
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
    title: "Software Developer",
    company_name: "Philippine Children's Medical Center",
    date: "November 2006 - July 2023",
    icon: starbucks,
    iconBg: "#383E56",
    points: [
      "Architected and delivered enterprise-grade hospital information systems, reducing patient record processing time by 40% and improving operational efficiency across 15+ departments",
      "Led cross-functional development teams of 5+ engineers, driving the successful implementation of mission-critical web and desktop applications",
      "Spearheaded digital transformation initiatives, training 500+ healthcare professionals and achieving 60% improvement in system adoption rates",
      "Designed scalable database architectures and implemented robust security protocols for handling sensitive patient data in compliance with healthcare regulations",
    ],
  },
  {
    title: "System Administrator",
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
  //   name: "Medical Chatbot",
  //   description:
  //     "A modern medical chatbot providing instant AI-powered health information and guidance through an intuitive chat interface. Built for accessibility and ease of use with anonymous access.",
  //   tags: [
  //     {
  //       name: " ",
  //     },
  //     {
  //       name: "React 19 + TypeScript",
  //     },
  //     {
  //       name: "RESTful API",
  //     },
  //     {
  //       name: "Fastify + Node.js",
  //     },
  //     {
  //       name: "Google Gemini 2.5 Flash (development)",
  //     },
  //     {
  //       name: "Google Med-PaLM 2 (production)",
  //     },
  //     {
  //       name: "Docker",
  //     },
  //   ],
  //   image: medical_chatbot,
  //   source_code_link: "https://jbc-devportfolio.vercel.app",
  // },
  // {
  //   name: "Medical Note Transcriber",
  //   description:
  //     "An AI-powered healthcare documentation web application designed to streamline the process of converting medical audio recordings into accurate, structured text documentation. This application leverages OpenAI's Whisper technology to provide efficient and accurate medical record transcription for healthcare professionals.",
  //   tags: [
  //     {
  //       name: " ",
  //     },
  //     {
  //       name: "React 18 + TypeScript",
  //     },
  //     {
  //       name: "RESTful API",
  //     },
  //     {
  //       name: "Fastify + Node.js",
  //     },
  //     {
  //       name: "PostgreSQL",
  //     },
  //     {
  //       name: "OpenAI Whisper (production)",
  //     },
  //     {
  //       name: "Docker",
  //     },
  //   ],
  //   image: medical_note,
  //   source_code_link: "https://jbc-devportfolio.vercel.app",
  // },
  // {
  //   name: "Diagnostic Code Assistant",
  //   description:
  //     "An AI-powered diagnostic code assistant built with modern technologies to help healthcare professionals find, validate, and manage diagnostic codes efficiently",
  //   tags: [
  //     {
  //       name: " ",
  //     },
  //     {
  //     name: "React 19 + TypeScript",
  //     },
  //     {
  //       name: "RESTful API",
  //     },
  //     {
  //       name: "Fastify + Node.js",
  //     },
  //     {
  //       name: "Google Gemini 2.5 Flash (development)",
  //     },
  //     {
  //       name: "Google Med-PaLM 2 (production)",
  //     },
  //     {
  //       name: "Docker",
  //     },
  //   ],
  //   image: diagnostic_code,
  //   source_code_link: "https://jbc-devportfolio.vercel.app",
  // },
  // {
  //   name: "Prescription Refill Predictor",
  //   description:
  //     "A web application that leverages artificial intelligence to predict prescription refill patterns, helping pharmacies optimize inventory management and improve patient care. This AI-powered prescription refill intelligence combines modern web technologies with machine learning to deliver actionable insights for pharmaceutical operations.",
  //   tags: [
  //     {
  //       name: " ",
  //     },
  //     {
  //     name: "React + TypeScript",
  //     },
  //     {
  //       name: "RESTful API",
  //     },
  //     {
  //       name: "FastAPI + Python",
  //     },
  //     {
  //       name: "PostgreSQL",
  //     },
  //     {
  //       name: "Docker",
  //     },
  //   ],
  //   image: prescription_refill,
  //   source_code_link: "https://jbc-devportfolio.vercel.app",
  // },
  // {
  //   name: "Appointment Scheduler",
  //   description:
  //     "An intelligent appointment scheduler with AI-powered optimization, designed for service-based businesses of all sizes. A modern, full-stack appointment scheduling solution that streamlines the booking process for businesses and their clients. Built with cutting-edge technology, it offers real-time scheduling, intelligent optimization, and seamless user experiences across all devices.",
  //   tags: [
  //     {
  //       name: " ",
  //     },
  //     {
  //     name: "React + TypeScript",
  //     },
  //     {
  //       name: "RESTful API",
  //     },
  //     {
  //       name: "FastAPI + Python",
  //     },
  //     {
  //       name: "PostgreSQL",
  //     },
  //     {
  //       name: "Docker",
  //     },
  //   ],
  //   image: appointment_pro,
  //   source_code_link: "https://jbc-devportfolio.vercel.app",
  // },
  {
    name: "Customer Relationship Management (CRM)",
    description:
      "An enterprise-grade CRM SaaS application built with modern technologies and best practices. The platform provides comprehensive customer relationship management features including contact management, sales pipeline, activity tracking, and analytics.",
    tags: [
      {
        name: " ",
      },
      {
        name: "Vite + React + TypeScript",
      },
      {
        name: "Tailwind CSS + Shadcn UI",
      },
      {
        name: "Node.js + Fastify + TypeScript",
      },
      {
        name: "REST API",
      },
      {
        name: "MongoDB",
      },
      {
        name: "JWT",
      },
      {
        name: "OpenAPI/Swagger",
      },
            {
        name: "Socket.IO",
      },
      {
        name: "Resend",
      },
      {
        name: "Stripe",
      },
      {
        name: "Redis",
      },
      {
        name: "Docker",
      },
    ],
    image: crm,
    source_code_link: "https://3u3db7q2ku.us-west-2.awsapprunner.com/",
  },
  {
    name: "Event and Ticketing Management",
    description:
      "A comprehensive Event Management and Ticketing Platform that allows organizers to create and manage events while providing attendees with an intuitive way to discover and purchase tickets. A full-stack web application that bridges the gap between event organizers and attendees.",
    tags: [
      {
        name: " ",
      },
      {
        name: "Next.js + App Router + TypeScript",
      },
      {
        name: "Tailwind CSS + Shadcn UI",
      },
      { 
        name: "Node.js + TypeScript",
      },
      { 
        name: "REST API",
      },
      { 
        name: "MongoDB",
      },
      { 
        name: "Google OAuth",
      },
      { 
        name: "NextAuth.js",
      },
      {
        name: "JWT",
      },
      {
        name: "OpenAPI/Swagger",
      },
      {
        name: "Socket.IO",
      },
      {
        name: "Resend",
      },
      {
        name: "Stripe",
      },
      {
        name: "Unsplash API",
      },
      {
        name: "Next.js SSR",
      },
      { 
        name: "Docker",
      },
    ],
    image: event_management,
    source_code_link: "https://jbc-event-management.vercel.app/",
  },
  {
    name: "Invoice Generator",
    description:
      "An enterprise-grade and production-ready Invoice Generator SaaS application that transforms how businesses handle invoice management. Built with Next.js 15 and featuring advanced Redis caching, automated email workflows, comprehensive testing, and enterprise-level security - this platform delivers the performance and reliability that modern businesses demand.",
    tags: [
      {
        name: " ",
      },
      {
        name: "Next.js + App Router + TypeScript",
      },
      {
        name: "Tailwind CSS + Shadcn UI",
      },
      {
        name: "Node.js + TypeScript",
      },
            {
        name: "REST API",
      },
      {
        name: "MongoDB",
      },
      {
        name: "Google OAuth",
      },
      {
        name: "NextAuth.js",
      },
      {
        name: "JWT",
      },
      {
        name: "OpenAPI/Swagger",
      },
      {
        name: "Resend",
      },
      {
        name: "Redis",
      },
      {
        name: "Docker",
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
        name: " ",
      },
      {
        name: "Next.js + App Router + TypeScript",
      },
      {
        name: "Tailwind CSS + Shadcn UI",
      },
      {
        name: "Node.js + TypeScript",
      },
      {
        name: "REST API",
      },
      {
        name: "MongoDB",
      },
      {
        name: "Google OAuth",
      },
      {
        name: "NextAuth.js",
      },
      {
        name: "JWT",
      },
      {
        name: "OpenAPI/Swagger",
      },
      {
        name: "Resend",
      },
      {
        name: "Stripe",
      },
      {
        name: "Google Gemini API",
      },
      {
        name: "Next.js SSR & ISR",
      },
      {
        name: "Docker",
      },
    ],
    image: rephrasing_tool,
    source_code_link: "https://jbc-rephrasing-tool.vercel.app/",
  },
  {
    name: "Real-Time Chat",
    description:
      "A cutting-edge, enterprise-grade andproduction-ready real-time messaging platform that combines modern web technologies with enterprise-level features. Built with performance, scalability, and user experience at its core, NexusChat delivers seamless communication with advanced privacy controls, comprehensive monitoring, and bulletproof reliability.",
    tags: [
      {
        name: " ",
      },
      {
        name: "Next.js + App Router + TypeScript",
      },
      {
        name: "Tailwind CSS + Shadcn UI",
      },
      {
        name: "Node.js + TypeScript",
      },
      {
        name: "REST API",
      },
      {
        name: "MongoDB",
      },
      {
        name: "Google OAuth",
      },
      {
        name: "NextAuth.js",
      },
      {
        name: "JWT",
      },
      {
        name: "OpenAPI/Swagger",
      },
      {
        name: "Socket.IO",
      },
      {
        name: "Next.js CSR",
      },
      {
        name: "Docker",
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
        name: " ",
      },
      {
        name: "Next.js + App Router + TypeScript",
      },
      {
        name: "Tailwind CSS + Shadcn UI",
      },
      {
        name: "Recharts",
      },
      {
        name: "NextAuth.js",
      },
      {
        name: "Node.js",
      },
      {
        name: "REST API",
      },
      {
        name: "MongoDB",
      },
      {
        name: "Docker",
      }      ,
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
        name: " ",
      },
      {
        name: "C#",
      },
      {
        name: ".NET Framework",
      },
      {
        name: "ADO.NET",
      },
      {
        name: "MS SQL",
      },
      {
        name: "Windows Forms",
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
        name: " ",
      },
      {
        name: "C#",
      },
      {
        name: ".NET Framework",
      },
      {
        name: "ADO.NET",
      },
      {
        name: "MS SQL",
      },
      {
        name: "Windows Forms",
      }
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
        name: " ",
      },
      {
        name: "VB.NET",
      },
      {
        name: ".NET Framework",
      },
      {
        name: "ADO.NET",
      },
      {
        name: "MS SQL",
      },
      {
        name: "SAP Crystal Reports",
      },
      {
        name: "Windows Forms",
      }
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
        name: " ",
      },
      {
        name: "ASP.NET",
      },
      {
        name: ".NET Framework",
      },
      {
        name: "ADO.NET",
      },
      {
        name: "MS SQL",
      },
      {
        name: "IIS (Internet Information Services)",
      }
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
        name: " ",
      },
      {
        name: "ASP.NET",
      },
      {
        name: ".NET Framework",
      },
      {
        name: "ADO.NET",
      },
      {
        name: "MS SQL",
      },
      {
        name: "IIS (Internet Information Services)",
      }
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
        name: " ",
      },
      {
        name: "ASP.NET",
      },
      {
        name: ".NET Framework",
      },
      {
        name: "ADO.NET",
      },
      {
        name: "MS SQL",
      },
      {
        name: "IIS (Internet Information Services)",
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
        name: " ",
      },
      {
        name: "ASP.NET",
      },
      {
        name: ".NET Framework",
      },
      {
        name: "ADO.NET",
      },
      {
        name: "MS SQL",
      },
      {
        name: "IIS (Internet Information Services)",
      }
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
        name: " ",
      },
      {
        name: "ASP.NET",
      },
      {
        name: ".NET Framework",
      },
      {
        name: "ADO.NET",
      },
      {
        name: "MS SQL",
      },
      {
        name: "IIS (Internet Information Services)",
      }
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
        name: " ",
      },
      {
        name: "VB.NET",
      },
      {
        name: "ADO.NET",
      },
      {
        name: ".NET Framework",
      },
      {
        name: "MS SQL",
      },
      {
        name: "SAP Crystal Reports",
      },
      {
        name: "Windows Forms",
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
        name: " ",
      },
      {
        name: "VB.NET",
      },
      {
        name: "ADO.NET",
      },
      {
        name: ".NET Framework",
      },
      {
        name: "MS SQL",
      },
      {
        name: "SAP Crystal Reports",
      },
      {
        name: "Windows Forms",
      }
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
        name: " ",
      },
      {
        name: "VB.NET",
      },
      {
        name: "ADO.NET",
      },
      {
        name: ".NET Framework",
      },
      {
        name: "MS SQL",
      },
      {
        name: "SAP Crystal Reports",
      },
      {
        name: "Windows Forms",
      }
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
        name: " ",
      },
      {
        name: "VB.NET",
      },
      {
        name: "ADO.NET",
      },
      {
        name: ".NET Framework",
      },
      {
        name: "MS SQL",
      },
      {
        name: "SAP Crystal Reports",
      },
      {
        name: "Windows Forms",
      }
    ],
    image: ris,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
