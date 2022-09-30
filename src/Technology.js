import React from "react";
import { motion } from "framer-motion";
import { frontendSvg, backendSvg, skillsSvg, designSvg } from "./svgs";

export default function Technology() {
  const tech = {
    frontend: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next",
      "REDUX",
      "HTML",
      "CSS",
      "SASS",
      "Tailwind",
      "Framer Motion",
    ],
    backend: ["Node", "Express", "MongoDB", "Firebase"],
    skills: [
      "AWS",
      "User Authentication",
      "User Authorization",
      "Cryptography",
      "Hashing Algorithms",
      "OAuth 2.0",
      "Git & GitHub"
    ],
    addons: ["Figma", "Photoshop", "Illustrator"],
  };

  return (
    <div className="technology">
      <div className="frontend">
        <div>
          <h2>Frontend</h2>
          {tech.frontend.map((frontend, i) => {
            return (
              <motion.p
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, x: -3 }}
                animate={{ opacity: 1, x: 5, transition: { delay: i * 0.05 } }}
                key={i}
              >
                {frontend}
              </motion.p>
            );
          })}
        </div>

        {frontendSvg}
      </div>

      <div className="backend">
        {backendSvg}
        <div>
          <h2>Backend</h2>
          {tech.backend.map((backend, i) => {
            return (
              <motion.p
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, x: -3 }}
                animate={{ opacity: 1, x: 5, transition: { delay: i * 0.05 } }}
                key={i}
              >
                {backend}
              </motion.p>
            );
          })}
        </div>
      </div>
      <div className="skills">
        <div>
          <h2>Skills</h2>
          {tech.skills.map((skill, i) => {
            return (
              <motion.p
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, x: -3 }}
                animate={{ opacity: 1, x: 5, transition: { delay: i * 0.05 } }}
                key={i}
              >
                {skill}
              </motion.p>
            );
          })}
        </div>
        {skillsSvg}
      </div>

      <div className="design">
        {designSvg}
        <div>
          <h2>Design</h2>
          {tech.addons.map((addon, i) => {
            return (
              <motion.p
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, x: -3 }}
                animate={{ opacity: 1, x: 5, transition: { delay: i * 0.05 } }}
                key={i}
              >
                {addon}
              </motion.p>
            );
          })}
        </div>
      </div>
    </div>
  );
}