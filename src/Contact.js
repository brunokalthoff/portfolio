import { FiSend } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import ContactForm from "./ContactForm";

function Contact({ scrollYProgress }) {
  const constraintsRef = useRef(null)
  // const y = useTransform(scrollYProgress, [0, 0.1], ['0%', "200%"]);
  // const rotate = useTransform(scrollYProgress, [0, 0.1], [0, -90]);
  return (
    <div ref={constraintsRef} className="contact">
      <div>
        <motion.div drag
          whileDrag={{ scale: 1.1 }}
          dragElastic={.5}
          // dragSnapToOrigin
          dragConstraints={constraintsRef}
          dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }}
          className="contact-card">
          <h4>Contact Me</h4>
          <p>
            <FiSend />
            bruno.kalthoff@gmail.com <br />
            <FaWhatsapp />+49 15777 801 086 <br />
          </p>
          <br />
          <h4>Social</h4>
          <p>
            <AiFillGithub /> github.com/brunokalthoff<br />
            <FaInstagram /> instagram.com/bru_n_o_
          </p>
        </motion.div>


        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;