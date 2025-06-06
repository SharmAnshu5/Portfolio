import React , { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles.js";
import { certifications as certificationsData } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion.js";

const Certifications_Card = ({ certifications }) => {
  const [isPreviewOpen, setPreviewOpen] = useState(false);

  return (
    <>
      <VerticalTimelineElement
        contentStyle={{
          background: "#1d1836",
          color: "#fff",
        }}
        contentArrowStyle={{ borderRight: "7px solid  #232631" }}
        date={certifications.date}
        iconStyle={{ background: certifications.iconBg }}
        icon={
          <div
            className='flex justify-center items-center w-full h-full cursor-pointer'
            onClick={() => setPreviewOpen(true)}
          >
            <img
              src={certifications.icon}
              alt={certifications.provider}
              className='w-[60%] h-[60%] object-contain'
            />
          </div>
        }
      >
        <div>
          <h3 className='text-white text-[24px] font-bold'>
            {certifications.title}
          </h3>
          <p
            className='text-secondary text-[16px] font-semibold'
            style={{ margin: 0 }}
          >
            {certifications.provider}
          </p>
        </div>

        <ul className='mt-5 list-disc ml-5 space-y-2'>
          {certifications.points.map((point, index) => (
            <li
              key={`certifications-point-${index}`}
              className='text-white-100 text-[14px] pl-1 tracking-wider'
            >
              {point}
            </li>
          ))}
        </ul>
      </VerticalTimelineElement>

      {isPreviewOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <div className="relative p-4 bg-white rounded-lg shadow-lg max-w-lg w-full">
            <button
              className="absolute top-2 right-2 text-black text-lg font-bold"
              onClick={() => setPreviewOpen(false)}
            >
              &times;
            </button>
            <img
              src={certifications.icon}
              alt="Certification Preview"
              className="w-full h-auto rounded"
            />
          </div>
        </div>
      )}
    </>
  );
};

const _motion = motion;

const Certifications = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have Learned so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Certifications
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {certificationsData.map((certifications, index) => (
            <Certifications_Card
              key={`certifications-${index}`}
              certifications={certifications}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, "");