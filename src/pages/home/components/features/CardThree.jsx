import React, { useRef, useState } from "react";
import "./Features.scss";
import information from "../../../../assets/information.svg";
import informationWhite from "../../../../assets/information-white.png";

const CardThree = () => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const cardRect = card.getBoundingClientRect();
    const x = e.clientX - cardRect.left;
    const y = e.clientY - cardRect.top;

    card.style.setProperty("--circle-x", `${x - 100}px`);
    card.style.setProperty("--circle-y", `${y - 100}px`);
  };
  return (
    <div
      className="ton-card-wrapper md:translate-y-[50px]"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="ton-card third topup">
        <div className="card-banner">
          <img
            src={isHovered ? informationWhite : information}
            alt="ease access"
          />
        </div>
        <div className="card-content">
          <h4>Information</h4>
          <p className="mb-4">
            Users lack tools for reporting, self-sovereign fact-checking, and
            source verification.
          </p>
          <p>
            Share and consume verifiably authentic real-time information, news,
            alerts, and more with a hyperlocal and global community with our
            content reporting tools.
          </p>
        </div>
      </div>
      <div className="blob"></div>
    </div>
  );
};

export default CardThree;
