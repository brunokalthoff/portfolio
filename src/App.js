import Bg from './Bg'
import Bio from "./Bio";
import Projects from "./Projects";
import { motion } from "framer-motion";
import Technology from "./Technology";
import React, { useState, useEffect } from "react";
import Contact from './Contact';
import Headline from './Headline';

function App() {
    const [nav, setNav] = useState("Bio");
    const [back, setBack] = useState(null);
    useEffect(() => {
        document.querySelector(".glassActive").scrollTop = 0;
    }, [back, nav]);

    return (
        <div className="app">
            <motion.section layout animate={{
                scale: [0, 0, 0, 1],
                rotate: [0, 720],
                borderRadius: ["100%", "2rem"]
            }} transition={{ duration: 1, type: "spring" }} className="glass">
                <div className="glassActive">
                    <Headline nav={nav} setNav={setNav} />
                    {nav === "Bio" && <Bio />}
                    {nav === "Projects" && <Projects back={back} setBack={setBack} />}
                    {nav === "Technology" && <Technology />}
                    {nav === "Contact" && <Contact />}
                </div>
            </motion.section>
            <Bg />
        </div>
    );
}

export default App;