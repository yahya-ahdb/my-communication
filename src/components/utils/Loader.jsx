import React from "react";
import "./style.css";

function Loader() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        zIndex: 10000000000,
        background: "#000000e0",
        top: 0,
        left: 0,
      }}
    >
      <div className="cube-loader">
  <div className="cube-top"></div>
  <div className="cube-wrapper">
    <span className="cube-span s1">
      <div style={{textAlign : "center" ,fontSize : "90px"}} className="taco-container"><img  src="/logo.svg" /> </div>
    </span>
    <span className="cube-span s2">
      <div style={{textAlign : "center" ,fontSize : "90px"}} className="taco-container"><img  src="/logo.svg" /> </div>
    </span>
    <span className="cube-span s3">
      <div style={{textAlign : "center" ,fontSize : "90px"}} className="taco-container"><img  src="/logo.svg" /> </div>
    </span>
    <span className="cube-span s4">
      <div style={{textAlign : "center" ,fontSize : "90px"}} className="taco-container"><img  src="/logo.svg" /> </div>
    </span>
  </div>
</div>

    </div>
  );
}

export default Loader;
