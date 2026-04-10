import React, { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./css/Whyus.css";

gsap.registerPlugin(ScrollTrigger);

const WhyUs = () => {
  const containerRef = useRef(null);
  const [activeCard, setActiveCard] = useState(1);

  const cardsData = [
    {
      id: 1,
      title: "Latest Technologies",
      desc: "We use cutting edge technologies to build fast, secure and powerful websites, ensuring better performance and a smoother experience.",
    },
    {
      id: 2,
      title: "Modern Design",
      desc: "We design visually appealing and intuitive interfaces, blending aesthetics with functionality for a clean, modern digital experience.",
    },
    {
      id: 3,
      title: "Friendly Support",
      desc: "We provide ongoing, friendly support, offering quick and reliable assistance whenever you need it, ensuring comfort and peace of mind.",
    },
  ];

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "20% 85%",
          toggleActions: "play reverse play reverse",
        },
      });

      tl.fromTo(
        ".whyus-title",
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" },
        0,
      )
        .fromTo(
          ".whyus-desc",
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" },
          0.15,
        )
        .fromTo(
          ".why-card",
          { y: 80, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: "power4.out" },
          0.3,
        );
    },
    { scope: containerRef },
  );

  return (
    <section className="whyus-section" id="whyus" ref={containerRef}>
      <div className="whyus-overlay"></div>

      <div className="whyus-content-layer">
        <div className="whyus-header">
          <h2 className="whyus-title">What make Us different</h2>

          <p className="whyus-desc desc-desktop">
            We combine creativity, modern technology, and strategic insight to
            build unique digital experiences. Our solutions strengthen your
            brand, enhance performance, and support long-term growth in today’s
            evolving digital landscape.
          </p>

          <p className="whyus-desc desc-mobile">
            We create modern, efficient digital solutions that help your brand
            grow and stand out.
          </p>
        </div>

        <div className="whyus-container">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className={`why-card ${activeCard === card.id ? "active" : ""}`}
              onMouseEnter={() => setActiveCard(card.id)}
            >
              <div className="card-content-wrapper">
                <h3 className="why-card-title">{card.title}</h3>
                <p className="why-card-desc">{card.desc}</p>
              </div>

              <div className="card-icon-bg">
                <span className="card-number">{`0${card.id}`}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
