import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <header className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="fw-bold">Expert Tax & Consultation Services</h1>
          <p className="lead">Helping individuals & businesses stay tax-compliant with ease.</p>
          <Link to="/services" className="btn btn-light btn-lg mt-3">View Services</Link>
        </div>
      </header>

      {/* About Section */}
      <section className="container mt-5 text-center">
        <h2 className="text-primary">Why Choose Us?</h2>
        <p className="lead">Dhilax Tech Solutions provides professional, reliable, and affordable tax services to help you stay compliant.</p>
        <div className="row mt-4">
  <div className="col-md-4">
    <div className="card shadow text-center">
      <div className="card-body">
        <i className="bi bi-person-check text-primary display-4"></i>
        <h5 className="card-title mt-2">Trusted Experts</h5>
        <p className="card-text">Our tax professionals are certified and experienced.</p>
      </div>
    </div>
  </div>
  <div className="col-md-4">
    <div className="card shadow text-center">
      <div className="card-body">
        <i className="bi bi-wallet text-primary display-4"></i>
        <h5 className="card-title mt-2">Affordable Pricing</h5>
        <p className="card-text">We offer cost-effective tax solutions.</p>
      </div>
    </div>
  </div>
  <div className="col-md-4">
    <div className="card shadow text-center">
      <div className="card-body">
        <i className="bi bi-clock text-primary display-4"></i>
        <h5 className="card-title mt-2">Fast & Reliable</h5>
        <p className="card-text">Quick and efficient services to meet deadlines.</p>
      </div>
    </div>
  </div>
</div>

      </section>

      {/* Call to Action */}
      <div className="text-center mt-5">
        <Link to="/booking" className="btn btn-primary btn-lg">Book an Appointment</Link>
      </div>
    </div>
  );
};

export default Home;
