import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container text-center">
        <p className="mb-1">&copy; {new Date().getFullYear()} Dhilax Tech Solutions. All Rights Reserved.</p>
        <div>
          <a href="https://facebook.com" className="text-light mx-2">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://twitter.com" className="text-light mx-2">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="https://instagram.com" className="text-light mx-2">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="mailto:info@dhilaxtech.com" className="text-light mx-2">
            <i className="bi bi-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
