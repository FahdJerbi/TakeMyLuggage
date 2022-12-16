import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light static-top header-a">
      <div className="container nav-container">
        <a className="navbar-brand brand" href="#">
          TakeMyLuggage
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse alink"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item ">
              <a
                className="nav-link "
                href="#Features"
                // id="navbarDropdown"
                // role="button"
                // data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Features
              </a>
            </li>

            <li className="nav-item active">
              <a className="nav-link" href="#">
                Services <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">
                Sign in 
              </a>
            </li>

            <a className="btn btn-outline-dark start" href="/register">
              Sign Up
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
