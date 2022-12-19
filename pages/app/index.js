import React from "react";
import styled from "styled-components";
import MobileSection from "./mobileSection";
import EnjoyMusic from "./enjoyMusic";
import MapSection from "./mapSection";
import LatestBlog from "./latestBlog";
import Footer from "./footer";
import Header from "./header";
import Download from "./download";
import Stream from "./stream";
import AppleAndroid from "./appleAndroid";
import PowerfulAudio from "./powerfulAudio";
function Dashboard() {
  return (
    <div>
     <Root>
      <div className="main_section">
        <Header/>
        <Download/>
        <AppleAndroid/>
        <Stream />
      </div>
      <MobileSection />
      <EnjoyMusic />
      <PowerfulAudio/>
      <MapSection />
      <LatestBlog />
      <Footer />
    </Root>
    </div>
  )
}

export default Dashboard
const Root = styled.div`
  .main_section {
    max-width: 1530px;
    width: 100%;
    margin: 0px auto;
    padding-top: 30px;
  }
`