import Blood from "../assets/Blood.png";
import SD from "../assets/SD.png";
import Trip from "../assets/tripraja.png";
import CF from "../assets/CF.png";
import Nex from "../assets/NexFlow.jpeg";
import GK from "../assets/GK.png";
import ClinicFlow from "../assets/ClinicFlow.png"
import EM from "../assets/EM.png"
import Statquery from "../assets/Statquery.png"

const projects = [
   {
    title: "StatQuery",
    category: "MoSPI - Data Dissemination",
    image: Statquery,
    tech: ["Frontend - React", "Backend - FastAPI (Python)", "Database - PostgreSQL"],
    description:
      "StatQuery is a full-stack data dissemination platform that enables secure, scalable, and compliant access to India's official MoSPI survey microdata. It provides a REST API gateway, interactive data explorer, SQL query interface, and an AI-powered natural language assistant that converts user questions into SQL queries. The platform includes JWT and Email OTP authentication, role-based API access with Redis-powered rate limiting and credit metering, and an admin dashboard for dataset ingestion, user management, and privacy configuration. It also implements a DPDP Act-compliant privacy engine featuring column masking, hashing, data stripping, and sensitive data suppression while supporting large-scale datasets such as ASI, PLFS, and HCES.",
    features: ["MoSPI", "MicroData", "REST API", "Swagger Docs"],

    },

     {
    title: "Clinic Flow",
    category: "Mobile App",
    image: ClinicFlow,
    tech: ["Frontend - React Native", "Backend - Supabase", "Database - Supabase (PostgreSQL)"],
    description:
    "ClinicFlow is a full-stack cross-platform healthcare application built with React Native that streamlines clinic operations through intelligent appointment management, AI-assisted symptom analysis, and real-time patient queue tracking. The platform features secure role-based authentication for patients and doctors, Groq Llama 3.3-powered specialist recommendations, Supabase Realtime for live appointment and queue updates, multilingual support, and responsive mobile interfaces optimized for accessibility, usability, and a seamless healthcare experience across Android and iOS.",
      features: ["Appoinment Booking App", "Symptom Checker", "Realtime", "Groq"],
  
  },

    {
    title: "NexFlow Engineering",
    category: "Website Hosting",
    image: Nex,
    description:
      "The official business site for NexFlow Engineering, deployed with domain configuration and a reliable public presence for company visibility.Delivered a production-ready website for a small-business client by implementing targeted code changes, managing version control with Git/GitHub, and preparing the application for deployment.Configured domain registration, DNS records, hosting, and production deployment, ensuring the website was publicly accessible and operational",
    tech: ["Hosting", "Domain Setup", "GitHub"],
    features: ["Deployment", "Domain Management", "Accessibility", "Performance"],
    liveLink: "https://www.nexflowengineering.com/",
  },

  {
    title: "Campus Find",
    category: "College Platform",
    image: CF,
    description:
      "A campus-focused lost-and-found system that helps students report, browse, and manage items with admin oversight and a simple reporting workflow.Designed and developed a secure web-based Lost & Found Management System as a final-year academic project to streamline reporting, tracking, and recovery of lost items within the college campus.Implemented college email-based authentication to restrict platform access to authorized students and staff, ensuring secure and authenticated user access. Developed features for reporting lost and found items, uploading item details and images, categorizing listings, and searching by category and location to improve item discoverability.",
    tech: ["Frontend - React", "Backend - Supabase", "Database - Supabase(PostgreSQl)", "Image Processing"],
    features: ["Authentication", "Image Upload", "Admin Dashboard", "Lost & Found", "Analytics Dashboard"],
    liveLink: "https://campusfindsrcas.vercel.app/",
  },

  {
    title: "Elite Movers",
    category: "Moving Services Website",
    image: EM,
    description:
      "Built a fully responsive React website as part of an internship technical assessment.Designed and developed reusable React components and responsive layouts for desktop, tablet, and mobile devices.Optimized application performance and improved overall user experience through component-based architecture.Successfully deployed the project using Vercel for public access",
    tech: ["Frontend - React", "Backend - Supabase", "Database - Supabase(PostgreSQl), Image Processing"],
    features: ["Authentication", "Image Upload", "Admin Dashboard", "Lost & Found", "Analytics Dashboard"],
    liveLink: "https://elite-movers-rho.vercel.app/",
  },

  {
    title: "Blood Bums",
    category: "Gym Website",
    image: Blood,
    liveLink: "https://bloodbums.netlify.app/",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "A bold, conversion-focused gym landing page with a modern hero, membership pricing, class sections, and clear call-to-action flow built for responsive browsing.",
    features: ["Landing Page", "Membership Plans", "Responsive", "Modern UI"],
  },

  {
    title: "Skill Dragon Editing",
    category: "UI Design",
    image: SD,
    liveLink:
      "https://www.figma.com/proto/La7YL2Oi8SODyCVld8iZr4/Untitled",
    tech: ["Figma"],
    description:
      "A sleek editing workspace concept focused on timeline control, preview visibility, and streamlined tool placement for fast creative workflows.",
    features: ["Timeline", "Preview", "Modern Dashboard"],
  },

  {
    title: "My Trip Raja",
    category: "Travel Platform",
    image: Trip,
    liveLink: "https://www.mytripraja.com/",
    tech: ["React", "Travel", "AI"],
    description:
      "An online travel experience platform designed to present destinations, booking flows, and itinerary discovery in a clean, responsive interface.",
    features: ["Tour Packages", "Hotel Booking", "Itineraries", "Multilingual Support"],
  },


  {
    title: "Portfolio",
    category: "Personal Site",
    image: GK,
    description:
      "A personal portfolio website designed to present profile, background, achievements, and services with a simple, polished, responsive layout.",
    tech: ["React", "Portfolio", "Responsive"],
    features: ["Profile", "Achievements", "Services", "Responsive"],
    liveLink: "https://gopalakrishnan-ecru.vercel.app/",
  },
];

export default projects;