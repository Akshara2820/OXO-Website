import React from "react";
import styled from "styled-components";
import { FaHeadphonesAlt } from "react-icons/fa";
import { BiShuffle, BiAlignLeft } from "react-icons/bi";

function Stream() {
  return <Root>
     <div className="bg-[#1e1528] py-16 md:px-14 my-20">
          <div className="text-4xl text-center font-medium">
            Use & stream your favorite <br /> music apps!
          </div>
          <div className="flex flex-wrap  justify-center">
            <div class="flex flex-col gap-4 items-center single_icon_box">
              <div class="icon">
                <div class="shape"></div>
                <BiShuffle className="text-[45px] text-[#da3654] m-6" />
              </div>
              <div className="title text-2xl text-lef">Works in background</div>
              <div className="desc text-base text-lef">
                Each time a digital asset is <br />
                purchased or sold, Sequoir <br />
                is donates a percentage
              </div>
            </div>
            <div class="flex flex-col gap-4 items-center single_icon_box">
              <div class="icon">
                <div class="shape"></div>
                <BiAlignLeft className="text-[45px] text-[#da3654] m-6" />
              </div>
              <div className="title text-2xl text-lef">Beautiful widgets</div>
              <div className="desc text-base text-lef">
                Each time a digital asset is <br />
                purchased or sold, Sequoir <br />
                is donates a percentage
              </div>
            </div>
            <div class="flex flex-col gap-4 items-center single_icon_box">
              <div class="icon">
                <div class="shape"></div>
                <FaHeadphonesAlt className="text-[45px] text-[#da3654] m-6" />
              </div>
              <div className="title text-2xl text-lef">Stream any receiver</div>
              <div className="desc text-base text-lef">
                Each time a digital asset is <br />
                purchased or sold, Sequoir <br />
                is donates a percentage
              </div>
            </div>
          </div>
        </div>
  </Root>;
}

export default Stream;

const Root = styled.div`
  max-width: 1530px;
  width: 95%;
  margin: 0px auto;
  padding-top: 30px;
  .single_icon_box {
    background-color: transparent;
    text-align: center;
    padding: 50px;
    position: relative;
    z-index: 0;
    overflow: hidden;
    transition: all 0.3s;
    @media (max-width:768px){
      padding: 10px;
    }
  }
  .icon {
    background-color: #120428;
    height: 99px;
    width: 100px;
    border-radius: 70% 30% 36% 64%/69% 45% 55% 31%;
    color: #da3654;
    position: relative;
    overflow: hidden;
  }
  .shape {
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
    z-index: 0;
    transition: all 0.3s;
  }
`;
