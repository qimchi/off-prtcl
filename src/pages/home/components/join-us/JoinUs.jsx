import React from "react";
import "../infrastructure/Infrastructure.scss";

const JoinUs = () => {
  return (
    <section>
      <div className="max-w-[90%] lg:max-w-[80%] mx-auto">
        <h2 className="lg:text-5xl text-4xl leading-tight text-[#7FA0AF] mb-16">
          Join Us
        </h2>
        <div className="infrastructure-card impact relative">
          <div className="content">
            <div>
              <span>CAREERS</span>
              <h3>Build things that matter</h3>
              <p>
                With a decade of payments, social impact, and military
                experience, our team has closely seen how the world works and we
                are passionate to bring positive change to it using technology.
                We are hiring across the board, join us!
              </p>
            </div>
            <div>
              <a
                href="https://memebase.cheezburger.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="primary-btn white large">Open Roles</button>
              </a>
            </div>
          </div>
          <div className="image join">
            <div className="overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
