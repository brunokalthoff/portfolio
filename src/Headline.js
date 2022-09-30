import { motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaTree, FaCoffee } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";
import { RiAliensFill } from "react-icons/ri";
import { GiDualityMask } from "react-icons/gi";
import { TbPhotoOff } from "react-icons/tb";


function Headline({ nav, setNav, setGlass, bg, setAppBg }) {
    const openInNewTab = url => {
        window.open(url, '_blank').focus();
    }
    return (

        <motion.div className="headline">
            <div className="headline-line">
                <div className="headline-buttons-left">
                    <AiFillCloseCircle size={13} onClick={() => setGlass(false)} />
                    <span style={{ display: 'inline-block', width: 14 }}></span>
                    <TbPhotoOff color="" onClick={() => setAppBg(null)} size={13} />
                    <FaTree color="" onClick={() => setAppBg(bg.trees)} size={13} />
                    <BsCodeSlash color="" onClick={() => setAppBg(bg.coder)} size={13} />
                    <RiAliensFill color="" onClick={() => setAppBg(bg.space)} size={13} />
                    <FaCoffee color="" onClick={() => setAppBg(bg.coffee)} size={13} />
                    <GiDualityMask color="" onClick={() => setAppBg(bg.tribal)} size={12} />
                </div>
                <div className="crunchrocket">Portfolio</div>

                <div className="social-icons">
                    <AiFillGithub onClick={() => openInNewTab("https://github.com/brunokalthoff")} />
                    <FaInstagram onClick={() => openInNewTab("https://instagram.com/bru_n_o_")} />
                    <FaLinkedin onClick={() => openInNewTab("https://linkedin.com/in/bkalthoff/")} />
                </div>
            </div>
            <nav>
                <motion.div className={nav === "Bio" ? "nav-tab-active" : "nav-tab-inactive"} onClick={() => setNav("Bio")}><span style={{ fontSize: '1.2rem' }}>😌</span><motion.span>Bio</motion.span></motion.div>
                <motion.div className={nav === "Projects" ? "nav-tab-active" : "nav-tab-inactive"} onClick={() => setNav("Projects")}><span style={{ fontSize: '1.2rem' }}>✨</span><span>Projects</span> </motion.div>
                <motion.div className={nav === "Technology" ? "nav-tab-active" : "nav-tab-inactive"} onClick={() => setNav("Technology")}><span style={{ fontSize: '1.2rem' }}>🚀</span> <span>Stack</span> </motion.div>
                <motion.div className={nav === "Contact" ? "nav-tab-active" : "nav-tab-inactive"} onClick={() => setNav("Contact")} ><span style={{ fontSize: '1.2rem' }}>👋</span><span>Contact</span></motion.div>
            </nav>
        </motion.div>
    );
}

export default Headline;