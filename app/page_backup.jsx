"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { MdArrowOutward } from "react-icons/md";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
// components
import Blob from "@/components/Blob";
import Image from "next/image";
import Link from "next/link";
import avatarImg from "@/public/assets/avatar3.png";
import Socials from "@/components/Socials";
import Pattern from "@/components/Pattern";

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-screen flex items-center py-12 xl:py-0"
    >
      {/* pattern */}
      <Pattern />
      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row items-center justify-between w-full gap-8 xl:gap-0">
          {/* text */}
          <div className="w-full xl:w-[550px] flex flex-col items-center xl:items-start text-center xl:text-left">
            <h1 className="h1 flex-1 mb-[28px]">
              Hi! I'm Kalle, <br />
              <TypeAnimation
                sequence={["Fullstack Developer", 2000, "Web Designer", 2000]}
                wrapper="span"
                speed={40}
                className="text-accent inline-block w-full sm:w-52 md:w-60 lg:w-68 xl:w-76 2xl:w-80"
                repeat={Infinity}
                cursor={false}
              />
            </h1>
            <p className="max-w-[500px] mb-6 text-sm sm:text-base">
              I'm currently training to become a fullstack developer and I'm
              looking for an internship that will be my first step into the
              industry.
            </p>
            <p className="max-w-[500px] mb-8 text-sm sm:text-base">
              I'm proficient in HTML, CSS, JavaScript, Python and C#, and eager
              to contribute to projects where user experience takes center
              stage. With a background as both a chef and a teacher, I'm used to
              working with a solution-oriented mindset, clear communication, and
              fast learning. I bring dedication, reliability and a strong desire
              to grow — together with a team that believes in potential. If
              you're looking to strengthen your team with someone focused on the
              future, I believe we could create something truly valuable
              together.
            </p>
            {/* buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-start mb-12">
              {/* about button */}
              <Link href="/about">
                <button className="btn btn-lg btn-accent">
                  <div className="flex items-center gap-3">
                    <span>About me.</span>
                    <MdArrowOutward className="text-xl" />
                  </div>
                </button>
              </Link>
              {/* work button */}
              <Link href="/work">
                <button className="btn btn-lg btn-white">
                  <div className="flex items-center gap-3">
                    <span>Check out my Work</span>
                    <MdArrowOutward className="text-xl" />
                  </div>
                </button>
              </Link>
            </div>
            {/* contact info */}
            <div className="flex flex-col xl:flex-row xl:items-center gap-4 xl:gap-8 mb-8 xl:mb-0">
              {/* phone */}
              <div className="flex items-center gap-4 text-sm sm:text-base">
                <span className="text-accent">
                  <HiOutlinePhone className="text-xl" />
                </span>
                <span>+46 768 70 89 35</span>
              </div>
              {/* email */}
              <div className="flex items-center gap-4 text-sm sm:text-base">
                <span className="text-accent">
                  <HiOutlineMail className="text-xl" />
                </span>
                <span>kallebjorfors@gmail.com</span>
              </div>
            </div>
            {/* social links */}
            <Socials
              containerStyles="flex 2xl:flex-col gap-6 xl:hidden 2xl:flex 2xl:absolute 2xl:top-1/2 2xl:right-2 2xl:transform 2xl:-translate-x-1/2 2xl:-translate-y-1/2"
              iconStyles="bg-accent text-white hover:bg-accent-hover transition w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] text-[18px] sm:text-[22px] flex items-center justify-center rounded-full cursor-pointer"
            />
          </div>

          {/* blob and image */}
          <div className="hidden xl:block flex-1 relative z-20">
            {/* blob */}
            <Blob containerStyles="w-[520px] h-[520px]" />
            {/* avatar */}
            <Image
              src={avatarImg}
              alt=""
              width={440}
              height={600}
              quality={100}
              className="absolute -top-10 left-[120px]"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
