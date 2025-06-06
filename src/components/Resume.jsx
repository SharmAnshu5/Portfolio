import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';          
import { textVariant } from '../utils/motion';
const _motion = motion;

const Resume = () => {
  return (
    <section className="w-full flex justify-center items-center py-16 px-4 sm:px-8">
      <motion.div
        variants={textVariant()}
        className="bg-tertiary p-10 rounded-2xl shadow-lg max-w-xl w-full text-center"
      >
        <h2 className="text-white text-3xl font-bold mb-6">Download My Resume</h2>
        <p className="text-secondary text-[17px] mb-8 leading-[30px]">
          Click the button below to download my latest resume in PDF format.
        </p>

        <a
          href="public/Anshu Resume.pdf"
          download
          className="inline-block bg-[#915EFF] text-white px-6 py-3 rounded-lg font-semibold transition duration-300 hover:bg-[#7a4ee0]"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
};

export default SectionWrapper(Resume, "resume");