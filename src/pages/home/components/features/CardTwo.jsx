import React, { useRef, useState } from "react";
import "./Features.scss";
import communication from "../../../../assets/communication.svg";
import communicationWhite from "../../../../assets/communication-white.png";

const CardTwo = () => {
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
      <div className="ton-card second ease-access">
        <div className="card-banner">
          <img
            src={isHovered ? communicationWhite : communication}
            alt="ease access"
          />
        </div>
        <div className="card-content">
          <h4>Communication</h4>
          <p className="mb-4">
            Access to communication apps, infrastructure and internet services
            is often severed.
          </p>
          <p>
            In dire situations like natural disasters, wars, conflict, or in
            safer environments like malls, concerts, vacations, stay connected
            with our offline communication solutions.
          </p>
        </div>
      </div>
      <div className="blob"></div>
    </div>
  );
};

export default CardTwo;
