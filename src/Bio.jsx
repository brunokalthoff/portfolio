import { motion } from "framer-motion";
import React from "react";
import avatar from "./images/avatar.jpg";

export default function Bio({ scrollYProgress }) {
  const [readMore, setReadMore] = React.useState(false);

  return (
    <motion.div className="bio">
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        src={avatar}
        alt="avatar"
      />
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Bruno Kalthoff
      </motion.h1>
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Web Developer
      </motion.h2>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 0.7 }}>
        Hey visitor! I'm a passionate Full Stack Web Software Developer from Hamburg,
        Germany. I actively program with the MERN-Stack: Vanilla
        JavaScript/React/Next as frontend technologies, and Node/Express/MongoDB
        for the backend.
        <br />
        <br />

              My programming journey began with designing and coding a virtual
              art exhibition featuring 19 international artists, and a
              fascination about the possibilities that the world of (web)
              software development offers. <br />
              <br />
              Besides further programmatically exploring art in the digital
              realm, I'm interested in creating CRM and ERP-Systems for
              enterprises. Through building weblications that are highly
              individual and functional in each of a companies' usecase I aim to
              help standardize processes, get work done faster and more
              efficient.
              <br />
              <br />I studied analytical Philosophy & Economics at Humboldt
              University in Berlin, and have worked in Journalism and Design.
              Other then the tech world, my interests include the fields of
              Psychology, Philosophy of Mind, Neuroscience, Art, Literature.
              <br />
         
            <br />
        
      </motion.p>
    </motion.div>
  );
}
