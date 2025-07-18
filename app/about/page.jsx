"use client";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

// components
import Stats from "@/components/Stats";
import Testimonial from "@/components/Testimonial";
import Info from "@/components/Info";
import Journey from "@/components/Journey";
import Skills from "@/components/Skills";
import Blob from "@/components/Blob";
import Socials from "@/components/Socials";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex items-center"
    >
      <div className="container mx-auto px-0">
        <div className="flex flex-col xl:flex-row items-center gap-24 w-full h-[680px]">
          {/* img & social */}
          <div className="hidden xl:flex flex-col w-full h-full pt-14 max-w-[430px] relative">
            <Image
              src="/assets/avatar2.png"
              width={320}
              height={496}
              alt=""
              className="z-20 relative"
            />
            {/* overlay */}
            <div className="w-full h-[70px] rounded-lg absolute left-0 top-[410px] right-0 bg-gradient-to-t from-secondary via-secondary/90 z-30"></div>
            {/* blob */}
            <div className="absolute top-[80px] -left-[80px] z-10">
              <Blob containerStyles="w-[420px] h-[420px] " />
            </div>
            <Socials
              containerStyles="flex gap-4 z-40 w-max transform translate-y-[-10px] items-center justify center"
              iconStyles="w-[48px] h-[48px] text-[22px] text-accent hover:text-accent-hover transition-all flex items-center justify-center rounded-full cursor-pointer"
            />
          </div>
          {/* scroll area */}
          <ScrollArea className="w-full h-[680px]">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <p>About me</p>
              </div>
              <h2 className="h2 mb-6">
                <span className="text-accent">Kalle</span> Björfors
              </h2>
              <p className="max-w-[540px] mb-12">
                I’m an aspiring fullstack developer with a background in
                kitchens and classrooms — now channeling that hands-on
                experience into clean code and creative interfaces. Currently
                enrolled in a programming course at Lexicon Malmö, I’m building
                skills in frontend technologies like HTML, CSS, JavaScript and
                React, while also working with backend fundamentals, C#, SQL and
                Python ML and AI. I enjoy bridging design and functionality, and
                I’m always curious to understand how everything connects behind
                the scenes. Whether I’m debugging late at night or climbing
                walls on weekends, I bring thoughtful energy, persistence, and a
                genuine passion for development into everything I do.
              </p>
              <div className="flex flex-col items-start gap-16">
                <Stats />
                <Testimonial />
                <Info />
                <Journey />
                <Skills />
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
