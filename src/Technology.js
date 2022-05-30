import React, { useState, useRef, useEffect } from "react";
import { motion, useTransform } from "framer-motion";

export default function Technology({ scrollYProgress }) {
  const [widths, setWidths] = useState(null);
  const [heights, setHeights] = useState(null);
  useEffect(() => {
    const resizeElement = () => {
      const widthsObj = {
        frontendL: document.querySelector(".frontend").getBoundingClientRect()
          .left,
        frontendR: document.querySelector(".frontend").getBoundingClientRect()
          .right,
        backendL: document.querySelector(".backend").getBoundingClientRect()
          .left,
        backendR: document.querySelector(".backend").getBoundingClientRect()
          .right,
        skillsL: document.querySelector(".skills").getBoundingClientRect().left,
        skillsR: document.querySelector(".skills").getBoundingClientRect()
          .right,
      };
      const heightsObj = {
        top: document.querySelector(".frontend").getBoundingClientRect().y,
        bottom: document.querySelector(".backend").getBoundingClientRect()
          .bottom,
      };
      setWidths(widthsObj);
      setHeights(heightsObj);
    };
    resizeElement();
    window.addEventListener("resize", resizeElement);
    return () => window.removeEventListener("resize", resizeElement);
  }, []);

  const constraintsRef = useRef(null);
  const tech = {
    frontend: [
      "HTML",
      "CSS",
      "SASS",
      // "Tailwind",
      // "Framer Motion",
      // "JavaScript",
      // "React.js",
      // "React Redux",
      // "React Router",
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

  const y = useTransform(scrollYProgress, [0, 0.1], ["0%", "380%"]);
  const rotate = useTransform(scrollYProgress, [0, 0.1], [0, -90]);
  const [snap, setSnap] = useState([true, true, true]);

  const [draggedInto, setDraggedInto] = React.useState(false);
  const onDragOver = (event) => {
    // console.log(event);
    setDraggedInto(true);
  };
  const [dragging, setDragging] = useState(false);

  const updateSnap = (event, info) => {
    setDragging(false);
    const i = event.path[0].id;
    if (info.point.y > heights.top && info.point.y < heights.bottom) {
      if (info.point.x > widths.frontendL && info.point.x < widths.frontendR) {
        setSnap((prev) => {
          const newArray = prev.slice();
          newArray.splice(i, 1, false);
          setSnap(newArray);
        });
      } else {
        setSnap((prev) => {
          const newArray = prev.slice();
          newArray.splice(i, 1, true);
          setSnap(newArray);
        });
      }
    }
  };

  return (
    <div ref={constraintsRef} className="technology">
      <div className="headline">
        <motion.h2 style={{ y, rotate }}>Technologies</motion.h2>
      </div>

      <div className="technology-tools-container">
        {tech.frontend.map((frontend, i) => {
          return (
            <motion.p
              style={{ pointerEvents: dragging ? "none" : "" }}
              drag
              dragSnapToOrigin={snap[i]}
              whileHover={{ scale: 1.1 }}
              custom={i}
              initial={{ opacity: 0, x: -3 }}
              animate={{ opacity: 1, x: 5, transition: { delay: i * 0.05 } }}
              whileDrag={()=>setDragging((prev)=>{
                if (!prev) return !prev;
              })}

              onDragEnd={updateSnap}
              dragElastic={0.5}
              dragConstraints={constraintsRef}
              dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }}
              key={i}
              id={i}
            >
              {frontend}
            </motion.p>
          );
        })}
        {tech.backend.map((backend, i) => {
          return (
            <motion.p
              drag
              whileHover={{ scale: 1.1 }}
              custom={i}
              initial={{ opacity: 0, x: -3 }}
              animate={{ opacity: 1, x: 5, transition: { delay: i * 0.05 } }}
              whileDrag={{ scale: 1.2 }}
              dragSnapToOrigin={true}
              dragElastic={0.5}
              dragConstraints={constraintsRef}
              dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }}
              key={i}
            >
              {backend}
            </motion.p>
          );
        })}
        {tech.skills.map((skill, i) => {
          return (
            <motion.p
              drag
              whileHover={{ scale: 1.1 }}
              custom={i}
              initial={{ opacity: 0, x: -3 }}
              animate={{ opacity: 1, x: 5, transition: { delay: i * 0.05 } }}
              whileDrag={{ scale: 1.2 }}
              dragSnapToOrigin={true}
              dragElastic={0.5}
              dragConstraints={constraintsRef}
              dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }}
              key={i}
            >
              {skill}
            </motion.p>
          );
        })}
      </div>
      <div className="technology-sort-containers">
        <motion.div
          className="frontend"
          style={{ background: draggedInto ? "lightblue" : "" }}
          onDragOver={onDragOver}
        >
          <h3>Frontend</h3>
        </motion.div>
        <div className="backend">
          {" "}
          <h3>Backend</h3>{" "}
        </div>
        <div className="skills">
          {" "}
          <h3>Skills</h3>{" "}
        </div>
      </div>
    </div>
  );
}
