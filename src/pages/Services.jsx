import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Services = () => {
    const servicesList = [
        { name: "KRA NIL Returns", price: "Ksh. 100", id: "kra-nil", icon: "bi bi-file-earmark-check" },
        { name: "Employment Returns (P9)", price: "Ksh. 200", id: "employment-returns", icon: "bi bi-file-text" },
        { name: "New KRA PIN Application", price: "Ksh. 200", id: "new-kra-pin", icon: "bi bi-person-badge" },
        { name: "Company PIN Registration", price: "Ksh. 1000", id: "company-pin", icon: "bi bi-buildings" },
        { name: "VAT Registration", price: "Contact for price", id: "vat-registration", icon: "bi bi-cash" },
        { name: "Tax Compliance Certificates", price: "Contact for price", id: "tax-certificates", icon: "bi bi-award" },
      ];
      
      return (
        <div className="container mt-5">
          <h1 className="text-center text-primary">Our Services</h1>
          <div className="row mt-4">
            {servicesList.map((service, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <Link to={`/booking?service=${service.id}`} className="text-decoration-none">
                  <div className="card shadow border-0 text-center">
                    <div className="card-body">
                      <i className={`${service.icon} text-primary display-5`}></i>
                      <h5 className="card-title mt-3">{service.name}</h5>
                      <p className="card-text">Price: {service.price}</p>
                      <button className="btn btn-primary">Book Now</button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      );      
};

export default Services;
