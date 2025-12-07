import React from "react";
import "./css/Contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-overlay"></div>

      <div className="contact-content">
        <h1 className="contact-title">
          WANNA BUILD SOMETHING GREAT <span>TOGETHER?</span>
        </h1>

        <a href="mailto:qoodyteam@gmail.com" className="contact-btn">
          <span>qoodyteam@gmail.com</span>
          <i className="fas fa-compass"></i>
        </a>
      </div>
    </section>
  );
};

export default Contact;
