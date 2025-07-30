import React from "react";
import "./Home.css";
import avatar from "../assets/avataaars.svg";

export default function Home() {
  return (
    <>
      <div className="mainColor">
        <div className="vh-100 d-flex flex-wrap justify-content-center align-items-center text-white">
          <div className="item text-center">
            <img src={avatar} className="w-75" alt="" />
            <div>
              <h2 className="fs-1 my-2">START FRAMEWORK</h2>
            </div>
            <div className="d-flex flex-wrap align-items-center justify-content-center my-2">
              <div className="shape me-2"></div>
              <i className="fa-solid fa-star" style={{ color: "white" }}></i>
              <div className="shape ms-2"></div>
            </div>
            <div>
              <p>Graphic Artist - Web Designer - Illustrator</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
