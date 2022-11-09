import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { FaQuoteRight } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const boxVariant = {
  visible: {y:0, opacity: 1, transition: { duration: 0.5 } },
  hidden: {y:100, opacity: 0,  }
};
function MapSection() {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <Root>
    <motion.div ref={ref} variants={boxVariant} initial="hidden"  animate={control}>
      <div className="text-center text-2xl  sm:my-0 sm:text-4xl font-medium">
        25k+ users wordwide <br />
        satisfied for using this great app
      </div>
      </motion.div>
      <div className=" image ">
        <div className="w-full  ">
          <img
            src="./image/oxo-7.png"
            alt="loding..."
            className="m-auto hidden sm:block"
          />
        </div>
        <div className="text_section ">
        <motion.div ref={ref} variants={boxVariant} initial="hidden"  animate={control}>
          <div className="text_">
            <FaQuoteRight className="text-center text-[#da3654] text-[40px] m-auto" />
            <div className="mx-6 sm:mx-0">
              We’ve centralized all of our scientific data. It has significantly
              facilitated deeper insigQhts from data and helped us move.
            </div>
            <span className="mx-6 sm:mx-0">
              <strong> David Muller </strong>, CEO , Rogers
            </span>
          </div>
          </motion.div>
        </div>
      </div>
    </Root>
  );
}

export default MapSection;
const Root = styled.div`
  width: 100%;
  background-color: #1e1528;
  padding: 4rem 0px;
  @media (max-width: 640px) {
    padding: 40px 0px 0px 0px;
  }

  .image {
    position: relative;
  }
  .text_section {
    max-width: 390px;
    text-align: center;
    margin: auto;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    @media (max-width: 640px) {
      position: relative;
      background-color: #1e1528;
      margin: 6rem 0px;
    }
  }
`;
