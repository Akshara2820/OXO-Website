import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { FaHeadphonesAlt } from "react-icons/fa";
import { BiShuffle, BiAlignLeft } from "react-icons/bi";
import { motion, useAnimation } from "framer-motion";
const boxVariant = {
  visible: {y:0, opacity: 1,  transition: { duration: 1 } },
  hidden: {y:100, opacity: 0, }
};
const ShuffleVariant = {
  visible: {y:0, opacity: 1,  transition: { duration: 2 } },
  hidden: {y:100, opacity: 0, }
};
const MenuVariant = {
  visible: {y:0, opacity: 1,  transition: { duration: 2 } },
  hidden: {y:100, opacity: 0, }
};const MusciVariant = {
  visible: {y:0, opacity: 1,  transition: { duration: 2 } },
  hidden: {y:100, opacity: 0, }
};

function Stream() {
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
      <div className="bg-[#1e1528] py-16 md:px-14 my-20 footer__inner">
      <motion.div className="box" ref={ref} variants={boxVariant} initial="hidden" animate={control} >
        <div className="sm:text-4xl my-6 mx-4 text-2xl text-center font-medium ">
          Use & stream your favorite  music apps!
        </div>
        </motion.div>
        <div className="flex flex-wrap  justify-center section_">
         <motion.div className="box" ref={ref} variants={ShuffleVariant} initial="hidden" animate={control} >
          <div class="flex flex-col gap-4 items-center single_icon_box">
            <div class="icon">
              <div class="shape"></div>
              <BiShuffle className="text-[45px] text-[#da3654] m-6" />
            </div>
            <div className="title text-2xl text-lef">Works in background</div>
            <div className="desc text-base text-lef">
              Each time a digital asset is <br />
              purchased or sold, Sequoir <br />
              is donates a percentage
            </div>
          </div>
          </motion.div>
          <motion.div className="box" ref={ref} variants={MenuVariant} initial="hidden" animate={control} >
          <div class="flex flex-col gap-4 items-center single_icon_box">
            <div class="icon">
              <div class="shape"></div>
              <BiAlignLeft className="text-[45px] text-[#da3654] m-6" />
            </div>
            <div className="title text-2xl text-lef">Beautiful widgets</div>
            <div className="desc text-base text-lef">
              Each time a digital asset is <br />
              purchased or sold, Sequoir <br />
              is donates a percentage
            </div>
          </div>
          </motion.div>
          <motion.div className="box" ref={ref} variants={MusciVariant} initial="hidden" animate={control} >
          <div class="flex flex-col gap-4 items-center single_icon_box">
            <div class="icon">
              <div class="shape"></div>
              <FaHeadphonesAlt className="text-[45px] text-[#da3654] m-6" />
            </div>
            <div className="title text-2xl text-lef">Stream any receiver</div>
            <div className="desc text-base text-lef">
              Each time a digital asset is <br />
              purchased or sold, Sequoir <br />
              is donates a percentage
            </div>
          </div>
          </motion.div>
        </div>
      </div>
     
    </Root>
  );
}

export default Stream;

const Root = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0px auto;
  padding: 20px;
  position: relative;
  .single_icon_box {
    background-color: transparent;
    text-align: center;
    padding: 50px;
    position: relative;
    z-index: 0;
    overflow: hidden;
    transition: all 0.3s;
    @media (max-width: 768px) {
      padding: 10px;
    }
  }
  .icon {
    background-color: #120428;
    height: 99px;
    width: 100px;
    border-radius: 70% 30% 36% 64%/69% 45% 55% 31%;
    color: #da3654;
    position: relative;
    overflow: hidden;
  }
  .shape {
    background-image: url("./image/oxo-icon.png");
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    top: 0;
    left: -15px;
  }

  .icon::after {
    content: "";
    position: absolute;
    width: 38px;
    height: 38px;
    background-color: #4f00ad;
    border-radius: 50%;
    top: 73px;
    left: 60px;
    z-index: 0;
    transition: all 0.3s;
  }
`;
