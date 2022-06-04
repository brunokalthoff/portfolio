import Bg from './Bg'
import Bio from "./Bio";
import Projects from "./Projects";
import { motion } from "framer-motion";
import Technology from "./Technology";
import React, { useState, useEffect, useRef } from "react";
import Contact from './Contact';
import Headline from './Headline';
import MiniBrowser from './MiniBrowser';

function App() {
    const constraintsRef  = useRef(null);
    const [nav, setNav] = useState("Bio");
    const [back, setBack] = useState(null);
    const [glass, setGlass] = useState(false);
    useEffect(() => {
        if (glass) document.querySelector(".glassActive").scrollTop = 0;
    }, [back, nav, glass]);

    return (
        <div ref={constraintsRef } className={glass ? "app" : "app app-mini"}>
            {/* {!glass && <MiniBrowser constraintsRef ={constraintsRef } setGlass={setGlass} />} */}

            {glass && <motion.section layout animate={{
                scale: [ 0, 1],
                // rotate: [0, 360],
                borderRadius: ['50%', '2rem']
            }} transition={{ duration: .5, type: "spring" }} className="glass">
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