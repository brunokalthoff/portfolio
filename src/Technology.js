import React from "react";
import { motion } from "framer-motion";

export default function Technology() {
  const tech = {
    frontend: [
      "HTML",
      "CSS",
      "SASS",
      "Tailwind",
      "Framer Motion",
      "JavaScript",
      "React.js",
      "React Router",
      "REDUX"
    ],
    backend: ["Node.js", "Express.js", "MongoDB", "Firebase"],
    skills: [
      "Authentication",
      "Authorization",
      "Cryptography",
      "Hashing",
      "OAuth2",
      "Test Driven Development",
    ],
  };

  return (
    <div className="technology">
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
  );
}
