import React from "react";
import Navbar from "./../components/Navbar";
import "./../style/About.scss";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function About() {
    return (
        <>
            <Navbar theme="dark" />
            {/* first section start */}
            <div className="__About">
                <div className="mainWrapper">
                    <div className="lower">
                        <div className="wrapper">
                            <div className="left">
                                <div className="leftWrapper">
                                    <h1 className="heading">About us</h1>
                                    <h4 className="subheading">
                                        Lorem ipsum dolor sit amet consectetur <br />
                                        adipisicing elit. excepturi!
                                    </h4>
                                    {/* <Link to="/requestPricing">
                    <button className="button">Request Pricing</button>
                  </Link> */}
                                    {/* <Link to="/whatIsAegle">
                    <button className="button empty">Learn More</button>
                  </Link> */}
                                </div>
                            </div>
                            <div className="right">
                                <div className="imageContainer">
                                    <p>Photo of the team</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* First section end */}
            </div>

            {/* second section start */}
            <div className="secondAboutSec">
                <div className="aboutContent">
                    <h1>Our values</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="aboutBox">
                            <img src="./icon1.jpg" alt="" />
                            <h1>Value #1</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, ex! Corrupti maiores iusto</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="aboutBox">
                            <img src="./icon1.jpg" alt="" />
                            <h1>Value #2</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, ex! Corrupti maiores iusto</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="aboutBox">
                            <img src="./icon1.jpg" alt="" />
                            <h1>Value #3</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, ex! Corrupti maiores iusto</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* second section end */}

            {/* Third Section start */}
            <div className="aboutThirdSecContainer">
                <div className="aboutThirsSectioninner">
                    <h1>The people behind Aegle Health Partners</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="personBox">
                                <p>person #1</p>
                            </div>
                            <div className="pesonTitle">
                                <h2>John Doe</h2>
                                <h3>Role</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="personBox">
                                <p>person #2</p>
                            </div>
                            <div className="pesonTitle">
                                <h2>John Doe</h2>
                                <h3>Role</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="personBox">
                                <p>person #3</p>
                            </div>
                            <div className="pesonTitle">
                                <h2>John Doe</h2>
                                <h3>Role</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="personBox">
                                <p>person #4</p>
                            </div>
                            <div className="pesonTitle">
                                <h2>John Doe</h2>
                                <h3>Role</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Third Section end */}
            <Footer theme="dark" />
        </>
    );
}

export default About;
