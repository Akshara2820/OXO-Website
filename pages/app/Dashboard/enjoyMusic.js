import React from "react";
import styled from "styled-components";
import { MdWifi } from "react-icons/md";
import { FaMusic, FaRegStar } from "react-icons/fa";
import{TiImage} from 'react-icons/ti'
import{BiShuffle} from 'react-icons/bi'
function EnjoyMusic() {
  return (
    <Root>
      <div className="first_section">
        <img
          src="./image/oxo-5.png"
          alt="loding..."
          className="w-[540px] h-[450px] object-contain m-auto"
        />
        <div>
          <div className="text-4xl my-4 font-medium">
            Enjoy your music <br />
            everywhere!
          </div>
          <p>
            Each time a digital asset is purchased or sold,
            <br /> Sequoir donates a percentage of the fees <br />
            back into the development
          </p>
          <div className="flex gap-1 items-center font-['poppins'] my-4">
            <MdWifi className="text-[#da3654] icon"  />
            <div>
              Works exactly like original <strong> Apple AirPlay</strong>
            </div>
          </div>
          <div className="flex gap-1 items-center my-4">
            <FaMusic className="text-[#da3654] icon" />
            <div>
              <strong> AirAudio recognizes </strong> if you are listening to
              your music
            </div>
          </div>
          <div className="flex gap-1 items-center my-4">
            <FaRegStar className="text-[#da3654] icon" />
            <div>
              <strong> Create shortcuts </strong>for your favorite receivers
            </div>
          </div>
        </div>
      </div>

      <div className="second_section">
        <div>
          <div className="text-4xl my-4 font-medium">
          The most powerful<br/> audio streamer for
          </div>
          <p>
            Each time a digital asset is purchased or sold,
            <br /> Sequoir donates a percentage of the fees <br />
            back into the development
          </p>
          <div className="flex gap-1 items-center font-['poppins'] my-4">
            <TiImage className="text-[#da3654] icon" />
            <div>
              Works exactly like original <strong> Apple AirPlay</strong>
            </div>
          </div>
          <div className="flex gap-1 items-center my-4">
            <BiShuffle className="text-[#da3654] icon" />
            <div>
              <strong> AirAudio recognizes </strong> if you are listening to
              your music
            </div>
          </div>
          <div className="flex gap-1 items-center my-4">
            <FaRegStar className="text-[#da3654] icon" />
            <div>
              <strong> Create shortcuts </strong>for your favorite receivers
            </div>
          </div>
        </div>
        <img src="./image/oxo-6.png"   alt="loding..." className="w-[540px] h-[450px] object-contain m-auto"/>
      </div>
    </Root>
  );
}

export default EnjoyMusic;
const Root = styled.div`
 max-width: 1530px;
  width: 95%;
  margin: 0px auto;
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
