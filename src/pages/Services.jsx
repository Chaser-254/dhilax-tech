import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Services = () => {
    const servicesList = [
        { name: "KRA NIL Returns", price: "Ksh. 100", id: "kra-nil", icon: "bi bi-file-earmark-check" },
        { name: "KRA Employment Returns (P9)", price: "Ksh. 200", id: "employment-returns", icon: "bi bi-file-text" },
        { name: "New KRA PIN Application", price: "Ksh. 200", id: "new-kra-pin", icon: "bi bi-person-badge" },
        { name: "Company PIN Registration", price: "Ksh. 1000", id: "company-pin", icon: "bi bi-buildings" },
        { name: "VAT Registration", price: "Contact for price", id: "vat-registration", icon: "bi bi-cash" },
        { name: "Tax Compliance Certificates", price: "contact for price", id: "tax-certificates", icon: "bi bi-award" },
        { name: "New KRA PIN Application for Non-Individual (CBO, Women Groups, Youth Groups, SACCOS, Self Help Groups)", price: "Ksh. 800", id: "new-kra", icon: "bi-person-vcard" },
        { name: "Rental Return Filing, TOT Return Filing, PAYE Filing", price: "Ksh. 400", id: "kra-paye", icon: "bi-file-earmark-bar-graph" },
        { name: "VAT Return Filing", price: "Ksh. 1000", id: "vat-returns", icon: "bi-receipt" },
        { name: "KRA Pin Retrieval", price: "Ksh. 150", id: "kra-retrieval", icon: "bi-key" },
        { name: "KRA Pin Certificate Reprinting", price: "Ksh. 100", id: "pin-reprinting", icon: "bi-printer" },
        { name: "KRA Email Change", price: "Ksh. 150", id: "kra-email", icon: "bi-envelope-at" },
        { name: "Tax Compliance Certificate", price: "Ksh. 200", id: "tax-certificate-comp", icon: "bi-patch-check" },
        { name: "TSC Application Issues", price: "Ksh. 1000", id: "tsc-service", icon: "bi-journal-bookmark" },
        { name: "ETims Onboarding/Registration", price: "Ksh. 300", id: "etims", icon: "bi-person-badge" },
        { name: "ETims Invoice Generation", price: "Ksh. 250", id: "etims-invoice", icon: "bi-file-earmark-text" },
        { name: "Ecitizen Registration and Services", price: "Ksh. 500", id: "ecitizen", icon: "bi-globe" },
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
