import { MdWifi } from "react-icons/md";
import { FaMusic, FaRegStar } from "react-icons/fa";
import{TiImage} from 'react-icons/ti'
import{BiShuffle} from 'react-icons/bi'
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";

const boxVariant = {
  visible: {y:0, opacity: 1,  transition: { duration: 1 } },
  hidden: {y:100, opacity: 0, }
};
const audioVariant = {
  visible: {y:0, opacity: 1,  transition: { duration: 2 } },
  hidden: {y:100, opacity: 0, }
};

function EnjoyMusic() {
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
      <div className="first_section">
      <motion.div className="box" ref={ref} variants={boxVariant} initial="hidden" animate={control} >
        <img
          src="./image/oxo-5.png"
          alt="loding..."
          className="w-[540px] h-[450px] object-contain m-auto section_image"
        />
      </motion.div>
      <motion.div className="box" ref={ref} variants={boxVariant} initial="hidden" animate={control} >
        <div className="text_">
          <div className="text-4xl my-4 font-medium text_">
            Enjoy your music <br />
            everywhere!
          </div>
          <p className="text_">
            Each time a digital asset is purchased or sold,
            <br /> Sequoir donates a percentage of the fees <br />
            back into the development
          </p>
          <motion.div className="box" ref={ref} variants={boxVariant} initial="hidden" animate={control} >
          <div className="flex gap-1 items-center font-['poppins'] my-4 ">
            <MdWifi className="text-[#da3654] icon"  />
            <div>
              Works exactly like original <strong> Apple AirPlay</strong>
            </div>
          </div>
          </motion.div>
          <motion.div className="box" ref={ref} variants={boxVariant} initial="hidden" animate={control} >
          <div className="flex gap-1 items-center my-4 ">
            <FaMusic className="text-[#da3654] icon" />
            <div>
              <strong> AirAudio recognizes </strong> if you are listening to
              your music
            </div>
          </div>
          </motion.div>
          <motion.div className="box" ref={ref} variants={boxVariant} initial="hidden" animate={control} >
          <div className="flex gap-1 items-center my-4 ">
            <FaRegStar className="text-[#da3654] icon" />
            <div>
              <strong> Create shortcuts </strong>for your favorite receivers
            </div>
          </div>
          </motion.div>
        </div>
        </motion.div>
      </div>

      <div className="second_section">
        <motion.div className="box" ref={ref} variants={audioVariant} initial="hidden" animate={control} >
        <div className="text_down">
          <div className="text-4xl my-4 font-medium">
          The most powerful<br/> audio streamer for
          </div>
          <p className="text_down">
            Each time a digital asset is purchased or sold,
            <br /> Sequoir donates a percentage of the fees <br />
            back into the development
          </p>
          <motion.div className="box" ref={ref} variants={audioVariant} initial="hidden" animate={control} >
          <div className="flex gap-1 items-center font-['poppins'] my-4">
            <TiImage className="text-[#da3654] icon" />
            <div>
              Works exactly like original <strong> Apple AirPlay</strong>
            </div>
          </div>
          </motion.div>
          <motion.div className="box" ref={ref} variants={audioVariant} initial="hidden" animate={control} >
          <div className="flex gap-1 items-center my-4">
            <BiShuffle className="text-[#da3654] icon" />
            <div>
              <strong> AirAudio recognizes </strong> if you are listening to
              your music
            </div>
          </div>
          </motion.div>
          <motion.div className="box" ref={ref} variants={audioVariant} initial="hidden" animate={control} >
          <div className="flex gap-1 items-center my-4">
            <FaRegStar className="text-[#da3654] icon" />
            <div>
              <strong> Create shortcuts </strong>for your favorite receivers
            </div>
          </div>
          </motion.div>
        </div>
        </motion.div>
        <motion.div className="box" ref={ref} variants={audioVariant} initial="hidden" animate={control} >
        <img src="./image/oxo-6.png"   alt="loding..." className="w-[540px] h-[450px] object-contain m-auto section_"/>
        </motion.div>
      </div>
    </Root>
  );
}

export default EnjoyMusic;
const Root = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0px auto;
  padding: 20px;
  .first_section {
    background-color: #04000f;
    padding: 50px 0;
    border-radius: 10px;
    display: flex;
    justify-content: space-evenly;
    gap: 3rem;
    align-items: center;
    p {
      margin: 20px 0px;
      color: #c6c6e0;
      font-family: "Poppins", sans-serif;
    }
    @media (max-width:1024px){
      display: flex;
      flex-direction: column;
      background-color: #04000f;
      padding: 0px 2rem;
      .icon{
        font-size: 30px;
      }
    }
  
  }
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
    @media (max-width:1024px){
      display: flex;
      flex-direction: column;
      padding: 0px 2rem;
      .icon{
        font-size: 30px;
      }
    }
  }
  
`;
