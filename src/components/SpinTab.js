import React from "react";
import { Link } from "react-router-dom";
import "./../style/SpinTab.scss";

function SpinTab(props) {
  return (
    <div className="__SpinTab">
      <h1>Interested in lowering your costs?</h1>
      <span>
        <Link to="/simulateAegle" className="button dark">
          Simulate Aegle
        </Link>
        <Link to="/RequestPricing" className="button yellow">
          Request pricing
        </Link>
      </span>
    </div>
  );
}

export default SpinTab;
