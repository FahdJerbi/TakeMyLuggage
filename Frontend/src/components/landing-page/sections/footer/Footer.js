import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="page-footer font-small blue footer">
      <div className="footer-copyright text-center py-3">
        Made with ❤ by
        <a
          href="https://about.me/adewaletoluwani"
          target="_blank"
          rel="noopener noreferrer"
          className="author"
        >
          {" "}
          Toluwani Adewale
        </a>
      </div>
    </footer>
  );
}

export default Footer;
