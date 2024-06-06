import React, { useRef } from "react";
import "./AnimatedLogo.scss";
import blob from "../../assets/blob.png";

const AnimatedLogo = ({ forFooter }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const cardRect = card.getBoundingClientRect();
    const x = e.clientX - cardRect.left;
    const y = e.clientY - cardRect.top;

    card.style.setProperty("--circle-x", `${x - 1000}px`);
    card.style.setProperty("--circle-y", `${y - 1300}px`);
  };
  return (
    <div className="ton h-full" onMouseMove={handleMouseMove}>
      <div className="ton-card-wrapper md:translate-y-[50px]" ref={cardRef}>
        <div className="logo-wrapper">
          <div className={`logo-parent ${forFooter ? "white" : ""}`}>
            <div></div>
            <div></div>
            <div className="transparent"></div>
            <div className="transparent"></div>
            <div></div>
            <div></div>
            <div className="transparent"></div>
            <div className="transparent"></div>
            <div></div>
            <div className="transparent"></div>
            <div></div>
            <div className="transparent"></div>
            <div></div>
            <div></div>
            <div className="transparent"></div>
            <div className="transparent"></div>
            <div></div>
            <div></div>
            <div className="transparent"></div>
            <div className="transparent"></div>
          </div>
        </div>
        <div className="blob">
          <img src={blob} alt="asdf" />
        </div>
      </div>
    </div>
  );
};

export default AnimatedLogo;
