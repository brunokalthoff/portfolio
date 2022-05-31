import { motion } from "framer-motion";
import { IoRocketOutline } from "react-icons/io5";
import { ImUser } from 'react-icons/im';
import { SiMinutemailer } from "react-icons/si";
import { GiRayGun } from "react-icons/gi";
import { BiCodeBlock } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { IoIosRadioButtonOn } from "react-icons/io";


function Headline({ nav, setNav, startDrag }) {
    return (

        <motion.div className="headline">
            <div className="headline-line">
                <div className="headline-buttons-left">
                    <IoIosRadioButtonOn /><IoIosRadioButtonOn /><IoIosRadioButtonOn />
                </div>
                <div className="crunchrocket">crunch<IoRocketOutline />rocket.</div>
                <AiFillCloseCircle onPointerDown={startDrag} className="headline-button-right" />

            </div>
            <nav>
                <motion.div layout className={nav === "Bio" ? "nav-tab-active" : "nav-tab-inactive"} onClick={() => setNav("Bio")}><ImUser title='Bio' /><motion.span>Bio</motion.span></motion.div>
                <motion.div layout className={nav === "Projects" ? "nav-tab-active" : "nav-tab-inactive"} onClick={() => setNav("Projects")}><BiCodeBlock title='Projects' /> <span>Projects</span> </motion.div>
                <motion.div layout className={nav === "Technology" ? "nav-tab-active" : "nav-tab-inactive"} onClick={() => setNav("Technology")}><GiRayGun title='Technologies' /> <span>Tools</span> </motion.div>
                <motion.div layout className={nav === "Contact" ? "nav-tab-active" : "nav-tab-inactive"} onClick={() => setNav("Contact")} ><SiMinutemailer title='Contact' /><span>Contact</span></motion.div>
            </nav>
        </motion.div>
    );
}

export default Headline;