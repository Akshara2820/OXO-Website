import styled from "styled-components";
import { BsApple } from "react-icons/bs";
import { DiAndroid } from "react-icons/di";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const boxVariant = {
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  hidden: { y: 100, opacity: 0 },
};
const AppleVariant = {
  visible: { y: 0, opacity: 1, transition: { duration: 0.7 } },
  hidden: { y: 100, opacity: 0 },
};
const AndroidVariant = {
  visible: { y: 0, opacity: 1, transition: { duration: 0.9 } },
  hidden: { y: 100, opacity: 0 },
};
function AppleAndroid() {
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
      <div className="sm:flex  items-center justify-evenly   ">
        <motion.div
          className="sm:flex  items-center justify-evenly"
          ref={ref}
          variants={AppleVariant}
          initial="hidden"
          animate={control}
        >
          <div className=" flex flex-col justify-center items-center gap-4 my-6 cursor-pointer">
            <BsApple className="text-[70px] " />
            <div>
              Free downoad <br /> for iPhone
            </div>
          </div>
        </motion.div>
        <motion.div
          className="sm:flex  items-center justify-evenly"
          ref={ref}
          variants={boxVariant}
          initial="hidden"
          animate={control}
        >
          <div className="w-full my-6 cursor-pointer">
            <img src="./image/oxo-2.png" alt="loding..." className="m-auto" />
          </div>
        </motion.div>
        <motion.div
          className="sm:flex  items-center justify-evenly"
          ref={ref}
          variants={AndroidVariant}
          initial="hidden"
          animate={control}
        >
          <div className=" flex flex-col justify-center items-center gap-4 my-6 cursor-pointer">
            <DiAndroid className="text-[70px] " />
            <div>
              Free downoad <br /> for Android
            </div>
          </div>
        </motion.div>
      </div>
    </Root>
  );
}

export default AppleAndroid;
const Root = styled.div`
  max-width: 1530px;
  width: 95%;
  margin: 0px auto;
  padding-top: 30px;
`;
