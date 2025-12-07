import React, { useState, useEffect, useRef } from "react";
import "./css/Services.css";

const Services = () => {
  const [activeCard, setActiveCard] = useState(0);
  const sectionRef = useRef(null);

  const servicesData = [
    {
      id: 1,
      title: "Web Development",
      desc: "We engineer high-performance, scalable websites tailored to your business needs. From sleek landing pages to complex web applications.",
      img: "/imgs/services/dev.png",
    },
    {
      id: 2,
      title: "Graphic Design",
      desc: "Your brand is your voice. We create visually stunning identities, logos, and UI/UX designs that captivate your audience.",
      img: "/imgs/services/des2.jpg",
    },
    {
      id: 3,
      title: "Digital Marketing",
      desc: "Dominating the market requires strategy. We drive traffic and convert leads through data-driven SEO and social media campaigns.",
      img: "/imgs/services/mark2.jpeg",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const { top, height } = sectionRef.current.getBoundingClientRect();
      const scrollY = -top;
      const windowHeight = window.innerHeight;

      const scrollProgress = scrollY / (height - windowHeight);

      if (scrollProgress < 0.33) {
        setActiveCard(0);
      } else if (scrollProgress < 0.66) {
        setActiveCard(1);
      } else {
        setActiveCard(2);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="services-scroll-wrapper" ref={sectionRef}>
      <section className="services-sticky-content">
        <div className="services-overlay"></div>

        <div className="services-header">
          <h2 className="service-title">Our Services</h2>

          {/* PC Version */}
          <p className="service-desc desc-desktop">
            We deliver integrated digital services that blend design,
            development, and marketing into one powerful workflow. Our mission
            is to craft modern, high-performance solutions that elevate your
            brand, strengthen your identity, and create meaningful digital
            experiences for your audience.
          </p>

          {/* Mobile Version */}
          <p className="service-desc desc-mobile">
            We create modern digital solutions that combine design, development
            and marketing to help your brand grow efficiently.
          </p>
        </div>

        <div className="services-container">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className={`service-card ${
                index === activeCard ? "active" : "inactive"
              }`}
              style={{ backgroundImage: `url(${service.img})` }}
            >
              <div className="card-overlay"></div>
              <div className="card-content">
                <h3 className="card-title">{service.title}</h3>
                <p className="card-desc">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
