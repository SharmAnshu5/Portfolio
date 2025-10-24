import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { Experience } from "../constants";

const ExperienceCard = ({ exp, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.3, 0.75)}
    className="bg-[#1a1b3a]/80 border border-[#272953] p-6 rounded-2xl shadow-lg backdrop-blur-lg hover:shadow-[#6c63ff]/40 transition duration-300 relative overflow-hidden"
  >
    {/* Header with company + title */}
    <div className="flex items-center justify-between mb-5">
      <div className="flex items-center gap-3">
        {exp.companyLogo && (
          <img
            src={exp.companyLogo}
            alt="Company Logo"
            className="w-12 h-12 rounded-full border border-[#6c63ff]/40 object-cover"
          />
        )}
        <h3 className="text-xl font-semibold text-white leading-snug">
          {exp.name}
        </h3>
      </div>
    </div>

    {/* Main Project Image */}
    {exp.projectImage && (
      <div className="relative mb-5">
        <img
          src={exp.projectImage}
          alt={`${exp.name} Project`}
          className="rounded-xl w-full h-52 object-cover border border-[#2f3163]/50 hover:scale-[1.02] transition-transform duration-300"
        />
      </div>
    )}

    {/* Description */}
    <ul className="list-disc ml-5 space-y-2 text-gray-300 text-sm leading-relaxed">
      {exp.description.map((point, idx) => (
        <li key={idx}>{point}</li>
      ))}
    </ul>

    {/* Tags */}
    <div className="flex flex-wrap mt-4 gap-2">
      {exp.tags.map((tag, idx) => (
        <span
          key={idx}
          className={`text-[12px] ${tag.color} bg-[#23264d]/50 px-2 py-1 rounded-lg`}
        >
          #{tag.name}
        </span>
      ))}
    </div>

    {/* Source Link */}
    {exp.source_code_link && (
      <a
        href={exp.source_code_link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-5 text-[#6c63ff] hover:text-purple-400 text-sm font-medium"
      >
        View Project ↗
      </a>
    )}
  </motion.div>
);

const ExperienceSection = () => (
  <section id="experience" className="py-16 px-6 max-w-6xl mx-auto">
    <motion.div variants={textVariant()}>
      <p className="text-gray-400 uppercase tracking-widest text-center text-sm">
        Professional Experience
      </p>
      <h2 className="text-white text-4xl font-bold text-center mb-10">
        Work & Projects
      </h2>
    </motion.div>

    <div className="grid md:grid-cols-2 gap-8">
      {Experience.map((exp, index) => (
        <ExperienceCard key={index} exp={exp} index={index} />
      ))}
    </div>
  </section>
);

export default ExperienceSection;
