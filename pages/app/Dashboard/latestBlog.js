import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
const headingVariant = {
  visible: { opacity: 1,scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 }
};
const boxVariant = {
  visible: {y:0, opacity: 1, transition: { duration: 0.5 } },
  hidden: {y:100, opacity: 0,  }
};
function LatestBlog() {
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
    <motion.div ref={ref} variants={headingVariant} initial="hidden"  animate={control}>
      <div className="text-4xl font-medium text-center my-6 ">
        Latest Blog & Stories
      </div>
      </motion.div>
      <motion.div ref={ref} variants={boxVariant} initial="hidden"  animate={control}>
      <div className="flex flex-wrap sm:justify-between  items-center mt-12 justify-center ">
        <div className="max-w-[300px] m-4">
          <div className="">
            <img src="./image/oxo-8.jpg" alt="loding..." className="rounded-xl m-auto" />
              <button className="date_button">
                05 May,2020
              </button>
          </div>
          <div className="text-2xl font-medium my-6">
            See How People Are Using Your Website With Hotjar
          </div>
          <p>
            Each time a digital asset is purchased or sold, Sequoir donates a
            percentage
          </p>
        </div>
        <div className="max-w-[300px] m-4">
          <div className="">
            <img src="./image/oxo-10.jpg" alt="loding..." className="rounded-xl m-auto" />
              <button className="date_button">
                05 May,2020
              </button>
          </div>
          <div className="text-2xl font-medium my-6">
            See How People Are Using Your Website With Hotjar
          </div>
          <p>
            Each time a digital asset is purchased or sold, Sequoir donates a
            percentage
          </p>
        </div>
        <div className="max-w-[300px] m-4">
          <div className="">
            <img src="./image/oxo-9.jpg" alt="loding..." className="rounded-xl m-auto" />
              <button className="date_button">
                05 May,2020
              </button>
          </div>
          <div className="text-2xl font-medium my-6">
            See How People Are Using Your Website With Hotjar
          </div>
          <p>
            Each time a digital asset is purchased or sold, Sequoir donates a
            percentage
          </p>
        </div>
      </div>
      </motion.div>
    </Root>
  );
}

export default LatestBlog;
const Root = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0px auto;
  padding: 20px;
  padding: 4rem 0px;
  .date_button {
    border-radius: 100px;
    padding: 5px 1rem; 
    background-color: #da3654;
    position: relative;
    top: -18px;
    left:90px;

  }
  p {
    font-size: 14px;
    color: #bdc1c9;
    padding-right: 68px;
  }
  
`;
