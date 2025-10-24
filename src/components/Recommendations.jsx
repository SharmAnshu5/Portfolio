import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const recommendations = [
  {
    name: "Depanshu Lodhi",
    role: "Data Scientist & Mentor, Inventia Technologies",
    feedback:
      "During his internship at Inventia, Anshu demonstrated a deep understanding of AI, ML, and Data Analysis. His work ethic, ability to learn quickly, and commitment to producing scalable models made him a standout contributor to the team.",
  },
  {
    name: "Vipin Sharma",
    role: "Restaurant Owner, Itlain Bite Pizza",
    feedback:
      "Anshu helped us modernize our restaurant by setting up a complete QR-based digital menu and website. His approach was professional, fast, and technically excellent. Our customers love the new digital experience he built.",
  },
];

const RecommendationSection = () => (
  <section id="recommendations" className="py-20 px-6 max-w-5xl mx-auto">
    <motion.div variants={textVariant()}>
      <h2 className="text-white text-4xl font-bold text-center mb-12">
        Recommendations
      </h2>
    </motion.div>

    <div className="grid md:grid-cols-2 gap-10">
      {recommendations.map((rec, idx) => (
        <motion.div
          key={idx}
          variants={fadeIn("up", "spring", idx * 0.4, 0.8)}
          className="bg-[#1a1b3a]/70 border border-[#2f3163] rounded-2xl p-6 shadow-lg backdrop-blur-md"
        >
          <p className="text-gray-300 italic mb-6 leading-relaxed">
            “{rec.feedback}”
          </p>
          <div className="border-t border-[#6c63ff]/40 pt-3">
            <h4 className="text-[#6c63ff] font-semibold">{rec.name}</h4>
            <p className="text-gray-400 text-sm">{rec.role}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default RecommendationSection;
