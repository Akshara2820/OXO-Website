import React from "react";
import styled from "styled-components";
function MobileSection() {
  return (
    <Root>
      <div className="lg:flex items-center gap-6 ">
        <div className="lg:w-[25%] flex flex-col gap-10 text-center lg:text-right">
          <div className="">
            <div className="text-[24px] font-medium my-3 "> Apple AirPlay</div>
            <p className="">
              Each time a digital asset is purchased or sold, Sequoir is donates
              a percentage
            </p>
          </div>
          <div className="">
            <div className="text-[24px] font-medium my-3">
             
              SONOS Wireless HiFi
            </div>
            <p className="">
              Each time a digital asset is purchased or sold, Sequoir is donates
              a percentage
            </p>
          </div>
        </div>
        <div className="lg:w-[50%] relative">
          <div className="w-full">
            <div className="h-full w-full my-[7rem]">
              <img
                src="./image/oxo-4.png"
                alt="loding..."
                className="h-[400px] w-[450px] lg:w-full lg:h-full  m-auto"
              />
            </div>
          </div>
          <div className="mobile_image ">
            <img
              src="./image/oxo-3.png"
              alt="loding..."
              className="mobile_iamge h-full w-full"
            />
          </div>
        </div>
        <div className="lg:w-[25%] flex flex-col gap-10 text-center lg:text-left">
          <div className="">
            <div className="text-[24px] font-medium my-3">
              Samsung Multiroom
            </div>
            <p className="">
              Each time a digital asset is purchased or sold, Sequoir is donates
              a percentage
            </p>
          </div>
          <div className="">
            <div className="text-[24px] font-medium my-3">
              Strategy &amp; Design
            </div>
            <p className="">
              Each time a digital asset is purchased or sold, Sequoir is donates
              a percentage
            </p>
          </div>
        </div>
      </div>
    </Root>
  );
}

export default MobileSection;
const Root = styled.div`
  max-width: 1530px;
  width: 1200px;
  margin: 0px auto;
  padding: 6rem 0px;
  .bg_image {
    width: 100%;
    height: 100%;
  }
  .mobile_image {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  p {
    font-family: "Poppins", sans-serif;
    color: #c6c6e0;
  }
`;
