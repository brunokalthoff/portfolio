import Bg from './Bg'
import Bio from "./Bio";
import Projects from "./Projects";
import { motion, useElementScroll } from "framer-motion";
import Technology from "./Technology";
import Nav from "./Nav";
import React, { useState, useRef } from "react";
import Contact from './Contact';

function App() {
    const [nav, setNav] = useState("bio");
    const ref = useRef()
    const { scrollYProgress } = useElementScroll(ref)
    return (
        <div className="app">
            <motion.section layout animate={{
                scale: [0, 0.1, 0.2, 0.3, 0.3, 1],
                scaleX: [0.7, 0.7, 0.8, 0.86, 1],
                rotate: [0, 720],
                borderRadius: ["100%", "80%", "70%", "60%", "2rem"]
            }} className="glass">
                <div ref={ref} className="glassActive">
                    {nav === "bio" && <Bio scrollYProgress={scrollYProgress} />}
                    {nav === "projects" && <Projects scrollYProgress={scrollYProgress} />}
                    {nav === "technology" && <Technology scrollYProgress={scrollYProgress} />}
                    {nav === "contact" && <Contact scrollYProgress={scrollYProgress} />}
                </div>
                <Nav setNav={setNav} nav={nav} />
            </motion.section>
            <Bg />
        </div>
    );
}

export default App;