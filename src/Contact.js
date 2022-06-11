import { FiSend } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import ContactForm from "./ContactForm";

function Contact({ scrollYProgress }) {
  const constraintsRef = useRef(null)
  return (
    <div ref={constraintsRef} className="contact">
      <motion.div
        className="contact-card">
        <p>
          <FiSend />
          bruno.kalthoff@gmail.com <br />
          <FaWhatsapp />+49 15777 801 086 <br />
        </p>
        <br />
      </motion.div>
      <ContactForm />
    </div>
  );
}

export default Contact;