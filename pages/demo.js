import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const parent = {
  hidden: {
    opacity:0,
  },
  show: {
    opacity:  1,
  },
};

const child = {
  hidden: {
    opacity: 0,
    x: 10,

  },
  show: {
    opacity: 1,
    x: 0,
  },
};

export default function demo() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div>
      <motion.div
        variants={parent}
        className="flex gap-3"
        ref={ref}
        initial={'hidden'}
        animate={isInView ? 'show' : 'hidden'}
        transition={{ duration: 0.5, staggerChildren:0.2 }}
      >
        {[1, 2, 3].map((i) => {
          return (
            <motion.div
              key={i}
              className="h-52 aspect-square bg-red-400 mr-4 flex"
              variants={child}
            >
              asd
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}













