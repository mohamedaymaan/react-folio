import React from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router'
export default function Navbar() {
  return <>
   <nav className="navbar navbar-expand-lg secColor p-4">
  <div className="container">
    <Link className="navbar-brand fs-2 fw-bold text-white" to="/">START  FRAMEWORK</Link>
    <button className="navbar-toggler border-white "  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="fa-solid fa-bars text-white"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold">
        <li className="nav-item">
          <Link className="nav-link mx-2 text-white active" aria-current="page" to="about">ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link mx-2 text-white" to="portfolio">PORTFOLIO</Link>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link mx-2 text-white" to="contact">CONTACT</NavLink>
        </li>
        
      </ul>
    
    </div>
  </div>
</nav>
  </>
  
}
