import React from "react";
import "./App.css";

const Navbar = () => {
  return (
    //<!-- NAVBAR SECTION -->
    <div className="navbar-container">
      <label for="logo">SABA SUNAWAR</label>
      <div className="navbar">
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#courses">Courses</a>
          </li>
        </ul>
      </div>
      <div className="button">
        <a href="https://github.com/sabasunawar">
          <button id="btn">Account</button>
        </a>
      </div>
    </div>
  );
};
export default Navbar;
