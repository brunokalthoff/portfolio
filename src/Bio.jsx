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
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Bruno Kalthoff
      </motion.h2>
      <motion.h5 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Web Developer
      </motion.h5>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 0.7 }}>
        Hey visitor! I'm a passionate Full Stack Web Developer from Hamburg,
        Germany. I actively program with the MERN-Stack: Vanilla
        JavaScript/React/Next as frontend technologies, and Node/Express/MongoDB
        for the backend.
        <br />
        <br />
        {!readMore && (
          <motion.span
            className="more"
            onClick={() => setReadMore((prev) => !prev)}
          >
            ... <br /> <u>more</u>
          </motion.span>
        )}
        {readMore && (
          <>
            <motion.span>
              {" "}
              My programming journey began with designing and coding a virtual
              art exhibition featuring 19 international artists, and a
              fascination about the possibilities that the world of (web)
              software development offers. Besides further programmatically
              exploring art in the digital realm, I'm interested in creating CRM
              and ERP-Systems for enterprises. I aim to help businesses work
              faster, more efficient, and to standardize procecces, by building
              weblications that are highly individual and functional in each of
              their usecases. This portfolio reflects some of my early and
              recent projects and is a steady work in progress, just as my
              programming skills are. <br />
              <br />I studied analytical Philosophy & Economics at Humboldt
              University in Berlin, and have worked in Journalism and Design. My
              new career as a programmer has opened up a bright and fun future
              for me including lifelong learning, and I'm unshy to call it one
              of the best decisions of my life. Other then the Tech world, my
              interests include the fields of Psychology, Philosophy of Mind,
              Neuroscience, Art, Literature.
              <br />
            </motion.span>
            <br />
            <motion.span
              className="more"
              onClick={() => setReadMore((prev) => !prev)}
            >
              <br /> <u>less</u>
            </motion.span>
          </>
        )}
      </motion.p>
    </motion.div>
  );
}
