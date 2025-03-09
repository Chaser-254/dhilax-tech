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

  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [statusLoading, setStatusLoading] = useState(false);
  const [error, setError] = useState("");

  const API_BASE_URL = "https://your-backend.herokuapp.com/api/bookings/";

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission (Booking request)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(API_BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Booking submitted successfully! Check your email for confirmation.");
        setFormData({ name: "", email: "", phone: "", date: "", message: "" });
      } else {
        setError("Failed to submit booking. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch Booking Status
  const checkStatus = async () => {
    if (!formData.email) {
      setError("Please enter your email to check booking status.");
      return;
    }

    setStatusLoading(true);
    setError("");

    try {
      const response = await fetch(`${API_BASE_URL}status/?email=${formData.email}`);
      const data = await response.json();

      if (data.length > 0) {
        setStatus(data);
      } else {
        setError("No booking found for this email.");
      }
    } catch (err) {
      setError("Error fetching booking status.");
    } finally {
      setStatusLoading(false);
    }
  };

  // Cancel Booking
  const cancelBooking = async (id) => {
    const confirmCancel = window.confirm("Are you sure you want to cancel this booking?");
    if (!confirmCancel) return;

    try {
      const response = await fetch(`${API_BASE_URL}${id}/`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Booking canceled successfully.");
        setStatus(null);
      } else {
        setError("Failed to cancel booking.");
      }
    } catch (err) {
      setError("Network error. Try again later.");
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center text-primary mb-4">
        <i className="bi bi-calendar-check-fill me-2"></i> Book a Consultation
      </h1>

      {error && <div className="alert alert-danger">{error}</div>}

      {/* Booking Form */}
      <form className="mt-4 p-4 border rounded shadow bg-white" onSubmit={handleSubmit}>
        <div className="mb-3 input-group">
          <span className="input-group-text"><i className="bi bi-person-fill"></i></span>
          <input type="text" className="form-control" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="mb-3 input-group">
          <span className="input-group-text"><i className="bi bi-envelope-fill"></i></span>
          <input type="email" className="form-control" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="mb-3 input-group">
          <span className="input-group-text"><i className="bi bi-telephone-fill"></i></span>
          <input type="tel" className="form-control" name="phone" placeholder="Your Phone" value={formData.phone} onChange={handleChange} required />
        </div>

        <div className="mb-3 input-group">
          <span className="input-group-text"><i className="bi bi-calendar-date-fill"></i></span>
          <input type="date" className="form-control" name="date" value={formData.date} onChange={handleChange} required />
        </div>

        <div className="mb-3 input-group">
          <span className="input-group-text"><i className="bi bi-chat-text-fill"></i></span>
          <textarea className="form-control" name="message" placeholder="Your Message" value={formData.message} onChange={handleChange}></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-100" disabled={loading}>
          {loading ? "Submitting..." : <><i className="bi bi-send-fill me-2"></i> Submit Booking</>}
        </button>
      </form>

      <hr />

      {/* Booking Status Section */}
      <div className="text-center mt-3">
        <h4>Check Booking Status</h4>
        <input
          type="email"
          className="form-control mt-2"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          name="email"
          required
        />
        <button className="btn btn-info mt-2" onClick={checkStatus} disabled={statusLoading}>
          {statusLoading ? "Checking..." : "Check Status"}
        </button>
      </div>

      {/* Display Booking Status */}
      {status && (
        <div className="mt-4">
          <h5>Your Bookings:</h5>
          <ul className="list-group">
            {status.map((booking) => (
              <li key={booking.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <strong>Date:</strong> {booking.date} <br />
                  <strong>Status:</strong> <span className={`badge ${booking.status === "approved" ? "bg-success" : booking.status === "canceled" ? "bg-danger" : "bg-warning"}`}>
                    {booking.status}
                  </span>
                </div>
                {booking.status === "pending" && (
                  <button className="btn btn-sm btn-danger" onClick={() => cancelBooking(booking.id)}>
                    <i className="bi bi-x-circle"></i> Cancel
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Booking;
