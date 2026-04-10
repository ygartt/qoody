import React, { useState, useEffect } from "react";
import "./css/Loader.css";

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const nextValue = prev + Math.floor(Math.random() * 15) + 5;
        if (nextValue >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            setIsFinished(true);
            window.dispatchEvent(new Event("introFinished"));
            setTimeout(onComplete, 1000);
          }, 400);

          return 100;
        }
        return nextValue;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`loader-container ${isFinished ? "slide-up" : ""}`}>
      <div className="loader-bg-grid"></div>
      <div className="loader-glow"></div>

      <div className="loader-content">
        <div className="loader-header">
          <img
            src="/imgs/logoWhite.png"
            alt="Qoody Logo"
            className="loader-logo"
          />
          <span className="loader-number">{progress}%</span>
        </div>

        <div className="loader-progress-wrapper">
          <div
            className="loader-progress-bar"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
