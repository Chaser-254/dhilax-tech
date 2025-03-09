import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking submitted successfully!");
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center text-primary mb-4">
        <i className="bi bi-calendar-check-fill me-2"></i> Book a Consultation
      </h1>
      
      <form className="mt-4 p-4 border rounded shadow bg-white" onSubmit={handleSubmit}>
        <div className="mb-3 input-group">
          <span className="input-group-text"><i className="bi bi-person-fill"></i></span>
          <input type="text" className="form-control" name="name" placeholder="Your Name" onChange={handleChange} required />
        </div>

        <div className="mb-3 input-group">
          <span className="input-group-text"><i className="bi bi-envelope-fill"></i></span>
          <input type="email" className="form-control" name="email" placeholder="Your Email" onChange={handleChange} required />
        </div>

        <div className="mb-3 input-group">
          <span className="input-group-text"><i className="bi bi-telephone-fill"></i></span>
          <input type="tel" className="form-control" name="phone" placeholder="Your Phone" onChange={handleChange} required />
        </div>

        <div className="mb-3 input-group">
          <span className="input-group-text"><i className="bi bi-calendar-date-fill"></i></span>
          <input type="date" className="form-control" name="date" onChange={handleChange} required />
        </div>

        <div className="mb-3 input-group">
          <span className="input-group-text"><i className="bi bi-chat-text-fill"></i></span>
          <textarea className="form-control" name="message" placeholder="Your Message" onChange={handleChange}></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          <i className="bi bi-send-fill me-2"></i> Submit Booking
        </button>
      </form>
      <br /><br />
    </div>
  );
};

export default Booking;
