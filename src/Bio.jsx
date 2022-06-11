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
        I'm a passionate Full Stack Web Developer from Hamburg, Germany. Since
        Summer 2021, I actively program with the MERN-Stack: Vanilla
        JavaScript/React.js as frontend technologies, and
        Node.js/Express.js/MongoDB for the backend.
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
              art exhibition featuring 19 international artists in February
              2021, and a fascination about the possibilities that are in the
              world of programming. Besides further exploring art in the digital
              realm, I am interested in creating efficient and individual
              CRM-Systems for enterprises - unleashing the full potential of
              modern web app programming technologies that make handling
              dynamic, fast-changing content possible. <br />
              <br />I studied analytical Philosophy & Economics at Humboldt
              University in Berlin, and have worked in Journalism and Design. My
              interests are in the fields of Technology, Neuroscience,
              Philosophy of Mind, Psychology, Art, Literature. At this stage, I
              am fully engaged in the journey and excited for the future.
              <br />📍 Currently living in Bali.
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
