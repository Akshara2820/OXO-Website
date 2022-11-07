import React, { useState } from "react";
import styled from "styled-components";
import { FaAngleDown } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
function Header() {
  // const [open, setOpen] = useState(true);
  return (
    <Root>
      <div className="flex justify-between">
        <img  src="./image/oxo-logo.png" alt="loding..." className="object-contain" />
        <div className="hidden text-[14px] lg:flex gap-12 items-center font-semibold font-['Poppins']">
          <div className="flex gap-8 items-center">
            <div className="flex items-center gap-1">
              <span>Home </span>
              <FaAngleDown />
            </div>
            <div className="flex items-center gap-1">
              <span>Pages </span>
              <FaAngleDown />
            </div>
            <div>Feature</div>
            <div>Overview</div>
            <div>Pricing</div>
            <div>FAQ'S</div>
          </div>
          <div>
            <button className="bg-[#da3654] px-8 py-2 rounded-full">
              Get Started
            </button>
          </div>
        </div>
        <AiOutlineMenu className="lg:hidden block text-4xl rounded py-1  border bg-white text-black"/>
      </div>
      
    </Root>
  );
}

export default Header;
const Root = styled.div`
  width: 95%;
  margin: 0px auto;
  padding-top: 30px;
`;
