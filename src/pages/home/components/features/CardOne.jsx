import React, { useRef, useState } from "react";
import "./Features.scss";
import payments from "../../../../assets/payments.svg";
import paymentsWhite from "../../../../assets/payments-white.png";

const CardOne = () => {
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
      <div className="ton-card first notification">
        <div className="card-banner">
          <img src={isHovered ? paymentsWhite : payments} alt="notification" />
        </div>
        <div className="card-content">
          <h4 className="italic">Payments</h4>
          <p className="mb-4">
            Internet connectivity is a prerequisite to carry out digital payment
            transactions.
          </p>
          <p>
            We serve the unbanked and unserved with financial tools for P2P
            payments, micro-financing, and savings that can be used in absence
            of constant connectivity.
          </p>
        </div>
      </div>
      <div className="blob"></div>
    </div>
  );
};

export default CardOne;
