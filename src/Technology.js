import React from "react";
import { motion } from "framer-motion";
import { frontendSvg, backendSvg, skillsSvg, designSvg } from "./svgs";

export default function Technology() {
  const tech = {
    frontend: [
      "HTML",
      "CSS",
      "SASS",
      "Tailwind",
      "Framer Motion",
      "GSAP",
      "JavaScript",
      "React.js",
      "Next.js",
      "REDUX",
    ],
    backend: ["Node.js", "Express.js", "MongoDB", "Firebase"],
    skills: [
      "AWS",
      "User Authentication",
      "User Authorization",
      "Cryptography",
      "Hashing Algorithms",
      "OAuth 2.0",
      "Git & GitHub"
    ],
    addons: ["Photoshop", "Illustrator", "Figma", "Inkscape", "Mockups & Wireframing"],
  };

  return (
    <div className="technology">
      <div className="frontend">
        <div>
          <h3>Frontend</h3>
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
          <h3>Backend</h3>
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
          <h3>Skills</h3>
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
          <h3>Design</h3>
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