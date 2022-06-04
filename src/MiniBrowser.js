import { IoIosRadioButtonOn } from "react-icons/io";
import { BsPlusCircleDotted } from "react-icons/bs";

import { motion } from "framer-motion";

function MiniBrowser({ setGlass, constraintsRef }) {
    return (
        <motion.div layout drag whileDrag={{ scale: 1.2 }} dragConstraints={constraintsRef} className="minibrowser">
            <div className="headline-buttons-left">
                <IoIosRadioButtonOn /><IoIosRadioButtonOn /><IoIosRadioButtonOn />
            </div> <BsPlusCircleDotted onClick={() => setGlass(true)} />
        </motion.div>
    );
}

export default MiniBrowser;


