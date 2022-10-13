import React, { useState, useEffect } from "react";
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
import SpinTab from "./../components/SpinTab";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./../style/WhatIsAegle.scss";

function WhatIsAegle(props) {
    const [first, setFirst] = useState(true);
    const [second, setSecond] = useState(false);
    const [third, setThird] = useState(false);
    const setTabs = (str) => {
        if (str === "first") {
            setFirst(true);
        } else {
            setFirst(false);
        }
        if (str === "second") {
            setSecond(true);
        } else {
            setSecond(false);
        }
        if (str === "third") {
            setThird(true);
        } else {
            setThird(false);
            // check
        }
    };
    return (
        <>
            <Navbar theme="dark" />
            <div className="__WhatIsAegle">
                <h1>What Is Aegle </h1>
                <h3>Lorem ipsum dolor sit amet dolor </h3>
            </div>
            <div className="__What__WhatIsAegle">
                <div className="wrapperMain">
                    <div className="subtitle">Aegle converts the cost of healthcare risk into the cost of capital</div>
                    <div className="wrapperDisplay">
                        <div className="wrapperDrawer">
                            <div
                                onClick={() => {
                                    setTabs("first");
                                }}
                                className={`item ${first ? "active" : ""}`}
                            >
                                <img src="market-analysis 1.png" alt="icon" />
                                <h3>Financial Engineering instead of Insurance</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore.
                                </p>
                            </div>
                            <div
                                onClick={() => {
                                    setTabs("second");
                                }}
                                className={`item ${second ? "active" : ""}`}
                            >
                                <img src="market-analysis 1.png" alt="icon" />
                                <h3>Financial Engineering instead of Insurance</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore.
                                </p>
                            </div>
                            <div
                                onClick={() => {
                                    setTabs("third");
                                }}
                                className={`item ${third ? "active" : ""}`}
                            >
                                <img src="market-analysis 1.png" alt="icon" />
                                <h3>Financial Engineering instead of Insurance</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore .
                                </p>
                            </div>
                        </div>
                        <hr />
                        <div className="wrapperContent">
                            <div className={`item ${first ? "active" : ""}`}>
                                <div className="chunk">
                                    <h3>
                                        1st Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem
                                        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                                    </p>
                                </div>
                                <div className="chunk">
                                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem
                                        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                                    </p>
                                </div>
                                <div className="chunk">
                                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem
                                        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                                    </p>
                                </div>
                            </div>

                            <div className={`item ${second ? "active" : ""}`}>
                                <div className="chunk">
                                    <h3>
                                        2nd Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem
                                        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                                    </p>
                                </div>
                                <div className="chunk">
                                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem
                                        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                                    </p>
                                </div>
                                <div className="chunk">
                                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem
                                        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                                    </p>
                                </div>
                            </div>

                            <div className={`item ${third ? "active" : ""}`}>
                                <div className="chunk">
                                    <h3>
                                        3rd Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem
                                        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                                    </p>
                                </div>
                                <div className="chunk">
                                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem
                                        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                                    </p>
                                </div>
                                <div className="chunk">
                                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem
                                        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Third Section start  */}
                <div className="hsContainer mb-5">
                    <div className="hsMainRow">
                        <div className="row hsRightContent">
                            <div className="col-lg-9">
                                <h1>Start saving now with Aegle</h1>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                    industry's standard dummy text
                                </p>
                            </div>
                            <div className="col-lg-3">
                                <a href="#" className="hsBtnTryIt">
                                    Try it yourself!
                                </a>
                            </div>
                        </div>

                        <div className="row hsTable my-3">
                            <div className="col-lg-3">
                                <div className="hsLefttable">
                                    <h6 className="text-center text-white mt-4">Number of Claims</h6>
                                    <div className="my-2 tableColumn">
                                        <h6>Aegle Savings</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9" style={{ padding: "0px " }}>
                                <div className="hsRihttabl">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-6 col-12">
                                            <p className="text-center rightTbalePara">None</p>
                                            <div className="rightTableData">
                                                <div className="RightTableDataItem">
                                                    <a href="">30-80%+</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-12">
                                            <p className="text-center rightTbalePara">Few</p>
                                            <div className="rightTableData">
                                                <div className="RightTableDataItem">
                                                    <a href="">30-80%+</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-12">
                                            <p className="text-center rightTbalePara">Some</p>
                                            <div className="rightTableData">
                                                <div className="RightTableDataItem">
                                                    <a href="">30-80%+</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-12">
                                            <p className="text-center rightTbalePara">Many</p>
                                            <div className="rightTableData">
                                                <div className="RightTableDataItem">
                                                    <a href="">30-80%+</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Third Section end  */}
            </div>

            <SpinTab />
            <Footer theme="dark" />
        </>
    );
}

export default WhatIsAegle;
