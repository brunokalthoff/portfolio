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
        Bruno is a passionate Full Stack Web Developer from Hamburg, Germany.
        Since Summer 2021, he actively programs with the MERN-Stack: Vanilla
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
              His programming journey began with designing and coding a virtual
              art exhibition featuring 19 international artists in February
              2021, and a fascination about the possibilities of the world of
              programming. Besides further exploring art in the digital realms,
              Bruno is especially interested in creating efficient CRM-Systems
              for enterprises - unleashing the full potential of modern web app
              programming technologies that make handling dynamic, fast-changing
              content possible. <br />
              <br />
              Bruno studied analytical Philosophy & Economics at Humboldt
              University in Berlin, and has worked in Journalism and Design.
              His interests are in the fields of Technology, Neuroscience,
              Philosophy of Mind, Psychology, Art, Literature. Describing his stage, he
              is "fully engaged in the journey and excited for the future".
              Currently living in Bali.
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