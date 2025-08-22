"use client";
import { motion } from "framer-motion";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
//import swiper modules
import { Pagination } from "swiper/modules";
// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// tabs
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    category: "uiux",
    title: "Portfolio",
    description: "A personal portfolio website to showcase my work and skills.",
    image: "/assets/work/portfolio.png",
    link: "",
    github: "",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 3,
    category: "fullstack",
    title: "FiJoKa",
    description: "A personal portfolio website to showcase my work and skills.",
    image: "/assets/work/fijoka.png",
    link: "",
    github: "https://github.com/Karlbjorfors/FiJoKa.git",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "Firebase",
      "RESTful APIs",
      "Express.js",
      "Node.js",
    ],
  },
  {
    id: 2,
    category: "fullstack",
    title: "ScanTheScam",
    description:
      "The 'Scan the Scam' project involved the development of a web application whose primary function is to create a responsive web application –think 'Shazam for food ingredients' – that helps health-conscious consumers quickly scan products using a webcam or mobile camera. The application is designed to help users track nutrition, follow specific diets, and avoid unhealthy additives, sugar, and ultra-processed foods with the assistance of an AI chatbot that helps the user summarize and provide advice.. This core functionality implies a robust technical architecture capable of processing input from scanning, interpreting data, and presenting relevant information to the user. The project had a wide array of potential technologies for both its frontend and backend components, allowing for strategic choices based on project requirements and developer expertise. The development was structured as a prototype phase, planned for 2 weeks. This required a detailed weekly and daily plan.",
    image: "/assets/work/scanthescam.png",
    link: "",
    github: "https://github.com/joipoi/JoKaScan.git",
    tech: [
      "React",
      "C# .NET",
      "SQL Server",
      "Entity Framewok",
      "RESTful APIs",
      "Cloud/AI",
      "Authentication(JWT)",
    ],
  },
  {
    id: 4,
    category: "frontend",
    title: "Cakery Project",
    description:
      "Cakery-projekt: This project involved creating a foundational website for Munamii Cakery, a business specializing in cupcakes and wedding cakes, previously operating primarily through Instagram. The client's main objective was to establish a more formal web presence to better customize how information is presented to customers and to assess consumer response before committing to a more extensive e-commerce solution. The website was required to be fully functional and user-friendly across various devices, including mobile phones and desktop computers.",
    image: "/assets/work/cakery.png",
    link: "https://karlbjorfors.github.io/CakeryMiniProject/",
    github: "https://github.com/Karlbjorfors/CakeryMiniProject.git",
    tech: ["JavaScript", "CSS", "HTML"],
  },
  {
    id: 5,
    category: "backend",
    title: "Pokemon rating database",
    description:
      "During a playthrough of Pokémon FireRed on Gameboy Advance i felt i wanted to start reviewing Pokémons so i made this simple database to store the reviews.",
    image: "/assets/work/pokemonrating.png",
    link: "",
    github: "",
    tech: ["SQL", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 6,
    category: "frontend",
    title: "Portfolio",
    description: "A personal portfolio website to showcase my work and skills.",
    image: "/assets/work/thumb1.png",
    link: "",
    github: "",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 7,
    category: "frontend",
    title: "Cakery",
    description: "A personal portfolio website to showcase my work and skills.",
    image: "/assets/work/thumb5.png",
    link: "",
    github: "",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 8,
    category: "frontend",
    title: "Cakery",
    description: "A personal portfolio website to showcase my work and skills.",
    image: "/assets/work/thumb3.png",
    link: "",
    github: "",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 9,
    category: "frontend",
    title: "Cakery",
    description: "A personal portfolio website to showcase my work and skills.",
    image: "/assets/work/thumb2.png",
    link: "",
    github: "",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
];

const categories = ["fullstack", "frontend", "backend", "uiux"];

const Work = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-screen flex items-center py-24 xl:py-0"
    >
      <div className="container mx-auto w-full h-full flex flex-col justify-center">
        {/* heading */}
        <h2 className="h2 mb-6 xl:mb-12 max-w-[600px]">
          My Latest <span className="text-accent">Work</span>
        </h2>
        {/* tabs */}
        <Tabs
          defaultValue="fullstack"
          className="w-full flex flex-col gap-6 xl:gap-12"
        >
          {/* tabs list */}
          <TabsList className="flex flex-wrap justify-center items-center gap-4 h-full mb-4 xl:mb-0">
            {categories.map((category) => {
              return (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="capitalize border border-white/10 data-[state=active]:bg-accent h-[48px] px-6 rounded-full cursor-pointer"
                >
                  {category === "uiux" ? "UI/UX Design" : category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className="h-[400px] xl:h-[560px]">
            {categories.map((category) => {
              return (
                <TabsContent key={category} value={category}>
                  <Swiper
                    modules={[Pagination]}
                    pagination={{
                      clickable: true,
                      dynamicBullets: true,
                    }}
                    className="h-full [&_.swiper-pagination]:!bottom-5 [&_.swiper-pagination-bullet]:!bg-white/50 [&_.swiper-pagination-bullet]:!opacity-100 [&_.swiper-pagination-bullet-active]:!bg-accent"
                  >
                    {projects
                      .filter((project) => project.category === category)
                      .map((project) => {
                        return (
                          <SwiperSlide key={project.id} className="h-full">
                            <div className="flex flex-col xl:flex-row gap-8 xl:gap-12 h-full">
                              {/* project info */}
                              <div className="w-full max-w-[380px] flex flex-col gap-6 xl:gap-8 xl:pt-6 order-2 xl:order-none max-h-[400px] xl:max-h-[500px] overflow-y-auto scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 pr-2">
                                {/* title */}
                                <h3 className="h3">{project.title}</h3>
                                {/* description */}
                                <p className="text-white/80 leading-relaxed">
                                  {project.description}
                                </p>
                                {/* tech */}
                                <div className="mb-6 max-w-[300px]">
                                  <p className="mb-4">Technologies Used</p>
                                  <ul className="flex flex-wrap gap-4">
                                    {project.tech.map((item, index) => {
                                      return (
                                        <li
                                          key={index}
                                          className="flex items-center gap-4 bg-accent/13 h-[28px] px-[14px] rounded-full"
                                        >
                                          {item}
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </div>
                                {/*  btns */}
                                <div className="flex flex-col sm:flex-row gap-4 items-start mt-4">
                                  {project.link && (
                                    <Link href={project.link}>
                                      <button className="btn btn-sm btn-accent flex gap-2">
                                        <MdArrowOutward className="text-xl" />
                                        <span>Live Project</span>
                                      </button>
                                    </Link>
                                  )}
                                  {project.github && (
                                    <Link href={project.github}>
                                      <button className="btn btn-sm btn-white flex gap-2">
                                        <FaGithub className="text-xl" />
                                        <span>Github Repository</span>
                                      </button>
                                    </Link>
                                  )}
                                </div>
                              </div>
                              {/* project img */}
                              <div className="w-full h-[200px] md:h-[400px] xl:h-[500px] relative bg-pink-50/10 order-1 xl:order-none rounded-lg overflow-hidden">
                                <Image
                                  src={project.image}
                                  alt={project.image}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            </div>
                          </SwiperSlide>
                        );
                      })}
                  </Swiper>
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </motion.section>
  );
};

export default Work;
