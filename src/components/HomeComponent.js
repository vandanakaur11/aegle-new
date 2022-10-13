import React from "react";
import "./../style/HomeComponet.scss";
import { Link } from "react-router-dom";

function HomeComponent() {
  return (
    <>
      {/* Accordion section start */}
      {/* <div className="accordionMainContainer"></div> */}
      {/* Accordion section end */}

      <div className="mainContainer">
        <h3 className="FirstHeading">
          Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
        </h3>
        <div className="rowParent">
          {/* First Section start */}
          <div className="row  firstSec" style={{ alignItems: "center" }}>
            <div className="col-lg-6 col-md-8 col-12">
              <div className="leftImage">
                <img src="./img3.svg" alt="" />
              </div>
            </div>
            {/* <div className="col-lg-1 col-md-8 col-12"></div> */}

            <div className="col-lg-6 col-md-8 col-12">
              <div className="rightContent">
                <img src="./icon1.jpg" alt="" />
                <h2>What Is Aegle</h2>
                <p>
                  Pretium quis eu malesuada massa <br /> non nunc morbi eros,
                  lacus
                </p>
                {/* <a href="/WhatIsAegle">Learn More</a> */}
                <Link to="/whatIsAegle">Learn More</Link>
              </div>
            </div>

            <hr
              style={{
                border: "border: 1px solid #E6E6E6",
                width: "70%",
                margin: "100px auto",
              }}
            />
          </div>
          {/* First section end */}

          {/* Second section start */}
          <div
            className="row  firstSec"
            style={{ alignItems: "center", flexDirection: "row-reverse" }}
          >
            <div className="col-lg-6 col-md-8 col-12">
              <div className="leftImage" style={{ textAlign: "left" }}>
                <img src="./img1.svg" className="secondSecTmg" alt="" />
              </div>
            </div>
            {/* <div className="col-lg-2 col-md-8 col-12"></div> */}
            <div className="col-lg-6 col-md-8 col-12">
              <div
                className="rightContent"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "end",
                  margin: "0px 100px",
                }}
              >
                <img src="./icon1.jpg" alt="" />
                <h2>How Aegle Works</h2>
                <p className="secondsecPara">
                  Pretium quis eu malesuada massa <br /> non nunc morbi eros,
                  lacus
                </p>
                <Link to="/HowAegleWorks">Learn More</Link>
              </div>
            </div>

            <hr
              style={{
                border: "border: 1px solid #E6E6E6",
                width: "70%",
                margin: "100px auto",
              }}
            />
          </div>
          {/* second section end */}

          {/* third section start */}
          <div className="row  firstSec" style={{ alignItems: "center" }}>
            <div className="col-lg-6 col-md-8 col-12">
              <div className="leftImage">
                <img src="./img2.svg" alt="" className="thirdSectionImg" />
              </div>
            </div>
            {/* <div className="col-lg-2 col-md-8 col-12"></div> */}

            <div className="col-lg-6 col-md-8 col-12">
              <div className="rightContent">
                <img src="./icon1.jpg" alt="" />
                <h2>Simulate Aegle</h2>
                <p>
                  Pretium quis eu malesuada massa <br /> non nunc morbi eros,
                  lacus
                </p>
                <Link to="/SimulateAegle">Learn More</Link>
              </div>
            </div>
          </div>
          {/* third section end */}
        </div>
      </div>
    </>
  );
}

export default HomeComponent;
