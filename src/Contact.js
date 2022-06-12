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
          
          <span style={{ fontSize: '1rem' }}>📯 </span>bruno.kalthoff@gmail.com <br />
          <span style={{ fontSize: '1rem' }}>📲 </span>+49 15777 801 086 <br />
        </p>
        <br />
      </motion.div>
      <ContactForm />
    </div>
  );
}

export default Contact;