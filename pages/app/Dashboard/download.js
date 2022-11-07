import React from "react";
import styled from "styled-components";
function Download() {
  return (
    <Root>
      <div className="lg:flex   lg:justify-between">
        <div className="py-[35px] font-['Roboto'] lg:w-[50%]">
          <div className="md:text-7xl text-4xl font-medium my-6 lg:my-16 lg:text-start ">
            The most powerful audio streamer for devices
          </div>
          <div>
            <button className="bg-[#da3654] px-8 py-2 rounded-full ">
              Download Now
            </button>
          </div>
        </div>
        <div className="w-full h-full">
        <img src="./image/oxo-1.png" alt="loding..." className="w-[830px] md:h-[730px] h-[300px]image m-auto object-contain"/>
        </div>
      </div>
    </Root>
  );
}

export default Download;
const Root = styled.div`
  width: 95%;
  margin: 0px auto;
  padding-top: 30px;
  .image {
    animation: MoveUpDown 3s linear infinite;
  }

  @keyframes MoveUpDown {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-100px);
    }
  }
`;
