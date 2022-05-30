import { motion } from "framer-motion";

function Bg() {

    const arr = [];
    for (let i = 1; i <= 20; i++) {
        arr.push(i);
    }

    return (
        <>
            {arr.map((x, i) => {
                return <motion.div className={`circle${x} circle`}></motion.div>
            })}
        </>
    );
}

export default Bg;

// style={i % 2 === 0 ? { top: `${i + 8}%`, right: `${i * 4}%` } : { bottom: `${i + 10}%`, left: `${i * 10}%` }} initial={{ height: `${5 + i}rem`, width: `${5 + i}rem` }} animate={{ height: `${5*i}rem`, width: `${5*i}rem` }} transition={{ repeat: Infinity, duration: 30 }}