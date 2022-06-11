import Bg from './Bg'
import Bio from "./Bio";
import Projects from "./Projects";
import { motion } from "framer-motion";
import Technology from "./Technology";
import React, { useState, useEffect, useRef } from "react";
import Contact from './Contact';
import Headline from './Headline';

function App() {
    const constraintsRef = useRef(null);
    const [nav, setNav] = useState("Bio");
    const [back, setBack] = useState(null);
    const [glass, setGlass] = useState(false);
    useEffect(() => {
        if (glass) document.querySelector(".glassActive").scrollTop = 0;
    }, [back, nav, glass]);

    return (
        <div ref={constraintsRef} className={glass ? "app app-mini" : "app app-mini"}>

            {glass && <motion.section layout initial={{ opacity: 0, y: "50%" }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring" }} className="glass">
                <div className="glassActive">
                    <Headline setGlass={setGlass} nav={nav} setNav={setNav} />
                    {nav === "Bio" && <Bio />}
                    {nav === "Projects" && <Projects back={back} setBack={setBack} />}
                    {nav === "Technology" && <Technology />}
                    {nav === "Contact" && <Contact />}
                </div>
            </motion.section>}
            <Bg glass={glass} setGlass={setGlass} />
        </div>
    );
}

export default App;