import React, { useState, useEffect } from "react";
import "./css/Navbar.css";
import { smoothScrollTo } from "./AnimationScroll";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("#home");

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setActiveLink(targetId);
    smoothScrollTo(targetId, 1500);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "whyus", "contact"];

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            setActiveLink(`#${section}`);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="logo-container">
          <img
            src="/imgs/logoWhite.png"
            alt="Logo"
            onClick={(e) => handleNavClick(e, "#home")}
          />
        </div>
      </div>

      <div className="nav-center">
        <a
          href="#home"
          className={`nav-item ${activeLink === "#home" ? "active" : ""}`}
          onClick={(e) => handleNavClick(e, "#home")}
        >
          <span>Home</span>
        </a>

        <a
          href="#services"
          className={`nav-item ${activeLink === "#services" ? "active" : ""}`}
          onClick={(e) => handleNavClick(e, "#services")}
        >
          <span>Services</span>
        </a>

        <a
          href="#whyus"
          className={`nav-item ${activeLink === "#whyus" ? "active" : ""}`}
          onClick={(e) => handleNavClick(e, "#whyus")}
        >
          <span>Why Us</span>
        </a>

        <a
          href="#contact"
          className={`nav-item ${activeLink === "#contact" ? "active" : ""}`}
          onClick={(e) => handleNavClick(e, "#contact")}
        >
          <span>Contact</span>
        </a>
      </div>

      <div className="nav-right">
        <a
          href="https://www.linkedin.com/company/qoodyteam/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <img src="/imgs/icons/LinkedIn.png" alt="LinkedIn" />
        </a>
        <a
          href="https://x.com/QOODYTEAM"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <img src="/imgs/icons/X.png" alt="X" />
        </a>
        <a href="mailto:qoodyteam@gmail.com" className="social-link">
          <img src="/imgs/icons/Mail.png" alt="Email" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
