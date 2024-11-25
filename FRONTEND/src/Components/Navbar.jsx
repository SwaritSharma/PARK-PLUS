import React from "react";
import { useState } from "react";
import { IoCarSportSharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";
import Home from "../Pages/Hero";
import { Link } from "react-router-dom";

function Navbar() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  function toggleNavbar() {
    setMobileDrawerOpen(!mobileDrawerOpen);
  }

  return (
    <div>
      <nav className="nav-container">
        <div className="nav-brand">
          <IoCarSportSharp
            style={{ color: "white", width: "40", height: "40" }}
          ></IoCarSportSharp>
          <b style={{ color: "white", fontSize: "24px", marginLeft: "10px" }}>
            PARK +
          </b>
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <Link to="/">
                <b>Home</b>
              </Link>
            </li>
            <li>
              <a href="">
                <b>About</b>
              </a>
            </li>
            <li>
              <a href="">
                <b>Contact</b>
              </a>
            </li>
            <li>
              <a href="">
                <b>Services</b>
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-actions">
          <Link to="/login">
         
          <button
            className="btn-login"
            style={{ marginRight: "3px", marginLeft: "3px" }}
          >
              <b>Sign In</b>
            
          </button>
          </Link>
          <Link to="/signup">
          
          <button
            className="btn-signup"
            style={{ marginLeft: "3px", marginRight: "3px" }}
          >
            
            <b>Sign Up</b>
         
          </button>
          </Link>
          <button className="btn-menu" onClick={toggleNavbar}>
            {mobileDrawerOpen ? <FaBars></FaBars> : <FaBars />}
          </button>
          {mobileDrawerOpen && (
            <div className="mobile-drawer">
              <ul>
                <li>
                  <Link to="/">
                    <b>Home</b>
                  </Link>
                </li>
                <li>
                  <a href="">
                    <b>About</b>
                  </a>
                </li>
                <li>
                  <a href="">
                    <b>Contact</b>
                  </a>
                </li>
                <li>
                  <a href="">
                    <b>Services</b>
                  </a>
                </li>
              </ul>
              <div className="mobile-drawer-actions">
                <button
                  className="mobile-drawer-btn-signin"
                  style={{ marginRight: "3px", marginLeft: "3px" }}
                >
                  Sign In
                </button>
                <button
                  className="mobile-drawer-btn-signup"
                  style={{ marginLeft: "3px", marginRight: "3px" }}
                >
                  Sign Up
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
