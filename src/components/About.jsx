import React from "react";
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";
const _motion = motion;

import { styles } from "../styles";
import { services } from "../constants/indexs.js"; 
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='w-[180px]'>
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[15px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[15px] py-4 px-6 min-h-[200px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='service-icon'
          className='w-12 h-12 object-contain'
        />
        <h3 className='text-white text-[16px] font-semibold text-center mt-2'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a passionate AI enthusiast pursuing a Computer Science 
        and AI degree. My focus is on harnessing the power of 
        machine learning to develop innovative solutions. 
        I'm eager to apply my skills in a dynamic environment and 
        contribute to groundbreaking projects.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");