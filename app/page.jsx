"use client";
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.section 
      initial={{ opacity: 0}}
      animate={{ 
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }     
      }}
      className='h-screen flex items-center'
    >
      <div className='flex flex-col xl:flex-row items-center justify-between w-full'>
        <div className='w-full xl:w-[550px]'>text</div>
        <div className='hidden xl:block flex-1 relative z-20'>image</div>
      </div>
    </motion.section>
  );
};

export default Home