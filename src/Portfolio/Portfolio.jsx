import React, { useState } from "react";
import "./Portfolio.css";
import Port1 from "../assets/poert1.png";
import Port2 from "../assets/port2.png";
import Port3 from "../assets/port3.png";

export default function Portfolio() {
  let [selectedImage, setSelectedImage] = useState(null);

  function handleImage(e) {
    const img = e.currentTarget.querySelector("img"); // always finds the right image
    if (img) {
      setSelectedImage(img.src);
    }
    console.log(e);
  }

  return (
    <>
      <div className="container vh-100 overflow-scroll ">
        <div className="text-center sColor mt-4 ">
          <h2 className="fs-1 fw-bold">PORTFOLIO COMPONENT</h2>
        </div>
        <div className="d-flex justify-content-center align-items-center mb-4 sColor">
          <div className="shape me-2 secColor"></div>
          <i className="fa-solid fa-star sColor"></i>
          <div className="shape ms-2 secColor"></div>
        </div>
        <div className="row g-3">
          <div className="col-md-4">
            <div
              className="card position-relative"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={handleImage}
            >
              <div className="layer">
                <i className="fa-solid fa-plus fa-7x text-white"></i>
              </div>
              <img src={Port1} alt="" className="w-100 rounded" />
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="card position-relative"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={handleImage}
            >
              <div className="layer">
                <i className="fa-solid fa-plus fa-7x text-white"></i>
              </div>
              <img src={Port2} alt="" className="w-100 rounded" />
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="card position-relative"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={handleImage}
            >
              <div className="layer">
                <i className="fa-solid fa-plus fa-7x text-white"></i>
              </div>
              <img src={Port3} alt="" className="w-100 rounded" />
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="card position-relative"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={handleImage}
            >
              <div className="layer">
                <i className="fa-solid fa-plus fa-7x text-white"></i>
              </div>
              <img src={Port1} alt="" className="w-100 rounded" />
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="card position-relative"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={handleImage}
            >
              <div className="layer">
                <i className="fa-solid fa-plus fa-7x text-white"></i>
              </div>
              <img src={Port2} alt="" className="w-100 rounded" />
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="card position-relative"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={handleImage}
            >
              <div className="layer">
                <i className="fa-solid fa-plus fa-7x text-white"></i>
              </div>
              <img src={Port3} alt="" className="w-100 rounded" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-body p-0">
              <img src={selectedImage} alt="" className="w-100" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
