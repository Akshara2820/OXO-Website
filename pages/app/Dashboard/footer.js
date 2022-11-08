import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";
const headingVariant = {
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  hidden: { y: 100, opacity: 0 },
};
const footerVariant = {
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  hidden: { y: 100, opacity: 0 },
};
function Footer() {
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
      <div className="main_section">
        <div className="lg:flex ">
          <div className="lg:w-[30%] text-center mx-auto">
            <img src="./image/oxo-logo.png" alt="loding.." className="m-auto" />
            <motion.div ref={ref} variants={headingVariant} initial="hidden" animate={control}>
              <div className="my-3 text-[#fff]">Follow us on </div>
            </motion.div>
            <motion.div ref={ref} variants={headingVariant} initial="hidden" animate={control}>
              <div className="flex gap-2 items-center justify-center text-[#a9b2e2] text[20px] my-3 text-center">
                <div className="media_icons">
                  <FaLinkedinIn />
                </div>
                <div className="media_icons">
                  <FaFacebookF />
                </div>
                <div className="media_icons">
                  <FaTwitter />
                </div>
                <div className="media_icons">
                  <AiFillInstagram />
                </div>
              </div>
            </motion.div>
          </div>
          <div className="lg:w-[70%] flex flex-wrap mx-4 justify-between gap-4">
            <motion.div ref={ref} variants={footerVariant} initial="hidden" animate={control}>
              <div>
                <div className="text-[#fff] my-3">
                  <strong>Company</strong>
                </div>
                <div className="my-3">About Us</div>
                <div className="my-3">Features</div>
                <div className="my-3">Pricing</div>
              </div>
            </motion.div>
            <motion.div ref={ref} variants={footerVariant} initial="hidden" animate={control}>
              <div>
                <div className="text-[#fff] my-3">
                  <strong>Products</strong>
                </div>
                <div className="my-3">Blog</div>
                <div className="my-3">Help Center</div>
                <div className="my-3">Contact</div>
              </div>
            </motion.div>
            <motion.div ref={ref} variants={footerVariant} initial="hidden" animate={control}>
              <div>
                <div className="text-[#fff] my-3">
                  <strong>Resources</strong>
                </div>
                <div className="my-3">FAQ'S</div>
                <div className="my-3">Testimonial</div>
                <div className="my-3">Terms & Conditions</div>
              </div>
            </motion.div>
            <motion.div ref={ref} variants={footerVariant} initial="hidden" animate={control}>
              <div>
                <div>
                  <img
                    src="./image/apple_logo.png"
                    alt="loding..."
                    className="m-auto"
                  />
                </div>
                <div className="my-4">
                  <img
                    src="./image/playstor_logo.png"
                    alt="loding..."
                    className="m-auto"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <hr />
      <div className="text-center mt-4 py-6 ">
        © Copyrights 2020 Oxo All rights reserved.
      </div>
    </Root>
  );
}

export default Footer;
const Root = styled.div`
  background-color: #04000f;
  font-family: "Poppins", sans-serif;
  color: #898ba7;
  .main_section {
    max-width: 1530px;
    width: 95%;
    margin: 0px auto;
    padding-top: 80px;
    padding-bottom: 50px;
  }
  .media_icons {
    text-align: -webkit-center;
  }
`;
