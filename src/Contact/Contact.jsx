import React, { useState } from "react";
import "./Contact.css";


export default function Contact() {
  let [value, setValue] = useState("");
  function handleChange(e) {
    setValue(e.target.value);
  }
  return (
    <>
      <div className="vh-100">
        <div className="text-center sColor mt-4 ">
          <h2 className="fs-1 fw-bold">CONTACT SECTION</h2>
        </div>
        <div className="d-flex justify-content-center align-items-center mb-4 sColor">
          <div className="shape me-2 secColor"></div>
          <i className="fa-solid fa-star sColor"></i>
          <div className="shape ms-2 secColor"></div>
        </div>
        <div className="container my-5">
          <form action="">
            <div className="d-flex flex-wrap justify-content-center position-relative my-5">
              <label
                htmlFor="name"
                className={`position-absolute label-transition ${
                  value ? "labelVisible" : ""
                }`}
              >
                userName:
              </label>
              <input
                onInput={handleChange}
                type="text"
                className="formControl "
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                placeholder="userName"
                id="name"
              />
            </div>
            <div className="d-flex flex-wrap justify-content-center position-relative my-5">
              <label
                htmlFor="age"
                className={`position-absolute label-transition ${
                  value ? "labelVisible" : ""
                }`}
              >
                userAge:
              </label>
              <input
                onInput={handleChange}
                type="text"
                className="formControl "
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                placeholder="userAge"
                id="age"
              />
            </div>
            <div className="d-flex flex-wrap justify-content-center position-relative my-5">
              <label
                htmlFor="email"
                className={`position-absolute label-transition ${
                  value ? "labelVisible" : ""
                }`}
              >
                userEmail:
              </label>
              <input
                onInput={handleChange}
                type="email"
                className="formControl "
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                placeholder="userEmail"
                id="email"
              />
            </div>
            <div className="d-flex flex-wrap justify-content-center position-relative my-5">
              <label
                htmlFor="password"
                className={`position-absolute label-transition ${
                  value ? "labelVisible" : ""
                }`}
              >
                userPassword:
              </label>
              <input
                onInput={handleChange}
                type="password"
                className="formControl "
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                placeholder="userPassword"
                id="password"
              />
            </div>
            <button
              type="button"
              className="mainColor text-white border border-0 rounded p-2 btN"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
