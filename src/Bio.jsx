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
        Germany. I actively program with the MERN-Stack: React.js as
        frontend technology, and Node/Express/MongoDB for the backend.
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
              art exhibition featuring 19 international artists, and a fascination about the possibilities that the world of
              coding offers. Besides further exploring art in the digital realm,
              I am interested in creating individual CRM and ERP-Systems for
              enterprises. I aim to enable them to work more efficiently, by
              understanding their needs precisely, and unleashing the power of
              modern web software programming technologies. <br />
              <br />I studied analytical Philosophy & Economics at Humboldt
              University in Berlin, and have worked in Journalism and Design. My broader
              interests include the fields of Technology, Neuroscience,
              Philosophy of Mind, Psychology, Art, Literature.<br />At my current
              stage, I'm fully engaged in the programming journey and excited for
              the future.
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
