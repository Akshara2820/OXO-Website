import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
const boxVariant = {
  visible: {y:0, opacity: 1, transition: { duration: 0.5 } },
  hidden: {y:100, opacity: 0,  }
};
const imageVariant = {
  visible: {y:0, opacity: 1,scale: 1, transition: { duration: 0.5 } },
  hidden: {y:0, opacity: 0,scale: 0,  }
};
function Download() {
  const control = useAnimation();
  const [ref, inView] = useRef();

  useEffect(() => {
    if (inView) {
      control.start("hidden");
    } else {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <Root>
      <motion.div ref={ref} variants={boxVariant} initial="hidden"  animate={control}>
      <div className="lg:flex   lg:justify-between">
        <div className="py-[35px] font-['Roboto'] my-auto">
          <motion.div ref={ref} variants={boxVariant} initial="hidden"  animate={control}>
          <div className="flex flex-col justify-center sm:items-start items-center">
          <div id="divTAReviews" className="text-4xl  md:text-6xl font-medium my-6 lg:my-16 lg:text-start container sm:w-[70%]">
            The most powerful audio streamer for devices
          </div>
          <div className="">
            <button className="bg-[#da3654] px-8 py-2 rounded-full ">
              Download Now
            </button>
          </div>
          </div>
          </motion.div>
        </div>
        <motion.div ref={ref} variants={imageVariant} initial="hidden"  animate={control}>
        <div className="w-full h-full zoom-in-out-box lg:block hidden ">
        <img src="./image/oxo-1.png" alt="loding..." className="w-full md:h-[730px] h-[300px]image m-auto object-contain"/>
        </div>
        </motion.div>
      </div>
      </motion.div>
    </Root>
  );
}

export default Download;
const Root = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0px auto;
  padding: 20px;

 
`;
