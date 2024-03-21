import React from "react";
import Tilt from "react-parallax-tilt";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { certificates } from "../constants";

const ProjectCard = ({
  index,
  name,
  image,
  verifyLink,
}) => {
  return (
    <div>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 250,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
      <a href={verifyLink} target='_blank'>
        <div className='relative w-full h-[238px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />
        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p>Click to verify</p>
        </div>
        </a>
      </Tilt>
    </div>
  );
};

const Certificates = () => {
  return (
    <>
      <div>
        <p className={`${styles.sectionSubText} `}>My Study</p>
        <h2 className={`${styles.sectionHeadText}`}>Certificats.</h2>
      </div>
      <div className='w-full flex'>
      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {certificates.map((certifacte, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...certifacte} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certificates, "certificates");
