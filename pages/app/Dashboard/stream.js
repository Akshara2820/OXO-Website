import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { FaHeadphonesAlt } from "react-icons/fa";
import { BiShuffle, BiAlignLeft } from "react-icons/bi";
import { motion, useInView } from "framer-motion";
const parent = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};
const child = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};
const Items = [
  {
    icon: <BiShuffle className="text-[45px] text-[#da3654] m-6" />,
    title: "Beautiful widgets",
  },
  {
    icon: <BiAlignLeft className="text-[45px] text-[#da3654] m-6" />,
    title: "Works in background",
  },
  {
    icon: <FaHeadphonesAlt className="text-[45px] text-[#da3654] m-6" />,
    title: "Stream any receiver",
  },
];
const mainVariant = {
  visible: {y:0, opacity: 1,  transition: { duration: 0.4, staggerDirection: 0.8 } },
  hidden: {y:100, opacity: 0, }
};
const boxVariant = {
  visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
  hidden: { y: 100, opacity: 0 },
};
function Stream() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <Root>
      <motion.div variants={mainVariant} animate={isInView ? "show" : "hidden"} className="bg-[#1e1528] py-16 md:px-14 my-20 footer__inner" >
        <motion.div className="box" ref={ref} variants={boxVariant}>
          <div className="sm:text-4xl my-6 mx-4 text-2xl text-center font-medium ">
            Use & stream your favorite music apps!
          </div>
        </motion.div>
        <motion.div variants={parent}    className="flex md:justify-between justify-center items-center flex-wrap"  ref={ref}  initial={"hidden"} animate={isInView ? "show" : "hidden"} transition={{ duration: 0.5, staggerChildren: 0.2 }} >
        {Items.map((i, ind) => {
          return (
            <motion.div key={ind} variants={child}>
              <div class="flex flex-col gap-4 items-center single-icon-box-08">
                <div class="icon">
                  <div class="shape"></div>
                  {i.icon}
                </div>
                <div className="title text-2xl text-lef">{i.title}</div>
                <div className="desc text-base text-lef">
                  Each time a digital asset is <br />
                  purchased or sold, Sequoir <br />
                  is donates a percentage
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      </motion.div>
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
  .single-icon-box-08 {
    background-color: transparent;
    text-align: center;
    padding: 50px;
    position: relative;
    z-index: 0;
    transition: all 0.3s;
    @media (max-width: 768px) {
      padding: 10px;
    }
  }
  .single-icon-box-08 .icon {
    background-color: #120428;
    height: 99px;
    width: 100px;
    text-align: center;
    margin: 0 auto;
    border-radius: 70% 30% 36% 64%/69% 45% 55% 31%;
    font-size: 45px;
    line-height: 100px;
    color: #da3654;
    margin-bottom: 28px;
    position: relative;
    z-index: -1;
    overflow: hidden;
  }
  .single-icon-box-08 .icon .shape {
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
  }
`;
