import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div className="contact">
      <motion.div className="contact-card">

        <p><span style={{ fontSize: '1rem' }}>📯 </span>bruno.kalthoff@gmail.com</p>
        <p><span style={{ fontSize: '1rem' }}>📲 </span>+49 15777 801 086</p>

      </motion.div>

      <ContactForm />

    </div>

  );
}

export default Contact;