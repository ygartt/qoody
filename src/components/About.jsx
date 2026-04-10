import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./css/About.css";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "30% 70%",
          toggleActions: "play reverse play reverse",
        },
      });

      tl.from(
        ".about-pic",
        {
          x: -100,
          opacity: 0,
          scale: 0.85,
          duration: 1.9,
          ease: "power4.out",
        },
        0,
      )
        .from(
          ".about-title",
          {
            y: -60,
            opacity: 0,
            duration: 1.9,
            ease: "power4.out",
          },
          0,
        )
        .from(
          ".founder-card",
          {
            x: 100,
            opacity: 0,
            duration: 1.9,
            stagger: 0.25,
            ease: "power4.out",
          },
          0.15,
        );
    },
    { scope: containerRef },
  );

  return (
    <section className="about-container" id="about" ref={containerRef}>
      <div className="about-bg-grid"></div>

      <div className="about-content">
        <img src="/imgs/YGMT.jpg" alt="YGMT" className="about-pic" />
        <h1 className="about-title">Founders</h1>
      </div>

      <div className="founders-cards-container">
        <div className="founder-card">
          <h3 className="founder-name">GORMA YASSINE</h3>
          <h4 className="founder-role">co-founder & chief design Officer</h4>
          <p className="founder-desc">
            A passionate programmer and graphic designer who blends technology
            with creativity. He specializes in crafting visual identities and
            digital experiences that combine aesthetics with functionality. With
            a strong eye for design and a deep understanding of code, he focuses
            on building projects where every detail, from concept to execution,
            communicates meaning and emotion.
          </p>
          <a
            href="https://www.linkedin.com/in/yassine-gorma-elidrisi/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-linkedin-link"
          >
            <i
              className="fab fa-linkedin"
              style={{ marginRight: "8px", fontSize: "16px" }}
            ></i>{" "}
            View in LinkedIn
          </a>
        </div>

        <div className="founder-card">
          <h3 className="founder-name">TOUBANE MOURAD</h3>
          <h4 className="founder-role">
            co-founder & chief technology officer
          </h4>
          <p className="founder-desc">
            A Full-Stack Developer specializing in backend development. He
            builds scalable and secure systems for modern web applications,
            focusing on server architecture, databases, and APIs to create
            reliable and high-performance digital products.
          </p>
          <a
            href="https://linkedin.com/in/toubane-mourad"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-linkedin-link"
          >
            <i
              className="fab fa-linkedin"
              style={{ marginRight: "8px", fontSize: "16px" }}
            ></i>{" "}
            View in LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
