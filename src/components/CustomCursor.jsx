import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./css/Cursor.css";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const lineXRef = useRef(null);
  const lineYRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const lineX = lineXRef.current;
    const lineY = lineYRef.current;

    const moveDotX = gsap.quickTo(dot, "x", {
      duration: 0.1,
      ease: "power2.out",
    });
    const moveDotY = gsap.quickTo(dot, "y", {
      duration: 0.1,
      ease: "power2.out",
    });

    const moveLineX = gsap.quickTo(lineX, "y", {
      duration: 0.3,
      ease: "power2.out",
    });
    const moveLineY = gsap.quickTo(lineY, "x", {
      duration: 0.3,
      ease: "power2.out",
    });

    const getCursorColor = (element) => {
      const customColor = element.getAttribute("data-cursor-color");
      if (customColor === "white") return "#000000";
      if (customColor === "black") return "#7f357e";
      if (customColor === "purple") return "#ffffff";

      if (element.tagName && element.tagName.toLowerCase() === "img") {
        return "#000000";
      }

      const style = window.getComputedStyle(element);
      let colorToCheck = style.backgroundColor;

      if (
        colorToCheck === "rgba(0, 0, 0, 0)" ||
        colorToCheck === "transparent"
      ) {
        colorToCheck = style.color;
      }

      const rgbMatch = colorToCheck.match(/\d+/g);
      if (!rgbMatch || rgbMatch.length < 3) return "#ffffff";

      const r = parseInt(rgbMatch[0]);
      const g = parseInt(rgbMatch[1]);
      const b = parseInt(rgbMatch[2]);

      if (r > 200 && g > 200 && b > 200) {
        return "#000000";
      }

      if (r > 100 && r < 150 && g > 30 && g < 80 && b > 100 && b < 150) {
        return "#ffffff";
      }

      if (r < 50 && g < 50 && b < 50) {
        return "#7f357e";
      }

      return "#ffffff";
    };

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      moveDotX(clientX);
      moveDotY(clientY);
      moveLineX(clientY);
      moveLineY(clientX);
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest(
        "a, button, input, textarea, select, img",
      );
      if (target) {
        const newColor = getCursorColor(target);

        gsap.to(dot, {
          scale: 2,
          backgroundColor: newColor,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to([lineX, lineY], {
          opacity: 0.3,
          duration: 0.3,
        });
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest("a, button, input, textarea, select, img")) {
        gsap.to(dot, {
          scale: 1,
          backgroundColor: "#7f357e",
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to([lineX, lineY], {
          opacity: 1,
          duration: 0.3,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <>
      <div ref={lineXRef} className="custom-cursor-line-x"></div>
      <div ref={lineYRef} className="custom-cursor-line-y"></div>
      <div ref={dotRef} className="custom-cursor-dot"></div>
    </>
  );
};

export default CustomCursor;
