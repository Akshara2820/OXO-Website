import React, { useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation, useScroll } from "framer-motion";
import { useInView } from "react-intersection-observer";
const boxVariant = {
  visible: { y: 0, opacity: 1, transition: { duration: 1 } },
  hidden: { y: 100, opacity: 0 },
};
const imageVariant = {
  visible: { y: 10, opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { y: 0, opacity: 0, scale: 0 },
};
const imageVariant1 = {
  visible: { y: 0, x:100, opacity: 1, scale: 1, },
  // visible: { y: 100, x:100, opacity: 1, scale: 1, },
  // hidden: { y:0,  x: 0,opacity: 0, scale: 0  },
  hidden: { y:100,  x: 0,opacity: 0, scale: 0  },
};

function Download() {
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
          <motion.div ref={ref} variants={imageVariant1} initial="hidden" animate={control}
              // whileInView={{ x:0 , y:0 , transition:{duration: 2 } }}
              viewport={{ root: ref }}
          
          >
            <div className="header-area">
              <div className="sass-bg-img"></div>
            </div>
          </motion.div>

          <motion.div ref={ref} variants={boxVariant} initial="hidden" animate={control}>
            <div className="sm:mx-6 flex font-['Roboto'] text-center md:text-start flex-col justify-center sm:items-start items-center lg:max-w-[40%]">
                <h1 className="sm:pt-12">
                  The most powerful audio streamer for devices
                </h1>
              <div className="my-4">
                <button className="bg-[#da3654] px-8 py-2 rounded-full ">
                  Download Now
                </button>
              </div>
            </div>
          </motion.div>
    </Root>
  );
}

export default Download;
const Root = styled.div`


  max-width: 1200px;
  width: 100%;
  margin: 0px auto 50px auto;
  padding: 100px 0px;
  @media (max-width: 768px) {
      padding: 0;
      margin: 0px;
    }

  .sass-bg-img {
    background-image: url("./image/oxo-1.png");
    height: 700px;
    width: 800px;
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    right: 10%;
    z-index: 0;
    margin: auto;
    @media (max-width: 1024px) {
      display: none;
    }
  }
  h1{
    font-size: 60px;
    line-height: 70px;
    font-weight: 500;
    @media (max-width:1024px){
      font-size: 52px;
      line-height: 60px;
    }
    @media (max-width:768px){
      font-size: 48px;
      line-height: 58px;
    }
    @media (max-width:420px){
      font-size: 36px;
      line-height: 46px;
    }
  }
`;
