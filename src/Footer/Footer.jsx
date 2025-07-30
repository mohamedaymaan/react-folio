import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="secColor text-white text-center p-5 ">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5 className="fs-2">LOCATION</h5>
              <p className="mb-4">2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
            <div className="col-md-4">
              <h5 className="fs-2">AROUND THE WEB</h5>
              <div className="d-flex justify-content-center">
                <i className="fa-brands icon fa-facebook p-3 border border-white rounded-5 mx-2 d-flex justify-content-center align-items-center"></i>
                <i className="fa-brands icon fa-square-x-twitter p-3 border border-white rounded-5 mx-2 d-flex justify-content-center align-items-center"></i>
                <i className="fa-brands icon fa-linkedin p-3 border border-white rounded-5 mx-2 d-flex justify-content-center align-items-center"></i>
                <i className="fa-solid  icon fa-globe p-3 border border-white rounded-5 mx-2 d-flex justify-content-center align-items-center"></i>
              </div>
            </div>
            <div className="col-md-4">
              <h5 className="fs-2">ABOUT FREELANCER</h5>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="copyRights">
        <h6>Copyright © Your Website 2021</h6>
      </div>
    </>
  );
}
