import React from "react";
import "./css/Home.css";
import { smoothScrollTo } from "./AnimationScroll";

const Home = () => {
  return (
    <section className="home-container" id="home">
      <div className="home-overlay"></div>

      <div className="mobile-top-logo">
        <img src="/imgs/logoWhite.png" alt="Logo" />
      </div>

      <div className="home-content-center">
        <h1 className="main-title">
          Every idea{" "}
          <span className="title-row">
            <img src="/imgs/idea.png" alt="Idea" className="title-icon" />
          </span>{" "}
          deserves to be crafted, coded, & brought to life
        </h1>

        <p className="description desc-desktop">
          At QOODY, we craft impactful digital experiences. We blend creative
          UI/UX Design, powerful Web Development, and data-driven Digital
          Marketing to transform your ideas into scalable solutions that elevate
          your brand and position you ahead of the competition.
        </p>

        <p className="description desc-mobile">
          We create impactful digital experiences, merging design, development,
          and marketing to elevate your vision.
        </p>

        <div className="home-btns">
          <a
            className="btn btn-primary"
            href="#whyus"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo("#whyus", 1500);
            }}
          >
            Why We Stand Out <i id="iconsHome" className="fas fa-book"></i>
          </a>

          <a
            className="btn btn-outline"
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo("#services", 1500);
            }}
          >
            Our Services <i id="iconsHome" className="fas fa-compass"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
