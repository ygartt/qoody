import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./css/Home.css";
import { smoothScrollTo } from "./AnimationScroll";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const containerRef = useRef(null);
  const bgPicsRef = useRef([]);
  const [currentPic, setCurrentPic] = useState(0);
  const [introDone, setIntroDone] = useState(false);
  const isFirstLoad = useRef(true);

  const bgImages = ["/imgs/BG-home1.png", "/imgs/BG-home2.png"];

  useEffect(() => {
    const handleIntro = () => setIntroDone(true);
    window.addEventListener("introFinished", handleIntro);

    const fallbackTimer = setTimeout(() => setIntroDone(true), 4000);

    return () => {
      window.removeEventListener("introFinished", handleIntro);
      clearTimeout(fallbackTimer);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPic((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 2777);

    return () => clearInterval(interval);
  }, [bgImages.length]);

  useGSAP(
    () => {
      gsap.set(bgPicsRef.current, {
        xPercent: -50,
        yPercent: -50,
        x: 0,
        y: 0,
        rotation: 0,
      });

      gsap.to(bgPicsRef.current, {
        keyframes: [
          { y: 15, x: -10, rotation: -1, duration: 4, ease: "sine.inOut" },
          { y: -15, x: 10, rotation: 1, duration: 4, ease: "sine.inOut" },
          { y: -5, x: 5, rotation: 0.5, duration: 4, ease: "sine.inOut" },
          { y: 0, x: 0, rotation: 0, duration: 4, ease: "sine.inOut" },
        ],
        repeat: -1,
      });

      gsap.set(".hero-anim-down", { y: -50, opacity: 0 });
      gsap.set(".hero-anim-up", { y: 50, opacity: 0 });
    },
    { scope: containerRef },
  );

  useGSAP(
    () => {
      if (!introDone) return;

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 85%",
        onEnter: () => {
          const delayTime = isFirstLoad.current ? 1 : 0;

          gsap.to(".hero-anim-down", {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            delay: delayTime,
            overwrite: "auto",
          });

          gsap.to(".hero-anim-up", {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            delay: delayTime + 0.2,
            overwrite: "auto",
          });

          isFirstLoad.current = false;
        },
        onLeave: () => {
          gsap.to(".hero-anim-down", {
            y: -50,
            opacity: 0,
            duration: 0.5,
            overwrite: "auto",
          });
          gsap.to(".hero-anim-up", {
            y: 50,
            opacity: 0,
            duration: 0.5,
            overwrite: "auto",
          });
        },
        onEnterBack: () => {
          gsap.to(".hero-anim-down", {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            overwrite: "auto",
          });

          gsap.to(".hero-anim-up", {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            delay: 0.2,
            overwrite: "auto",
          });
        },
        onLeaveBack: () => {
          gsap.to(".hero-anim-down", {
            y: -50,
            opacity: 0,
            duration: 0.5,
            overwrite: "auto",
          });
          gsap.to(".hero-anim-up", {
            y: 50,
            opacity: 0,
            duration: 0.5,
            overwrite: "auto",
          });
        },
      });
    },
    { scope: containerRef, dependencies: [introDone] },
  );

  return (
    <section className="home-container" ref={containerRef}>
      <div className="home-overlay"></div>

      <div className="home-content-center">
        {bgImages.map((img, index) => (
          <img
            key={index}
            ref={(el) => (bgPicsRef.current[index] = el)}
            src={img}
            alt={`BG ${index}`}
            className={`content-bg-pic ${index === currentPic ? "active" : ""}`}
          />
        ))}

        <h1 className="main-title hero-anim-down">
          Every idea{" "}
          <span className="title-row">
            <img src="/imgs/idea.png" alt="Idea" className="title-icon" />
          </span>{" "}
          deserves to be crafted, coded, & brought to life
        </h1>

        <p className="description desc-desktop hero-anim-down">
          At QOODY, we craft impactful digital experiences. We blend creative
          UI/UX Design, powerful Web Development, and data-driven Digital
          Marketing to transform your ideas into scalable solutions that elevate
          your brand and position you ahead of the competition.
        </p>

        <p className="description desc-mobile hero-anim-down">
          We create impactful digital experiences, merging design, development,
          and marketing to elevate your vision.
        </p>

        <div className="home-btns hero-anim-up">
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
