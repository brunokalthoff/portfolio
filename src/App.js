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
    const [glass, setGlass] = useState(false);
    const [appBg, setAppBg] = useState(null);
    useEffect(() => {
        if (glass) document.querySelector(".glassActive").scrollTop = 0;
    }, [back, nav, glass]);

    useEffect(() => {
        setAppBg(bg.coder);
    }, [glass]);

    const bg = {
        trees: 'app-bg-trees',
        coder: 'app-bg-coder',
        space: 'app-bg-space',
        coffee: 'app-bg-coffee',
        tribal: 'app-bg-tribal'
    }

    return (
        <div className={glass ? `app ${appBg}` : "app"}>

            {glass && <motion.section layout initial={{ opacity: 0, y: "50%" }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring" }} className="glass">
                <div className="glassActive">
                    <Headline setGlass={setGlass} nav={nav} setNav={setNav} bg={bg} appBg={appBg} setAppBg={setAppBg} />
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