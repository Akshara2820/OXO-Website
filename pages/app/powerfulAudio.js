import React, {useRef } from "react";
import styled from "styled-components";
import { TiImage } from "react-icons/ti";
import { BiShuffle } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
const audioVariant = {
    show: { y: 0, opacity: 1,transition: { duration: 0.6} },
    hidden: { y: 100, opacity: 0 },
  };
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
      y: 30,
    },
    show: {
      opacity: 1,
      y: 0,
    },
  };
const Items2 = [
    {
      icon: <TiImage className="text-[#da3654] icon" />,
      title: "Works exactly like original",
      strong:" Apple AirPlay"
    },
    {
      icon: <BiShuffle className="text-[#da3654] icon" />,
      title: "if you are listening to your music",
      strong:" AirAudio recognizes"
    },
    {
      icon: <FaRegStar className="text-[#da3654] icon" />,
      title: "for your favorite receivers",
      strong:"Create shortcuts"
    },
  ];
function PowerfulAudio() {
    const ref = useRef(null);
    const isInView = useInView(ref);
  return (
    <Root>
      <div className="second_section">
        <motion.div
          className="flex md:justify-between justify-center items-center flex-wrap"
            ref={ref}
            variants={parent}
            initial={"hidden"}
            animate={isInView ? "show" : "hidden"}
            transition={{ duration: 0.5, staggerChildren: 0.2 }}
        >
          <div className="text_down">
            <div className="text-4xl my-4 font-medium">
              The most powerful
              <br /> audio streamer for
            </div>
            <p className="text_down">
              Each time a digital asset is purchased or sold,
              <br /> Sequoir donates a percentage of the fees <br />
              back into the development
            </p>
            {Items2.map((i, ind) => {
              return (
                <motion.div key={ind} variants={child}>
                  <div className="flex gap-1 items-center font-['poppins'] my-4">
                    {i.icon}
                    <div>{i.title}<strong>{i.strong}</strong></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
        <motion.div
          className="box"
          ref={ref}
          variants={audioVariant}
          initial={"hidden"}
          animate={isInView ? "show" : "hidden"}
        >
          <img
            src="./image/oxo-6.png"
            alt="loding..."
            className="w-[540px] h-[450px] object-contain m-auto section_"
          />
        </motion.div>
      </div>
    </Root>
  )
}

export default PowerfulAudio
const Root = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0px auto;
  padding: 20px;
  .second_section {
    padding: 50px 0;
    margin: 60px 0px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      margin: 20px 0px;
      color: #c6c6e0;
      font-family: "Poppins", sans-serif;
    }
    @media (max-width: 1024px) {
      display: flex;
      flex-direction: column;
      padding: 0px 2rem;
      .icon {
        font-size: 30px;
      }
    }
  }
`