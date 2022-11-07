import React from "react";
import styled from "styled-components";
import {FaQuoteRight} from 'react-icons/fa'
function MapSection() {
  return (
    <Root>
      <div className="text-center text-2xl my-8 sm:my-0 sm:text-4xl font-medium">
        25k+ users wordwide <br />
        satisfied for using this great app
      </div>
      <div className=" image ">
      <div className="w-full hidden sm:block">
        <img src="./image/oxo-7.png" alt="loding..." className="m-auto "/>
        </div>
        <div className="text_section">
          <FaQuoteRight className="text-center text-[#da3654] text-[40px] m-auto"/>
          <div className="mx-6 sm:mx-0">We’ve centralized all of our scientific data. It has significantly facilitated deeper insigQhts from data and helped us move.</div>
          <span  className="mx-6 sm:mx-0"> <strong> David Muller </strong>, CEO , Rogers</span>
        </div>
      </div>
    </Root>
  );
}

export default MapSection;
const Root = styled.div`
  width: 100%;
  background-color: #1e1528;
  padding: 4rem 0px;

  .image{
    position: relative;
  }
  .text_section {
  max-width: 390px;
  text-align: center;
  margin: auto;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  @media(max-width:640px)
  {
    position: relative;
    background-color: #1e1528;
  }
}
 
`;
