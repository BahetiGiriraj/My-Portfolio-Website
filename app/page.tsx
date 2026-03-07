"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showAllCloudProjects, setShowAllCloudProjects] = useState(false);
  const [showAllWebProjects, setShowAllWebProjects] = useState(false);
  const [showAllBlogs, setShowAllBlogs] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "blogs", "services", "skills", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "blogs", label: "Blogs" },
    { id: "services", label: "Services" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen relative">
      {/* Mouse spotlight effect */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      ></div>
      
      <div className="mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* Fixed Sidebar */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                Giriraj Baheti
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                Cloud & Full Stack Developer 
              </h2>
              
              <p className="mt-4 max-w-xs leading-normal">
                Building exceptional digital experiences with modern technologies.
              </p>

              {/* Navigation */}
              <nav className="nav hidden lg:block mt-16" aria-label="In-page jump links">
                <ul className="w-max">
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className={`group flex items-center py-3 ${
                          activeSection === item.id ? "active" : ""
                        }`}
                      >
                        <span
                          className={`nav-indicator mr-4 h-px transition-all ${
                            activeSection === item.id
                              ? "w-16 bg-slate-200"
                              : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200"
                          }`}
                        ></span>
                        <span
                          className={`nav-text text-xs font-bold uppercase tracking-widest ${
                            activeSection === item.id
                              ? "text-slate-200"
                              : "text-slate-500 group-hover:text-slate-200"
                          }`}
                        >
                          {item.label}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Social Links */}
            <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
              <li className="mr-5 text-xs">
                <a
                  className="block hover:text-slate-200"
                  href="https://github.com/BahetiGiriraj?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </li>
              <li className="mr-5 text-xs">
                <a
                  className="block hover:text-slate-200"
                  href="https://www.linkedin.com/in/giriraj-baheti-899ab5211/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
                  </svg>
                </a>
              </li>
              <li className="mr-5 text-xs">
                <a
                  className="block hover:text-slate-200"
                  href="https://www.instagram.com/giri_raj31?igsh=MW1lZWwxOXluN2l6aA%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </li>
            </ul>
          </header>

          {/* Main Content */}
          <main className="pt-24 lg:w-1/2 lg:py-24">
            {/* About Section */}
            <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  About
                </h2>
              </div>
              <div>
                <p className="mb-4">
                  I’m a full-stack developer who enjoys building web applications and working with cloud technologies.
                </p>
                <p className="mb-4">
                  I like creating projects using tools like React, Node.js, AWS, and modern AI tools, and learning how systems work behind the scenes. Most of my work involves building full-stack applications and experimenting with cloud infrastructure.
                </p>
                <p>
                  Outside of coding, I enjoy playing badminton, swimming, bowling, table pool, and spending time with cats.
                </p>
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  Projects
                </h2>
              </div>
              <div>
                {/* Cloud Projects */}
                <div className="mb-12">
                  <h3 className="text-sm font-semibold text-slate-200 mb-6 flex items-center">
                    <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                    Cloud Projects
                  </h3>
                  <ul className="group/list">
                    {[
                      {
                        title: "Hands-on AWS Project: EC2 Setup + RDS Database Connectivity",
                        description: "Set up a secure AWS EC2–RDS (MySQL) architecture, configured VPC security groups, connected EC2 to the database, and performed basic SQL operations like creating tables and inserting data.",
                        link: "https://aws-projects-blogs.notion.site/Hands-on-AWS-Project-EC2-Setup-RDS-Database-Connectivity-2c0d984f3d9480f18e61fb5bf17553b3",
                        isClient: false,
                        skills: ["AWS EC2", "RDS", "IAM", "VPC" ]
                      },
                      {
                        title: "Serverless Database Automation Using DynamoDB & Lambda",
                        description: "Built a serverless automation system using AWS Lambda and DynamoDB, where a Python Lambda function inserts data into a DynamoDB table using the boto3 SDK, with IAM roles configured for secure access.",
                        link: "https://aws-projects-blogs.notion.site/Serverless-Database-Automation-Using-DynamoDB-Lambda-2c2d984f3d94803ea5d1f44fc9b4e4a9",
                        isClient: false,
                        skills: ["DynamoDB", "Lambda", "IAM"]
                      },
                      {
                        title: "S3 Static Website Hosting Project",
                        description: "Deployed a static website using Amazon S3 by configuring bucket policies, enabling static website hosting, and managing public access permissions while troubleshooting issues like the 403 Forbidden error.",
                        link: "https://aws-projects-blogs.notion.site/S3-Static-Website-Hosting-Project-2c0d984f3d9480ecb272f0643c502c03",
                        isClient: false,
                        skills: ["S3", "IAM"]
                      },
                      {
                        title: "Automated Deployment of a Node.js App Using ECS Fargate, ECR, CloudWatch & IAM",
                        description: "Automated deployment of a Node.js containerized application using AWS ECS Fargate, with Docker images stored in Amazon ECR, IAM for secure permissions, and CloudWatch for logging and monitoring.",
                        link: "https://aws-projects-blogs.notion.site/Automated-Deployment-of-a-Node-js-App-Using-ECS-Fargate-ECR-CloudWatch-IAM-2c4d984f3d9480e580bcc4032296c42b",
                        isClient: false,
                        skills: ["ECS", "Fargate", "ECR", "CloudWatch", "IAM"]
                      },
                    
                    ].slice(0, showAllCloudProjects ? undefined : 3).map((project, index) => (
                      <li key={index} className="mb-12">
                        <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                          <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                          <div className="z-10 sm:col-span-6">
                            <h3>
                              <a
                                className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                <span>{project.title}</span>
                              </a>
                              {project.isClient && (
                                <span className="ml-2 inline-flex items-center rounded-full bg-slate-400/10 px-2 py-1 text-xs font-medium text-slate-400">
                                  Client Project
                                </span>
                              )}
                            </h3>
                            <p className="mt-2 text-sm leading-normal">{project.description}</p>
                            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                              {project.skills.map((skill, i) => (
                                <li key={i} className="mr-1.5 mt-2">
                                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                    {skill}
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  {!showAllCloudProjects && (
                    <button
                      onClick={() => setShowAllCloudProjects(true)}
                      className="group mt-4 inline-flex items-center font-medium leading-tight text-slate-200 hover:text-teal-300"
                    >
                      <span className="border-b border-transparent pb-px transition group-hover:border-teal-300">
                        Show More Cloud Projects
                      </span>
                      <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  )}
                </div>

                {/* Web Development Projects */}
                <div>
                  <h3 className="text-sm font-semibold text-slate-200 mb-6 flex items-center">
                    <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Web Development
                  </h3>
                  <ul className="group/list">
                    {[
                      {
                        title: "Wanderlust – Full-Stack Travel Listing App (Airbnb Clone)",
                        description: "Built a full-stack travel listing platform with authentication, image uploads, reviews, and map-based location display.",
                        link: "https://project-1-v8jl.onrender.com",
                        isClient: false,
                        skills: ["Node.js", "Express.js", "MongoDB", "EJS", "Bootstrap", "Passport.js", "Mapbox API", "Cloudinary"]
                      },
                      {
                        title: "Artist Portfolio Website",
                        description: "Built a responsive portfolio website for an artist to showcase artwork and services.",
                        link: "https://shrutilathi.vercel.app",
                        isClient: true,
                        skills: ["React", "Vercel", "TypeScript"]
                      },
                      {
                        title: "Zerodha Clone",
                        description: "Developed a frontend clone of the Zerodha platform, replicating its UI including navigation, hero section, and product pages to practice modern web design and layout structuring.",
                        link: "https://zerodhaclone-1-2q0t.onrender.com",
                        isClient: false,
                        skills: ["React", "Bootstrap", "Render"]
                      }
                    ].slice(0, showAllWebProjects ? undefined : 3).map((project, index) => (
                      <li key={index} className="mb-12">
                        <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                          <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                          <div className="z-10 sm:col-span-6">
                            <h3>
                              <a
                                className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                <span>{project.title}</span>
                              </a>
                              {project.isClient && (
                                <span className="ml-2 inline-flex items-center rounded-full bg-slate-400/10 px-2 py-1 text-xs font-medium text-slate-400">
                                  Client Project
                                </span>
                              )}
                            </h3>
                            <p className="mt-2 text-sm leading-normal">{project.description}</p>
                            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                              {project.skills.map((skill, i) => (
                                <li key={i} className="mr-1.5 mt-2">
                                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                    {skill}
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  {!showAllWebProjects && (
                    <button
                      onClick={() => setShowAllWebProjects(true)}
                      className="group mt-4 inline-flex items-center font-medium leading-tight text-slate-200 hover:text-teal-300"
                    >
                      <span className="border-b border-transparent pb-px transition group-hover:border-teal-300">
                        Show More Web Projects
                      </span>
                      <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </section>

            {/* Blogs Section */}
            <section id="blogs" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  Blogs
                </h2>
              </div>
              <div>
                <ul className="group/list">
                  {[
                    {
                      title: "Application Architecture Explained: Monolith vs Microservices vs Serverless",
                      date: "Dec 2025",
                      description: "When we build applications, one of the most important decisions we make is architecture.",
                      link: "https://medium.com/@bahetigiriraj31/application-architecture-explained-monolith-vs-microservices-vs-serverless-8ea97ac1248f",
                      readTime: "3 min read"
                    },
                    {
                      title: "Docker Made Easy: The Only Guide You Need to Understand Containers",
                      date: "Dec 2025",
                      description: "If you’re starting your DevOps or cloud journey, you’ve probably heard everyone say:",
                      link: "https://medium.com/@bahetigiriraj31/docker-made-easy-the-only-guide-you-need-to-understand-containers-dd069b99105e",
                      readTime: "3 min read"
                    },
                    
                    {
                      title: "Kubernetes (K8S) — A Simple Guide for Beginners",
                      date: "Dec 2025",
                      description: "Kubernetes (K8s) is one of the most popular tools used today to run and manage containerized applications.",
                      link: "https://medium.com/@bahetigiriraj31/kubernetes-k8s-a-simple-guide-for-beginners-af0783e9960b",
                      readTime: "2 min read"
                    }
                  ].slice(0, showAllBlogs ? undefined : 3).map((blog, index) => (
                    <li key={index} className="mb-12">
                      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                          {blog.date}
                        </header>
                        <div className="z-10 sm:col-span-6">
                          <h3>
                            <a
                              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                              href={blog.link}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>{blog.title}</span>
                              <svg className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                              </svg>
                            </a>
                          </h3>
                          <p className="mt-2 text-sm leading-normal">{blog.description}</p>
                          <p className="mt-2 text-xs text-slate-500">{blog.readTime}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                {!showAllBlogs && (
                  <button
                    onClick={() => setShowAllBlogs(true)}
                    className="group mt-4 inline-flex items-center font-medium leading-tight text-slate-200 hover:text-teal-300"
                  >
                    <span className="border-b border-transparent pb-px transition group-hover:border-teal-300">
                      Show More Blogs
                    </span>
                    <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                )}
              </div>
            </section>

            {/* Services Section */}
            <section id="services" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  Services
                </h2>
              </div>
              <div>
                <ul className="group/list">
                  {[
                    {
                      title: "Web Development",
                      description: "Custom web applications built with modern frameworks and best practices. From landing pages to complex web platforms."
                    },
                    {
                      title: "Cloud Solutions",
                      description: "Cloud infrastructure setup, deployment automation, and scalable architecture design for modern applications."
                    }
                  ].map((service, index) => (
                    <li key={index} className="mb-12">
                      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <div className="z-10 sm:col-span-6">
                          <h3 className="font-medium leading-snug text-slate-200">
                            <span className="inline-flex items-baseline font-medium leading-tight text-slate-200 group/link text-base">
                              {service.title}
                            </span>
                          </h3>
                          <p className="mt-2 text-sm leading-normal">{service.description}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  Skills
                </h2>
              </div>
              <div>
                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-slate-200 mb-3">Frontend</h3>
                  <ul className="flex flex-wrap">
                    {["React", "Next.js", "TypeScript", "Tailwind CSS", "Bootstrap", "HTML/CSS"].map((skill, i) => (
                      <li key={i} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          {skill}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-slate-200 mb-3">Backend</h3>
                  <ul className="flex flex-wrap">
                    {["Node.js", "Python", "SQL", "MongoDB", "Express"].map((skill, i) => (
                      <li key={i} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          {skill}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-slate-200 mb-3">Tools & Others</h3>
                  <ul className="flex flex-wrap">
                    {["Git", "Docker", "AWS", "CI/CD", "Kiro", "Figma", "Vercel", "Render", "Cloudinary"].map((skill, i) => (
                      <li key={i} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          {skill}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  Contact
                </h2>
              </div>
              <div>
                <p className="mb-4">
                  I'm currently available for freelance work and new opportunities. Whether you have a project in mind or just want to say hi, feel free to reach out!
                </p>
                <div className="mt-8 space-y-4">
                  <div>
                    <a
                      href="mailto:your.email@example.com"
                      className="inline-flex items-center font-medium leading-tight text-slate-200 group"
                    >
                      <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                        bahetigiriraj31@gmail.com
                      </span>
                    </a>
                  </div>
                  <div>
                    <a
                      href="tel:+1234567890"
                      className="inline-flex items-center font-medium leading-tight text-slate-200 group"
                    >
                      <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                        +91 9301728128
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
              <p>
                Designed and built with passion. Powered by tea and curiosity.
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
