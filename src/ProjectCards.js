import { motion } from "framer-motion";
import { IoInformationCircleSharp } from "react-icons/io5";
import { projectinfo } from "./projectinfo";

function ProjectCards({ setBack }) {
  return (
    <motion.div className="project-cards" >
      {projectinfo.map((project, i) => {
        return (
          <motion.div layout initial={{ opacity: 0, x: 0 }} whileInView={{ opacity: 1 }} key={i} className="project">
            <img src={project.src} alt="project_image" />
            <h3>{project.h}</h3>
            <p>{project.pShort}</p>
            <div><IoInformationCircleSharp onClick={() => setBack(i+1)} /></div>
          </motion.div>
        )
      })}
    </motion.div>
  );
}

export default ProjectCards;