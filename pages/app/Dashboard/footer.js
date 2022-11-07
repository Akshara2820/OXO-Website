import React from "react";
import styled from "styled-components";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <Root>
      <div className="main_section">
        <div className="lg:flex ">
          <div className="lg:w-[30%]">
            <img src="./image/oxo-logo.png" alt="loding.." />
            <div className="my-3 text-[#fff]">Follow us on </div>
            <div className="lg:flex gap-2 items-center text-[#a9b2e2] text[20px] my-3">
              <FaLinkedinIn />
              <FaFacebookF />
              <FaTwitter />
              <AiFillInstagram />
            </div>
          </div>
          <div className="w-[70%] flex justify-between gap-4">
            <div>
              <div className="text-[#fff] my-3">
                <strong>Company</strong>
              </div>
              <div className="my-3">About Us</div>
              <div className="my-3">Features</div>
              <div className="my-3">Pricing</div>
            </div>

            <div>
              <div className="text-[#fff] my-3">
                <strong>Products</strong>
              </div>
              <div className="my-3">Blog</div>
              <div className="my-3">Help Center</div>
              <div className="my-3">Contact</div>
            </div>

            <div>
              <div className="text-[#fff] my-3">
                <strong>Resources</strong>
              </div>
              <div className="my-3">FAQ'S</div>
              <div className="my-3">Testimonial</div>
              <div className="my-3">Terms & Conditions</div>
            </div>

            <div>
              <div>
                <img src="./image/apple_logo.png" alt="loding..." />
              </div>
              <div className="my-4">
                <img src="./image/playstor_logo.png" alt="loding..." />
              </div>
            </div>
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
    /* max-width: 1530px;
    width: 1200px;
    margin: 0px auto;
    padding-top: 80px;
    padding-bottom: 50px; */
  }
`;
