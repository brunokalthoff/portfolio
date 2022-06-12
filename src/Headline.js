import { motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { ImPacman, ImBubbles, ImRocket, ImStack } from 'react-icons/im';
import { AiFillCloseCircle } from "react-icons/ai";
import { FaCircle } from "react-icons/fa";


function Headline({ nav, setNav, setGlass }) {
    const openInNewTab = url => {
        window.open(url, '_blank').focus();
    }
    return (

        <motion.div className="headline">
            <div className="headline-line">
                <div className="headline-buttons-left">
                    <AiFillCloseCircle size={14.4} onClick={() => setGlass(false)} />
                    <FaCircle size={13} />
                    <FaCircle size={13} />
                </div>
                    <div className="crunchrocket">Bruno Kalthoff<br />Portfolio 💬</div>

                <div className="social-icons">
                    <AiFillGithub onClick={() => openInNewTab("https://github.com/brunokalthoff")} />
                    <FaInstagram onClick={() => openInNewTab("https://instagram.com/bru_n_o_")} />
                    <FaLinkedin onClick={() => openInNewTab("https://linkedin.com/in/bkalthoff/")} />
                </div>
            </div>
            <nav>
                <motion.div layout className={nav === "Bio" ? "nav-tab-active" : "nav-tab-inactive"} onClick={() => setNav("Bio")}><ImPacman title='Bio' /><motion.span>Bio</motion.span></motion.div>
                <motion.div layout className={nav === "Projects" ? "nav-tab-active" : "nav-tab-inactive"} onClick={() => setNav("Projects")}><ImRocket title='Projects' /> <span>Projects</span> </motion.div>
                <motion.div layout className={nav === "Technology" ? "nav-tab-active" : "nav-tab-inactive"} onClick={() => setNav("Technology")}><ImStack title='Technologies' /> <span>Stack</span> </motion.div>
                <motion.div layout className={nav === "Contact" ? "nav-tab-active" : "nav-tab-inactive"} onClick={() => setNav("Contact")} ><ImBubbles title='Contact' /><span>Contact</span></motion.div>
            </nav>
        </motion.div>
    );
}

export default Headline;