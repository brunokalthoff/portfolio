import { motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
// import { ImPacman, ImBubbles, ImRocket, ImStack } from 'react-icons/im';
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
                    <AiFillCloseCircle size={13} onClick={() => setGlass(false)} />
                    <FaCircle size={11} />
                    <FaCircle size={11} />
                </div>
                <div className="crunchrocket">Portfolio</div>

                <div className="social-icons">
                    <AiFillGithub onClick={() => openInNewTab("https://github.com/brunokalthoff")} />
                    <FaInstagram onClick={() => openInNewTab("https://instagram.com/bru_n_o_")} />
                    <FaLinkedin onClick={() => openInNewTab("https://linkedin.com/in/bkalthoff/")} />
                </div>
            </div>
            <nav>
                <motion.div  className={nav === "Bio" ? "nav-tab-active" : "nav-tab-inactive"} onClick={() => setNav("Bio")}><span style={{ fontSize: '1.2rem' }}>🧑</span><motion.span>Bio</motion.span></motion.div>
                <motion.div  className={nav === "Projects" ? "nav-tab-active" : "nav-tab-inactive"} onClick={() => setNav("Projects")}><span style={{ fontSize: '1.2rem' }}>✨</span><span>Projects</span> </motion.div>
                <motion.div  className={nav === "Technology" ? "nav-tab-active" : "nav-tab-inactive"} onClick={() => setNav("Technology")}><span style={{ fontSize: '1.2rem' }}>🚀</span> <span>Stack</span> </motion.div>
                <motion.div  className={nav === "Contact" ? "nav-tab-active" : "nav-tab-inactive"} onClick={() => setNav("Contact")} ><span style={{ fontSize: '1.2rem' }}>💬</span><span>Contact</span></motion.div>
            </nav>
        </motion.div>
    );
}

export default Headline;