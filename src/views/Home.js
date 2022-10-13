import React, { useState, useEffect } from "react";
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
import SpinTab from "./../components/SpinTab";
import { Link } from "react-router-dom";
import "./../style/Home.scss";
import HomeComponent from "../components/HomeComponent";

function Home(props) {
    const [first, setFirst] = useState(false);
    const [second, setSecond] = useState(false);
    const [third, setThird] = useState(false);
    console.log(first, second, third, "result");
    const setTabs = (str) => {
        if (str === "first" && first !== true) {
            setFirst(true);

            // setSecond(false);
            // setThird(false);
        } else {
            setFirst(false);
        }
        if (str === "second" && second !== true) {
            setSecond(true);
            // setFirst(false);
            // setThird(false);
        } else {
            setSecond(false);
        }
        if (str === "third" && third !== true) {
            setThird(true);
            // setFirst(false);
            // setSecond(false);
        } else {
            setThird(false);
            // check
        }
    };

    return (
        <>
            <Navbar theme="dark" />
            <div className="__Home">
                <div className="mainWrapper">
                    <div className="lower">
                        <div className="wrapper">
                            <div className="left">
                                <div className="leftWrapper">
                                    <h1 className="heading">Stop-loss reinsurance hasn`t changed in decades.</h1>
                                    <h1 className="subheading">We are fixing that.</h1>
                                    <Link to="/requestPricing">
                                        <button className="button">Request Pricing</button>
                                    </Link>
                                    <Link to="/whatIsAegle">
                                        <button className="button empty">Learn More</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="right">
                                <img src="./graph_homepage.svg" alt="homePageGraph" className="homepage-graph-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="__What__Home">
                <div className="wrapperMain" id="wrap">
                    <div className="subtitle">
                        <span className="sub-subtitle">Aegle in a nutshell</span>
                    </div>
                    <p
                        style={{
                            color: "#6F6F6F",
                            fontFamily: "Lato",
                            fontSize: "18px",
                            textAlign: "center",
                            lineHeight: "20px",
                            marginBottom: "50px",
                            fontWeight: "600",
                        }}
                        className="sub-para"
                    >
                        Aegle is a next-generation stop-loss replacement for self-insured employers and health plans.
                    </p>
                    <div className="wrapperDisplay">
                        <div className="wrapperDrawer">
                            <div
                                onClick={() => {
                                    setTabs("first");
                                }}
                                className={first === true ? "itemHover" : "item"}
                            >
                                <div className="ItemImag text-center">
                                    <img src="./tickIcon.jpg" alt="icon" style={{ borderRadius: "50%" }} />
                                </div>
                                <h3>Same Protection as Traditional Stop-Loss</h3>
                                <div className="text-center plusIcon">
                                    {first === false ? (
                                        <a href="#wrap">
                                            <img src="./icon2.jpg" style={{ width: "40px", borderRadius: "50%" }} alt="icon" />
                                        </a>
                                    ) : (
                                        <a href="#wrap">
                                            <img src="./Group137.png" style={{ width: "60px" }} alt="icon" />
                                        </a>
                                    )}
                                </div>
                                {/* <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p> */}
                            </div>
                            <div
                                onClick={() => {
                                    setTabs("second");
                                }}
                                // className="item"
                                className={second === true ? "itemHover" : "item"}
                            >
                                <div className="ItemImag text-center">
                                    <img src="./tickIcon.jpg" alt="icon" style={{ borderRadius: "50%" }} />
                                </div>
                                <h3>20%+ Less Expensive</h3>
                                <div className="text-center plusIcon">
                                    {second === false ? (
                                        <a href="#wrap">
                                            <img src="./icon2.jpg" style={{ width: "40px", borderRadius: "50%" }} alt="icon" />
                                        </a>
                                    ) : (
                                        <a href="#wrap">
                                            <img src="./Group137.png" style={{ width: "60px" }} alt="icon" />
                                        </a>
                                    )}
                                </div>
                                {/* <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p> */}
                            </div>
                            <div
                                onClick={() => {
                                    setTabs("third");
                                }}
                                // className="item"
                                className={third === true ? "itemHover" : "item"}
                            >
                                <div className="ItemImag text-center">
                                    <img src="./tickIcon.jpg" alt="icon" style={{ borderRadius: "50%" }} />
                                </div>
                                <h3>No Lasers or Exclusions, ... Ever!</h3>
                                <div className="text-center plusIcon">
                                    {third === false ? (
                                        <a href="#wrap">
                                            <img src="./icon2.jpg" style={{ width: "40px", borderRadius: "50%" }} alt="icon" />
                                        </a>
                                    ) : (
                                        <a href="#wrap">
                                            <img src="./Group137.png" style={{ width: "60px" }} alt="icon" />
                                        </a>
                                    )}
                                </div>
                                {/* <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p> */}
                            </div>
                        </div>

                        <div className={first === true ? "open-accord-one" : "hide-accord"}>
                            <div className="accordion-container">
                                <div className="accord-content">
                                    <h5 className="accord-heading">Where can I get some?</h5>
                                    <h6 className="accord-para">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                        industry's standard dummy text ever since the 1500s
                                    </h6>
                                </div>
                                <div className="accord-content">
                                    <h5 className="accord-heading">Why do we use it?</h5>
                                    <h6 className="accord-para">
                                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                                        classical Latin literature from 45 BC, making it over 2000 years old
                                    </h6>
                                </div>
                            </div>
                            <div className="accordion-container">
                                <div className="accord-content">
                                    <h5 className="accord-heading">Where does it come from?</h5>
                                    <h6 className="accord-para">
                                        It is a long established fact that a reader will be distracted by the readable content of a page
                                        when looking at its layout.
                                    </h6>
                                </div>
                                <div className="accord-content">
                                    <h5 className="accord-heading">What is Lorem Ipsum?</h5>
                                    <h6 className="accord-para">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                        industry's standard dummy text ever since the 1500s
                                    </h6>
                                </div>
                            </div>
                        </div>

                        <div className={second === true ? "open-accord-two" : "hide-accord"}>
                            <div className="accordion-container">
                                <div className="accord-content">
                                    <h5 className="accord-heading">What is Lorem Ipsum?</h5>
                                    <h6 className="accord-para">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                        industry's standard dummy text ever since the 1500s
                                    </h6>
                                </div>
                                <div className="accord-content">
                                    <h5 className="accord-heading">Why do we use it?</h5>
                                    <h6 className="accord-para">
                                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                                        classical Latin literature from 45 BC, making it over 2000 years old
                                    </h6>
                                </div>
                            </div>
                            <div className="accordion-container">
                                <div className="accord-content">
                                    <h5 className="accord-heading">Where does it come from?</h5>
                                    <h6 className="accord-para">
                                        It is a long established fact that a reader will be distracted by the readable content of a page
                                        when looking at its layout.
                                    </h6>
                                </div>
                                <div className="accord-content">
                                    <h5 className="accord-heading">Where can I get some?</h5>
                                    <h6 className="accord-para">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                        industry's standard dummy text ever since the 1500s
                                    </h6>
                                </div>
                            </div>
                        </div>

                        <div className={third === true ? "open-accord-three" : "hide-accord"}>
                            <div className="accordion-container">
                                <div className="accord-content">
                                    <h5 className="accord-heading">Why do we use it?</h5>
                                    <h6 className="accord-para">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                        industry's standard dummy text ever since the 1500s
                                    </h6>
                                </div>
                                <div className="accord-content">
                                    <h5 className="accord-heading">Where does it come from?</h5>
                                    <h6 className="accord-para">
                                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                                        classical Latin literature from 45 BC, making it over 2000 years old
                                    </h6>
                                </div>
                            </div>
                            <div className="accordion-container">
                                <div className="accord-content">
                                    <h5 className="accord-heading">Where can I get some?</h5>
                                    <h6 className="accord-para">
                                        It is a long established fact that a reader will be distracted by the readable content of a page
                                        when looking at its layout.
                                    </h6>
                                </div>
                                <div className="accord-content">
                                    <h5 className="accord-heading">What is Lorem Ipsum?</h5>
                                    <h6 className="accord-para">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                        industry's standard dummy text ever since the 1500s
                                    </h6>
                                </div>
                            </div>
                        </div>
                        {/* <hr /> */}
                        <div className="wrapperContent">
                            <div className="item">
                                {/* <div className="chunk">
                  <h3>
                    1st Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut.
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut.
                  </p>
                </div> */}
                                {/* <div className="chunk">
                  <h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut.
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut.
                  </p>
                </div> */}
                                {/* <div className="chunk">
                  <h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut.
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut.
                  </p>
                </div> */}
                            </div>

                            <div className="item">
                                {/* <div className="chunk">
                  <h3>
                    2nd Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut.
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut.
                  </p>
                </div> */}
                                {/* <div className="chunk">
                  <h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut.
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut.
                  </p>
                </div> */}
                                {/* <div className="chunk">
                  <h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut.
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut.
                  </p>
                </div> */}
                            </div>

                            <div className="item">
                                {/* <div className="chunk">
                  <h3>
                    3rd Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut.
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut.
                  </p>
                </div> */}
                                {/* <div className="chunk">
                  <h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut.
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut.
                  </p>
                </div> */}
                                {/* <div className="chunk">
                  <h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut.
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut.
                  </p>
                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <HomeComponent />
            </div>
            {/* <SpinTab /> */}
            <Footer theme="dark" />
        </>
    );
}

export default Home;
