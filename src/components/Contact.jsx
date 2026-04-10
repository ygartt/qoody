import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./css/Contact.css";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.set(".contact-title span", { display: "inline-block" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "30% 85%",
          toggleActions: "play reverse play reverse",
        },
      });

      tl.fromTo(
        ".contact-title",
        {
          y: -60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
        },
      )
        .fromTo(
          ".contact-title span",
          {
            clipPath: "inset(0 100% 0 0)",
            opacity: 0,
            x: -20,
          },
          {
            clipPath: "inset(0 0% 0 0)",
            opacity: 1,
            x: 0,
            duration: 1.5,
            ease: "power4.inOut",
          },
          "-=0.6",
        )
        .fromTo(
          ".contact-btn",
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" },
          "-=0.8",
        );
    },
    { scope: containerRef },
  );

  return (
    <section className="contact-section" id="contact" ref={containerRef}>
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
