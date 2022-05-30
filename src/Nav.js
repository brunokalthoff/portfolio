import { ImLab, ImUser } from 'react-icons/im';
import { SiMinutemailer } from "react-icons/si";
import { GiRayGun } from "react-icons/gi";
import { motion } from 'framer-motion';
import { BiCodeBlock } from "react-icons/bi";




function Nav({ nav, setNav }) {

    return (

        <nav>
            <motion.div layout transition={{duration: 1}} style={nav === "bio" ? {borderTop: 'solid var(--yellow)'} : {}} onClick={()=>setNav("bio")}><ImUser title='Bio' color={ nav === "bio" ? "var(--white)" : ''} /><motion.span layout="color" transition={{duration: 1}} style={nav === "bio" ? {color: 'var(--white)'} : {}}>Bio</motion.span></motion.div>
            <motion.div layout style={nav === "projects" ? {borderTop: 'solid var(--yellow)'} : {}} onClick={()=>setNav("projects")}><BiCodeBlock title='Projects' color={ nav === "projects" ? 'var(--white)' : ''} /> <span style={nav === "projects" ? {color: 'var(--white)'} : {}}>Projects</span> </motion.div>
            <motion.div layout style={nav === "technology" ? {borderTop: 'solid var(--yellow)'} : {}} onClick={()=>setNav("technology")}><GiRayGun title='Technologies' color={ nav === "technology" ? 'var(--white)' : ''} /> <span style={nav === "technology" ? {color: 'var(--white)'} : {}}>Tools</span> </motion.div>
            <motion.div layout style={nav === "contact" ? {borderTop: 'solid var(--yellow)'} : {}} onClick={()=>setNav("contact")} ><SiMinutemailer title='Contact' color={ nav === "contact" ? 'var(--white)' : ''} /><span style={nav === "contact" ? {color: 'var(--white)'} : {}}>Contact</span></motion.div>
        </nav>
    );
}

export default Nav;