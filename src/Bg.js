import { motion } from "framer-motion";
import { dinosaur } from "./svgs";
import Footer from "./Footer";

function Bg({ glass, setGlass }) {

    return (

        <>
            {!glass &&
                <div className="dinosaur">{dinosaur}
                    <div className="loadbar">
                        <motion.div initial={{ x: '-100%' }} animate={{ x: 0 }} transition={{ duration: 2 }} onAnimationComplete={() => setGlass(true)} className="inner">
                        </motion.div>
                    </div>
                </div>
            }
{!glass && <Footer />}
        </>
    );
}

export default Bg;