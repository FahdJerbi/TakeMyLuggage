import React from "react";
import "./Content.css";

function Content() {
  return (
    <div>
      <div className="fold">
        {/* <div className="row"> */}
        <div className="talk">
          <div>
            <h1 className="title">
              Fast, High Fidelity and Secure
              <br />
              Delivery
            </h1>
            {/* <h1>High Fidelity</h1>
            <h1>and Secure</h1>
            <h1>Delivery</h1> */}
          </div>
          {/* <br /> */}
          <h6 className="bold-four">
            the best service guaranteed to deliver your luggage anywhere and
            anytime you want.
          </h6>
          <br />
          <h6>
            <a className="btn btn-dark start start-two" href="#">
              Sign Up
            </a>
          </h6>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Content;
