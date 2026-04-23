import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Whyus from "./components/Whyus";
import Services from "./components/Services";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import Loader from "./components/Loader";
import "./App.css";
import SmoothScroll from "./components/SmoothScroll";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      <SmoothScroll />
      <CustomCursor />
      <Navbar />

      <div
        id="home"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          pointerEvents: "none",
          zIndex: 0,
        }}
      ></div>

      <div className="sticky-home">
        <Home />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="services">
        <Services />
      </div>

      <div id="whyus">
        <Whyus />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
