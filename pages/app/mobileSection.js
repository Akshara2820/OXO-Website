import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const boxVariant = {
  visible: {y:0, opacity: 1,  transition: { duration: 0.6 } },
  hidden: {y:100, opacity: 0, }
};
function MobileSection() {
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
    <div className="bg_image">
     <div className="content" >
      <div className="sm:flex">
        <div className="sm:w-[25%] flex flex-col gap-10 md:text-center justify-center sm:text-right">
        <div className="">
            <div className="text-[24px] font-medium my-3 "> Apple AirPlay</div>
            <motion.div className="box" ref={ref} variants={boxVariant} initial="hidden" animate={control} >
            <p className="">
              Each time a digital asset is purchased or sold, Sequoir is donates
              a percentage
            </p>
            </motion.div>
        </div>
        <div className="">
            <div className="text-[24px] font-medium my-3">
              SONOS Wireless HiFi
            </div>
            <motion.div className="box" ref={ref} variants={boxVariant} initial="hidden" animate={control} >
            <p className="">
              Each time a digital asset is purchased or sold, Sequoir is donates
              a percentage
            </p>
            </motion.div>
          </div>
        </div>
          <div className="sm:w-[50%] my-6 lg:my-0 ">
            <motion.div className="box" ref={ref} variants={boxVariant} initial="hidden" animate={control} >
              <img src="./image/oxo-3.png" alt="loding..." className="w-[289px] h-[557px] m-auto"/>
            </motion.div>
          </div>
        <div className="sm:w-[25%] flex flex-col gap-10 md:text-center justify-center sm:text-left">
        <div className="">
            <div className="text-[24px] font-medium my-3">
              Samsung Multiroom
            </div>
            <motion.div className="box" ref={ref} variants={boxVariant} initial="hidden" animate={control} >
            <p className="">
              Each time a digital asset is purchased or sold, Sequoir is donates
              a percentage
            </p>
            </motion.div>
          </div>
          <div className="">
            <div className="text-[24px] font-medium my-3">
              Strategy &amp; Design
            </div>
            <motion.div className="box" ref={ref} variants={boxVariant} initial="hidden" animate={control} >
            <p className="">
              Each time a digital asset is purchased or sold, Sequoir is donates
              a percentage
            </p>
            </motion.div>
          </div>
        </div>
      </div>
     </div>
    </div>
    </Root>
  );
}

export default MobileSection;
const Root = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0px auto ;
  padding: 20px;
  .bg_image{
    background-image: url("./image/oxo-4.png");
    background-repeat: no-repeat;
    position: relative;
    background-position: center;
    background-size: 545px 511px;
    margin: 4rem 0px;
  }
  p {
    font-family: "Poppins", sans-serif;
    color: #c6c6e0;
  }

`;
