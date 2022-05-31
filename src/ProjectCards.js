import { motion } from "framer-motion";
import { projectinfo } from "./projectinfo";

function ProjectCards({ setBack }) {
  return (
    <motion.div className="project-cards" >
      {projectinfo.map((project, i) => {
        return (
          <motion.div onClick={() => setBack(i+1)} layout initial={{ opacity: 0, x: 0 }} whileInView={{ opacity: 1 }} key={i} className="project">
            <img src={project.src} alt="project_image" />
            <h3>{project.h}</h3>
            <p>{project.pShort}</p>
          </motion.div>
        )
      })}
    </motion.div>
  );
}

export default ProjectCards;