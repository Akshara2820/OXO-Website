import React from "react";
import styled from "styled-components";

function LatestBlog() {
  return (
    <Root>
      <div className="text-4xl font-medium text-center my-6">
        Latest Blog & Stories
      </div>
      <div className="flex justify-between  items-center mt-12 mx-auto">
        <div>
          <div className="relative">
            <img
              src="./image/oxo-8.jpg"
              alt="loding..."
              className="rounded-xl m-auto"
            />
            <div className="absolute date_button">
              <button className="bg-[#da3654] px-8 py-2 rounded-full">
                05 May,2020
              </button>
            </div>
          </div>
          <div className="text-2xl font-medium my-6">
            See How People Are Using Your Website With Hotjar
          </div>
          <p>
            Each time a digital asset is purchased or sold, Sequoir donates a
            percentage
          </p>
        </div>
        <div>
          <div className="relative">
            <img
              src="./image/oxo-9.jpg"
              alt="loding..."
              className="rounded-xl m-auto"
            />
            <div className="absolute date_button">
              <button className="bg-[#da3654] px-8 py-2 rounded-full">
                05 May,2020
              </button>
            </div>
          </div>
          <div className="text-2xl font-medium my-6">
            See How People Are Using Your Website With Hotjar
          </div>
          <p>
            Each time a digital asset is purchased or sold, Sequoir donates a
            percentage
          </p>
        </div>
        <div>
          <div className="relative">
            <img
              src="./image/oxo-10.jpg"
              alt="loding..."
              className="rounded-xl m-auto"
            />
            <div className="absolute date_button">
              <button className="bg-[#da3654] px-8 py-2 rounded-full">
                05 May,2020
              </button>
            </div>
          </div>
          <div className="text-2xl font-medium my-6">
            See How People Are Using Your Website With Hotjar
          </div>
          <p>
            Each time a digital asset is purchased or sold, Sequoir donates a
            percentage
          </p>
        </div>
      </div>
    </Root>
  );
}

export default LatestBlog;
const Root = styled.div`
  max-width: 1530px;
  width: 95%;
  margin: 0px auto;
  padding: 4rem 0px;
  .date_button {
    bottom: -15px;
    left: 170px;
  }
  p {
    font-size: 14px;
    color: #bdc1c9;
    padding-right: 68px;
  }
  /* @media (max-width:1024px){
      display: unset;
    } */
`;
