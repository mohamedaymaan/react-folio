import React from "react";


export default function About() {
  return (
    <>
      <div className="vh-100 d-flex align-items-center mainColor">
        <div className="content p-5 text-white d-flex flex-wrap justify-content-center align-items-center container">
          <div className="w-100 text-center">
            <h4>ABOUT COMPONENT</h4>
          </div>
          <div className=" col-md-2  d-flex  align-items-center  justify-content-center my-2">
            <div className="shape me-2"></div>
            <i className="fa-solid fa-star" style={{ color: "white" }}></i>
            <div className="shape ms-2"></div>
          </div>
          <div className="d-flex mt-4">
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
