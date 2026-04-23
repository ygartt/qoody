import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./css/Services.css";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef(null);
  const [startScroll, setStartScroll] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const graphicImages = [
    "/imgs/portfolio/1.jpg",
    "/imgs/portfolio/2.jpg",
    "/imgs/portfolio/3.jpg",
    "/imgs/portfolio/4.jpg",
    "/imgs/portfolio/5.jpg",
    "/imgs/portfolio/6.jpg",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartScroll(true);
        }
      },
      { threshold: 0.1 },
    );

    if (cardsRef.current) {
      observer.observe(cardsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImgIndex((prevIndex) => (prevIndex + 1) % graphicImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [graphicImages.length]);

  useGSAP(
    () => {
      const rows = gsap.utils.toArray(".service-card-row");

      rows.forEach((row) => {
        const isReverse = row.classList.contains("reverse");
        const rightEl = row.querySelector(".service-card-right");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: "30% 85%",
            toggleActions: "play reverse play reverse",
          },
        });

        tl.from(rightEl, {
          x: isReverse ? -150 : 150,
          opacity: 0,
          duration: 1.5,
          ease: "power4.out",
          force3D: true,
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <section className="services-container" ref={containerRef} id="services">
      <div className="services-bg-grid"></div>

      <div className="services-marquee-wrapper">
        <div className="services-marquee-track">
          <div className="marquee-group">
            <h1 className="services-title">
              DISCOVER OUR WORK AND EXPLORE OUR CREATIVE SHOWCASE •{" "}
            </h1>
            <h1 className="services-title">
              DISCOVER OUR WORK AND EXPLORE OUR CREATIVE SHOWCASE •{" "}
            </h1>
          </div>
          <div className="marquee-group" aria-hidden="true">
            <h1 className="services-title">
              DISCOVER OUR WORK AND EXPLORE OUR CREATIVE SHOWCASE •{" "}
            </h1>
            <h1 className="services-title">
              DISCOVER OUR WORK AND EXPLORE OUR CREATIVE SHOWCASE •{" "}
            </h1>
          </div>
        </div>
      </div>

      <div className="services-cards-container" ref={cardsRef}>
        <div className="service-card-row">
          <div className="service-card-left">
            <div
              className={`scroll-img-wrapper ${startScroll ? "active-scroll" : ""}`}
            >
              <img
                src="/imgs/services/00.png"
                alt="Web Development Preview"
                className="scrolling-img"
              />
            </div>
          </div>
          <div className="service-card-right">
            <h3 className="service-card-title-main">WEB DEVELOPMENT</h3>
            <h4 className="service-card-subtitle">
              LANDING PAGES / SAAS / E-COMMERCE / WEB APPS
            </h4>
            <p className="service-card-desc">
              We build high-performance, scalable web solutions tailored to
              modern businesses. From conversion-focused landing pages to
              complex web applications, our development approach combines clean
              architecture, optimized performance, and seamless user experience
              to deliver reliable and impactful digital products.
            </p>
          </div>
        </div>

        <div className="service-card-row reverse">
          <div className="service-card-left">
            <div
              className="scroll-img-wrapper"
              style={{ position: "relative", overflow: "hidden" }}
            >
              {graphicImages.map((imgSrc, index) => (
                <img
                  key={index}
                  src={imgSrc}
                  alt={`Portfolio Design ${index + 1}`}
                  className="scrolling-img"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    // objectFit: "cover",
                    opacity: index === currentImgIndex ? 1 : 0,
                    transform:
                      index === currentImgIndex
                        ? "scale(1) translateY(0)"
                        : "scale(1.1) translateY(20px)",
                    transition:
                      "opacity 1s ease-in-out, transform 1.2s cubic-bezier(0.25, 1, 0.5, 1)",
                    pointerEvents: index === currentImgIndex ? "auto" : "none",
                    willChange: "transform, opacity",
                    backfaceVisibility: "hidden",
                  }}
                />
              ))}
            </div>
          </div>
          <div className="service-card-right">
            <h3 className="service-card-title-main">
              BRANDING & GRAPHIC DESIGN
            </h3>
            <h4 className="service-card-subtitle">
              LOGO DESIGN / BRAND GUIDELINES / DIGITAL ART / PRINT DESIGN
            </h4>
            <p className="service-card-desc">
              We craft strong visual identities that define and elevate your
              brand. From logo design and brand guidelines to digital and print
              design, we create cohesive visuals that communicate your message
              clearly and leave a lasting impression across every platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
