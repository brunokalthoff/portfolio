import { IoIosRadioButtonOn } from "react-icons/io";
import { motion } from "framer-motion";

function MiniBrowser({ setGlass, constraintsRef  }) {
    return (
        <motion.div layout drag whileDrag={{ scale: 1.2 }}  dragConstraints={constraintsRef } className="minibrowser">
            <div className="headline-buttons-left">
                <IoIosRadioButtonOn /><IoIosRadioButtonOn /><IoIosRadioButtonOn />
            </div>
            {/* <div className="minibrowser-crunchrocket">crunch<IoRocketOutline />rocket.</div> */}
           <span onClick={()=>setGlass(true)} > 👀</span>
        </motion.div>
    );
}

export default MiniBrowser;


