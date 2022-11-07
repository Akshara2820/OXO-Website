import React from 'react'
import styled from "styled-components";
import { BsApple } from "react-icons/bs";
import { DiAndroid } from "react-icons/di";
function AppleAndroid() {
  return (
    <Root>
      <div className="sm:flex  items-center justify-evenly ">
          <div className=" flex flex-col justify-center items-center gap-4 my-6 ">
            <BsApple className="text-[70px] " />
            <div>
              Free downoad <br /> for iPhone
            </div>
          </div>
          <div className='w-full my-6 '>
          <img src="./image/oxo-2.png" alt="loding..." className='m-auto'/>
          </div>
          <div className=" flex flex-col justify-center items-center gap-4 my-6 ">
            <DiAndroid className="text-[70px] " />
            <div>
              Free downoad <br /> for Android
            </div>
          </div>
        </div>
    </Root>
  )
}

export default AppleAndroid
const Root = styled.div`
    max-width: 1530px;
    width: 95%;
    margin: 0px auto;
    padding-top: 30px;
`