import React, { useState, useEffect } from "react";
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
import "./../style/HowAegleWorks.scss";
import { Link } from "react-router-dom";
import SpinTab from "./../components/SpinTab";

function HowAegleWorks(props) {
    var graphImages = ["graph101.png", "graph102.png", "graph103.png", "graph104.png", "graph105.png", "graph106.png", "graph107.png"];
    const [graphImg, setGraphImg] = useState(graphImages[0]);

    const graphSlide = () => {
        if (graphImg === "graph101.png") {
            setGraphImg("graph102.png");
        }
        if (graphImg === "graph102.png") {
            setGraphImg("graph103.png");
        }
        if (graphImg === "graph103.png") {
            setGraphImg("graph104.png");
        }
        if (graphImg === "graph104.png") {
            setGraphImg("graph105.png");
        }
        if (graphImg === "graph105.png") {
            setGraphImg("graph106.png");
        }
        if (graphImg === "graph106.png") {
            setGraphImg("graph107.png");
        }
    };
    const graphSlideBack = () => {
        if (graphImg === "graph107.png") {
            setGraphImg("graph106.png");
        }
        if (graphImg === "graph106.png") {
            setGraphImg("graph105.png");
        }
        if (graphImg === "graph105.png") {
            setGraphImg("graph104.png");
        }
        if (graphImg === "graph104.png") {
            setGraphImg("graph103.png");
        }
        if (graphImg === "graph103.png") {
            setGraphImg("graph102.png");
        }
        if (graphImg === "graph102.png") {
            setGraphImg("graph101.png");
        }
    };
    return (
        <>
            <Navbar theme="dark" />
            <div className="__HowAegleWorks">
                <h1>How Aegle Works</h1>
                <h3>Lorem ipsum dolor sit amet dolor ipsum dolor sit </h3>
            </div>
            <div className="__How__HowAegleWorks">
                <div className="wrapperMain">
                    <div className="imagee">
                        <div className="left">
                            <h1>Illustrative Example: How Aegle Works</h1>
                        </div>
                        <div className="right" id="right">
                            <a href="#right" className={graphImg === "graph101.png" ? "button yellow" : "button yellowTransparent"}>
                                {graphImg === "graph101.png" ? (
                                    <span onClick={() => setGraphImg("graph102.png")}>Start explanation</span>
                                ) : (
                                    <span onClick={() => setGraphImg("graph101.png")}>Reset</span>
                                )}
                            </a>
                        </div>
                    </div>
                    <div className="innerImg">
                        <img src={graphImg} alt="Graph" />
                        {graphImg !== "graph101.png" && (
                            <div style={{ textAlign: "right", marginTop: "4vh" }}>
                                {graphImg !== "graph101.png" && (
                                    <div className="next-btn-back" onClick={() => graphSlideBack("graph107.png")}>
                                        Back
                                    </div>
                                )}
                                {graphImg !== "graph107.png" ? (
                                    <div className="next-btn-next" onClick={() => graphSlide()}>
                                        Next <img src="Vector.png" className="vector-arrow" />
                                    </div>
                                ) : (
                                    <div className="next-btn-restart" onClick={() => setGraphImg("graph101.png")}>
                                        <img src="Vector2.png" className="vector-arrow2" /> Restart
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <SpinTab />
            <Footer theme="dark" />
        </>
    );
}

export default HowAegleWorks;
