import { motion, useTransform } from "framer-motion";
import { useState } from "react";
import { IoMdList } from "react-icons/io";
import { AiOutlinePicCenter } from "react-icons/ai";
import ProjectCarousel from "./ProjectCarousel";
import ProjectCards from "./ProjectCards";
import CardBack from "./CardBack";


export default function Projects({ scrollYProgress }) {
    const [display, setDisplay] = useState('list');
    const [back, setBack] = useState(null);
    const y = useTransform(scrollYProgress, [0, 0.1], ['0%', "260%"]);

    const rotate = useTransform(scrollYProgress, [0, 0.1], [0, -90]);

    return (
        <div className="projects">
            {!back && <div className="headline">
                <motion.h2 style={display === 'list' ? { y, rotate } : {}}>
                    Projects
                </motion.h2>

                <div className="projects-view-toggle">
                    <IoMdList title="List View" style={display === "list" ? { color: "var(--white)", background: 'var(--activeBlue)' } : {}} onClick={() => setDisplay("list")} /><AiOutlinePicCenter title="Carousel View" style={display === "carousel" ? { color: "var(--white)", background: 'var(--activeBlue)' } : {}} onClick={() => setDisplay("carousel")} />
                </div>
            </div>}

            {display === 'carousel' && !back && <ProjectCarousel setBack={setBack} />}
            {display === "list" && !back && <motion.div className="projectList" ><ProjectCards display={display} setBack={setBack} /></motion.div>}

            {back && <CardBack back={back} setBack={setBack} />}

        </div>
    );
}
