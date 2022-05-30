import { motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import { GiPlainCircle } from "react-icons/gi";
import { projectinfo } from './projectinfo';
import ProjectCards from "./ProjectCards"

export default function ProjectCarousel({setBack}) {
    const [width, setWidth] = useState(0);
    useEffect(() => {
        const resizeElement = () => {
            setWidth(document.querySelector('.carousel').offsetWidth - document.querySelector('.carousel').scrollWidth);
        };
        resizeElement();
        window.addEventListener("resize", resizeElement);
        return () => window.removeEventListener("resize", resizeElement);
    }, []);

    const [active, setActive] = useState(0);
    const [currentPos, setCurrentPos] = useState(null);
    const widthByProjects = width / (projectinfo.length);
    useEffect(() => {
        if (currentPos > widthByProjects) return setActive(0);
        if (currentPos < widthByProjects && currentPos > widthByProjects * 2) return setActive(1);
        if (currentPos < widthByProjects * 2 && currentPos > widthByProjects * 3) return setActive(2);
        if (currentPos < widthByProjects * 3 && currentPos > widthByProjects * 4) return setActive(3);
        if (currentPos < widthByProjects * 4) return setActive(4);
    }, [currentPos, widthByProjects]);

    const x = useMotionValue(0);
    const handleClick = index => {
        const newPos = width / (projectinfo.length - 1) * index;
        x.set(newPos);
        setCurrentPos(newPos);
    }

    return (
        <>
            <motion.div className="carousel">
                <motion.div
                    className="inner-carousel"
                    drag="x"
                    dragConstraints={{ right: 0, left: width }}
                    style={{ x }}
                    onDrag={() => setCurrentPos(x.get())}
                    onDragTransitionEnd={() => setCurrentPos(x.get())}
                >
                    <ProjectCards setBack={setBack} />

                </motion.div>
            </motion.div>
            <motion.div className="carousel-nav">
                {projectinfo.map((x, i) => {
                    return <GiPlainCircle key={i} onClick={() => handleClick(i)} style={i === active ? "" : { cursor: 'pointer' }} size={i === active ? "1rem" : ""} color={i === active ? "" : "grey"} />
                })}
            </motion.div>
        </>
    );
}
