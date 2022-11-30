import React from "react";
import HandshakeIcon from "@mui/icons-material/Handshake";
import SafetyCheckIcon from "@mui/icons-material/SafetyCheck";
import ApartmentIcon from "@mui/icons-material/Apartment";
import "./Features.css";

function Features() {
  return (
    <div>
      {/* <section className="features-icons bg-light text-center det-ails"> */}
      <div className="features-container">
        <div className="row features-content">
          <div className="col-lg-4 features">
            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
              {/* <div className="features-icons-icon d-flex  icon-bra-ails">
                <i className="icon-screen-desktop m-auto text-primary icon-ails"></i>
              </div> */}
              <SafetyCheckIcon />
              <h5>Shield icon</h5>
              <p className="lead mb-0">
                Secure, Fast operations are guaranteed.
              </p>
            </div>
          </div>
          <div className="col-lg-4 features">
            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
              {/* <div className="features-icons-icon d-flex  icon-bra-ails">
                <i className="icon-layers m-auto text-primary icon-ails"></i>
              </div> */}
              <HandshakeIcon />
              <h5>Shield icon</h5>
              <p className="lead mb-0">Security, Trust.</p>
            </div>
          </div>
          <div className="col-lg-4 features">
            <div className="features-icons-item mx-auto mb-0 mb-lg-3">
              {/* <div className="features-icons-icon d-flex  icon-bra-ails">
                <i className="icon-check m-auto text-primary icon-ails"></i>
              </div> */}
              {/* <h5>Customer Service icon</h5> */}
              {/* <FontAwesomeIcon icon="fa-duotone fa-shield-keyhole" /> */}
              <ApartmentIcon />
              <h5>Shield icon</h5>
              <p className="lead mb-0">Available Customer Service 24/7.</p>
            </div>
          </div>
        </div>
      </div>
      {/* </section> */}
    </div>
  );
}

export default Features;
