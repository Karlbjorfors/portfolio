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
    image: "/assets/work/thumb1.png",
    link: "",
    github: "",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 2,
    category: "fullstack",
    title: "FiJoKa",
    description: "A personal portfolio website to showcase my work and skills.",
    image: "/assets/work/thumb2.png",
    link: "",
    github: "",
    tech: ["Next.js", "Tailwind CSS", "Firebase"],
  },
  {
    id: 3,
    category: "fullstack",
    title: "ScanTheScam",
    description: "A personal portfolio website to showcase my work and skills.",
    image: "/assets/work/thumb3.png",
    link: "",
    github: "",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 4,
    category: "frontend",
    title: "Cakery Mini Project",
    description:
      "Modern Responsive Website featuring dynamic header/footer, intuitive dropdown navigation, and dedicated product sections for Cupcakes and Wedding Cakes. Includes a contact form and social media integration for seamless user engagement across devices.",
    image: "/assets/work/thumb41.png",
    link: "https://karlbjorfors.github.io/CakeryMiniProject/",
    github: "https://github.com/Karlbjorfors/CakeryMiniProject.git",
    tech: ["JavaScript", "CSS", "HTML"],
  },
  {
    id: 5,
    category: "backend",
    title: "Pokemon rating database",
    description: "A personal portfolio website to showcase my work and skills.",
    image: "/assets/work/thumb5.png",
    link: "",
    github: "",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
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

const categories = ["frontend", "backend", "fullstack", "uiux"];

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
          defaultValue="frontend"
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
          <div className="h-[400px] scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible">
            {categories.map((category) => {
              return (
                <TabsContent key={category} value={category}>
                  <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    className="h-max xl:h-[460px]"
                  >
                    {projects
                      .filter((project) => project.category === category)
                      .map((project) => {
                        return (
                          <SwiperSlide key={project.id} className="h-full">
                            <div className="flex flex-col xl:flex-row gap-8 xl:gap-12">
                              {/* project info */}
                              <div className="w-full max-w-[380px] flex flex-col gap-6 xl:gap-8 xl:pt-6 order-2 xl:order-none">
                                {/* title */}
                                <h3 className="h3">{project.title}</h3>
                                {/* tech */}
                                <div className="xl:mb-4 max-w-[300px] min-h-[130px]">
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
                                <div className="flex flex-col sm:flex-row gap-4 items-start">
                                  <Link href={project.link}>
                                    <button className="btn btn-sm btn-accent flex gap-2">
                                      <MdArrowOutward className="text-xl" />
                                      <span>Live Project</span>
                                    </button>
                                  </Link>
                                  <Link href={project.github}>
                                    <button className="btn btn-sm btn-white flex gap-2">
                                      <FaGithub className="text-xl" />
                                      <span>Github Repository</span>
                                    </button>
                                  </Link>
                                </div>
                              </div>
                              {/* project img */}
                              <div className="w-full h-[200px] md:h-[300px] xl:h-[400px] relative bg-pink-50/10 order-1 xl:order-none rounded-lg overflow-hidden">
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
