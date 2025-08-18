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
      "Led cross-functional development teams of 5+ engineers, driving the successful implementation of mission-critical web and desktop applications using C#, .NET, ASP.NET and SQL Server",
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
  {
    name: "B2B E-commerce Marketplace - Ongoing",
    description:
      "A sophisticated, enterprise-grade B2B e-commerce platform that revolutionizes wholesale trading. A full-stack marketplace application empowers businesses to connect, trade, and scale efficiently through a modern, intuitive platform. Built with cutting-edge technologies and microservices architecture, it delivers a seamless experience for vendors, buyers, and administrators while handling complex B2B workflows with enterprise-level reliability.",
    tags: [
      {
        name: "ReactJava",
        color: "pink-text-gradient",
      },
      {
        name: "MultiTenantSaaSArchitecture",
        color: "pink-text-gradient",
      },
    ],
    image: b2b,
    source_code_link: "https://jbc-devportfolio.vercel.app/",
  },
  {
    name: "Project Management SaaS Platform - Ongoing",
    description:
      "A cutting-edge, enterprise-grade React+Python-based Project Management SaaS Platform that revolutionizes how teams collaborate and deliver results. Featuring intelligent Kanban boards with drag-and-drop task management, real-time collaboration, and visual workflow orchestration, our platform empowers organizations to streamline workflows and achieve ambitious goals through powerful project visualization.",
    tags: [
      {
        name: "ReactPython",
        color: "pink-text-gradient",
      },
      {
        name: "MultiTenantSaaSArchitecture",
        color: "pink-text-gradient",
      },
      {
        name: "CloudfareEmailService",
        color: "pink-text-gradient",
      },
    ],
    image: project_management,
    source_code_link: "https://jbc-devportfolio.vercel.app/",
  },
  {
    name: "CRM SaaS Platform",
    description:
      "An enterprise-grade React+Node.js-based CRM SaaS application built with modern technologies and best practices. The platform provides comprehensive customer relationship management features including contact management, sales pipeline, activity tracking, and analytics.",
    tags: [
      {
        name: "ReactNodejs",
        color: "pink-text-gradient",
      },
      {
        name: "MultiTenantSaaSArchitecture",
        color: "pink-text-gradient",
      },
      {
        name: "CloudfareEmailService",
        color: "pink-text-gradient",
      },
      {
        name: "AWSCloudDeployment",
        color: "pink-text-gradient",
      },
    ],
    image: crm,
    source_code_link: "https://3u3db7q2ku.us-west-2.awsapprunner.com/",
  },
  {
    name: "Event Management & Ticketing Platform",
    description:
      "A comprehensive Next.js-based event management and ticketing platform that allows organizers to create and manage events while providing attendees with an intuitive way to discover and purchase tickets. A full-stack web application that bridges the gap between event organizers and attendees.",
    tags: [
      {
        name: "RealTimeAttendeeTracking",
        color: "blue-text-gradient",
      },
      {
        name: "DualAuthenticationSystem",
        color: "green-text-gradient",
      },
      {
        name: "PaymentSimulationEngine",
        color: "pink-text-gradient",
      },
      {
        name: "IntelligentEventDiscovery",
        color: "blue-text-gradient",
      },
      {
        name: "ComprehensiveRoleBasedDashboards",
        color: "green-text-gradient",
      },
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
        name: "EnterpriseGradeAuthentication",
        color: "blue-text-gradient",
      },
      {
        name: "HighPerformanceRedisCache",
        color: "green-text-gradient",
      },
      {
        name: "SmartEmailAutomation",
        color: "pink-text-gradient",
      },
      {
        name: "ProfessionalPDFGeneration",
        color: "blue-text-gradient",
      },
      {
        name: "ProductionReadyMonitoring",
        color: "green-text-gradient",
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
        name: "AIContentOptimization",
        color: "blue-text-gradient",
      },
      {
        name: "MultiTenantSaaSArchitecture",
        color: "green-text-gradient",
      },
      {
        name: "CreditBasedSubscription",
        color: "pink-text-gradient",
      },
      {
        name: "ProfessionalEmailSystem",
        color: "blue-text-gradient",
      },
      {
        name: "ProductionReadyArchitecture",
        color: "green-text-gradient",
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
        name: "PrivacyFirstMessaging",
        color: "blue-text-gradient",
      },
      {
        name: "InfiniteScrollPerformance",
        color: "green-text-gradient",
      },
      {
        name: "ProductionReadyInfrastructure",
        color: "pink-text-gradient",
      },
      {
        name: "RealTimeEverywhere",
        color: "blue-text-gradient",
      },
      {
        name: "DeveloperFirstArchitecture",
        color: "green-text-gradient",
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
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
      {
        name: "shadcn",
        color: "blue-text-gradient",
      },
      {
        name: "recharts",
        color: "green-text-gradient",
      },
      {
        name: "next-themes",
        color: "pink-text-gradient",
      },
      {
        name: "lucide react",
        color: "blue-text-gradient",
      },
      {
        name: "next.js api routes",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "mongoose",
        color: "blue-text-gradient",
      },
      {
        name: "nextauth.js",
        color: "green-text-gradient",
      },
      {
        name: "bcryptjs",
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
    ],
    image: expense_tracker,
    source_code_link: "https://jbc-expense-tracker.vercel.app/",
  },
  {
    name: "Storage Management Solution",
    description:
      "A modern, user-friendly cloud storage management application designed to help users efficiently organize, store, and manage their digital files. The application provides a seamless experience for uploading, categorizing, and accessing files from anywhere, with a focus on intuitive user interface and robust security features.",
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
        name: "tailwind css",
        color: "pink-text-gradient",
      },
      {
        name: "shadcn",
        color: "blue-text-gradient",
      },
      {
        name: "recharts",
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
        name: "react dropzone",
        color: "green-text-gradient",
      },
      {
        name: "appwrite",
        color: "pink-text-gradient",
      },
      {
        name: "next.js server actions",
        color: "blue-text-gradient",
      },
    ],
    image: storeit,
    source_code_link: "https://jbc-store-it.vercel.app/",
  },
  {
    name: "Patient Management System",
    description:
      "A modern, web-based patient management system designed to streamline healthcare appointment scheduling and management. The application provides separate interfaces for patients and administrators, enabling efficient healthcare service delivery and management.",
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
        name: "tailwind css",
        color: "pink-text-gradient",
      },
      {
        name: "shadcn",
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
      {
        name: "tanstack table",
        color: "blue-text-gradient",
      },
      {
        name: "next themes",
        color: "green-text-gradient",
      },
      {
        name: "appwrite",
        color: "pink-text-gradient",
      },
      {
        name: "next.js server actions",
        color: "blue-text-gradient",
      },
      {
        name: "twilio",
        color: "green-text-gradient",
      },
    ],
    image: carepulse,
    source_code_link: "https://jbc-carepulse.vercel.app/",
  },
  {
    name: "Realtime Collaboration Management App",
    description:
      "A modern, real-time collaborative document editing platform that allows multiple users to work on the same document simultaneously. It provides a rich text editing experience with role-based access control, threaded comments, and a clean, intuitive user interface.",
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
        name: "clerk",
        color: "pink-text-gradient",
      },
      {
        name: "liveblocks",
        color: "blue-text-gradient",
      },
      {
        name: "lexical",
        color: "green-text-gradient",
      },
      {
        name: "shadcn",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind css",
        color: "blue-text-gradient",
      },
      {
        name: "lucide react",
        color: "green-text-gradient",
      },
    ],
    image: livedocs,
    source_code_link: "https://jbc-livedocs.vercel.app/",
  },
  {
    name: "Video Conferencing App",
    description:
      "A modern video conferencing application inspired by Zoom. It provides a seamless platform for users to create, join, and manage virtual meetings. The application offers a user-friendly interface with features for scheduling meetings, recording sessions, and managing personal meeting rooms.",
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
        name: "tailwind css",
        color: "pink-text-gradient",
      },
      {
        name: "shadcn",
        color: "blue-text-gradient",
      },
      {
        name: "next.js api routes",
        color: "green-text-gradient",
      },
      {
        name: "stream.io",
        color: "pink-text-gradient",
      },
      {
        name: "clerk",
        color: "blue-text-gradient",
      },
    ],
    image: xoom,
    source_code_link: "https://jbc-xoom.vercel.app/",
  },
  {
    name: "AI-Powered Image Processor App",
    description:
      "A powerful AI-powered SaaS platform that offers advanced image processing capabilities. The application allows users to transform and enhance images using various AI techniques, including restoration, recoloring, object removal, generative filling, and background removal. With a user-friendly interface and a credit-based system, Imaginify provides both free and premium access to its powerful image transformation tools.",
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
        name: "tailwind css",
        color: "pink-text-gradient",
      },
      {
        name: "shadcn",
        color: "blue-text-gradient",
      },
      {
        name: "next.js server actions",
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
        name: "webhooks",
        color: "blue-text-gradient",
      },
    ],
    image: imaginify,
    source_code_link: "https://jbc-imaginify.vercel.app/",
  },
  {
    name: "Pitch Startup Platform",
    description:
      "A platform designed for entrepreneurs to showcase their startups, connect with other entrepreneurs, and participate in virtual pitch competitions. The application serves as a directory for startups, allowing users to submit their ideas, vote on pitches, and gain visibility in the entrepreneurial community.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
      {
        name: "shadcn",
        color: "blue-text-gradient",
      },
      {
        name: "markdown support",
        color: "green-text-gradient",
      },
      {
        name: "sanity cms",
        color: "pink-text-gradient",
      },
      {
        name: "nextauth.js",
        color: "blue-text-gradient",
      },
      {
        name: "next.js api routes",
        color: "green-text-gradient",
      },
    ],
    image: ycdirectory,
    source_code_link: "https://jbc-ycdirectory.vercel.app/",
  },
  {
    name: "Movies Application",
    description:
      "A modern web application designed to help users discover and explore movies without the hassle. The app provides a clean, intuitive interface for searching through thousands of movies, viewing trending titles, and browsing popular films. It integrates with The Movie Database (TMDB) API for comprehensive movie data and uses Appwrite as a backend service to track and display trending searches.",
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
    name: "Pet Care Platform - API & Dashboard",
    description:
      "A comprehensive full-stack web application that serves a dual purpose: it's both a functional pet care marketplace and an interactive API testing dashboard. This platform connects pet owners with professional pet sitters and care providers while providing developers and stakeholders with a complete view of the underlying API operations.",
    tags: [
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "express.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "multer",
        color: "blue-text-gradient",
      },
      {
        name: "joi",
        color: "green-text-gradient",
      },
      {
        name: "jest",
        color: "pink-text-gradient",
      },
      {
        name: "swagger",
        color: "blue-text-gradient",
      },
      {
        name: "winston",
        color: "green-text-gradient",
      },
      {
        name: "morgan",
        color: "pink-text-gradient",
      },
      {
        name: "html5",
        color: "blue-text-gradient",
      },
      {
        name: "css3",
        color: "green-text-gradient",
      },
      {
        name: "vanilla javascript",
        color: "pink-text-gradient",
      },
      {
        name: "rest api",
        color: "blue-text-gradient",
      },
    ],
    image: pet_care,
    source_code_link: "https://github.com/tsikot39/pet-care-platform",
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
    name: "Discord Weather Bot",
    description:
      "A feature-rich Discord bot that provides weather forecasts and astronomical information for any location worldwide. This Discord bot integrates with the WeatherAPI.com service to deliver real-time weather forecasts and astronomical data directly to my Discord server. The bot supports slash commands for easy interaction and provides beautifully formatted responses with embed messages.",
    tags: [
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "discord.js",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "axios",
        color: "blue-text-gradient",
      },
      {
        name: "dotenv",
        color: "green-text-gradient",
      },
      {
        name: "nodemon",
        color: "pink-text-gradient",
      },
      {
        name: "weatherapi.com api",
        color: "blue-text-gradient",
      },
      {
        name: "discord api",
        color: "green-text-gradient",
      },
    ],
    image: discord_bot,
    source_code_link: "https://github.com/tsikot39/discord-bot",
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
    name: "Recipe Web Application",
    description:
      "Forkify is a sophisticated recipe search and management application that allows users to search for recipes, view detailed instructions, adjust serving sizes, bookmark favorites, and even add their own recipes. The application provides an intuitive and responsive user interface for discovering and managing cooking recipes.",
    tags: [
      {
        name: "html5",
        color: "blue-text-gradient",
      },
      {
        name: "css3",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "parcel",
        color: "blue-text-gradient",
      },
      {
        name: "forkify api",
        color: "green-text-gradient",
      },
      {
        name: "local storage api",
        color: "pink-text-gradient",
      },
      {
        name: "fracty",
        color: "blue-text-gradient",
      },
    ],
    image: forkify,
    source_code_link: "https://jbc-forkify.vercel.app/",
  },
  {
    name: "Conceptual AI-powered Meal Subscriptions Platform",
    description:
      "Omnifood is a modern, responsive website for a fictional AI-powered food subscription service that delivers healthy meals to customers. The service aims to solve the problem of poor diet due to busy lifestyles by using AI to create personalized meal plans and delivering freshly cooked meals to customers' doors.",
    tags: [
      {
        name: "html5",
        color: "blue-text-gradient",
      },
      {
        name: "css3",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: omnifood,
    source_code_link: "https://jbc-omnifood.vercel.app/",
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
