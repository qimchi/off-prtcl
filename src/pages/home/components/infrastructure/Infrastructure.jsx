import React from "react";
import "./Infrastructure.scss";

const Infrastructure = () => {
  return (
    <div className="infrastructure max-w-[90%] lg:max-w-[80%] mx-auto py-20 lg:py-40">
      <h2 className="lg:text-5xl text-4xl leading-tight text-[#7FA0AF] text-center mb-32">
        We are building censorship resistant offline-enabled{" "}
        <br className="hidden lg:block" /> infrastructure to solve this problem
        and help people.
      </h2>
      <div className="lg:grid grid-cols-2 grid-rows-2 gap-3 infrastructure-grid">
        <div className="col-span-2 infrastructure-card impact">
          <div className="content">
            <div>
              <span>OFFLINE ECOSYSTEM</span>
              <h3>Impact First</h3>
              <p>
                Learn about the experiences and beliefs that inspired us to help
                the unbanked, enable communication where it matters, make
                digital payments accessible, and create a culture of verifiable
                ownership.
              </p>
            </div>
            <div>
              <button className="primary-btn white large">Our Mission</button>
            </div>
          </div>
          <div className="image">
            <div className="overlay"></div>
          </div>
        </div>
        <div className="row-start-2 infrastructure-card organization">
          <div className="content">
            <div>
              <span>OFFLINE FOR</span>
              <h3>Organizations</h3>
              <p>
                For teams looking for independent, accessible, and reliable
                communication solutions that match your needs.
              </p>
            </div>
          </div>
          <div className="image">
            <div className="overlay"></div>
          </div>
        </div>
        <div className="row-start-2 infrastructure-card builders">
          <div className="content">
            <div>
              <span>OFFLINE FOR</span>
              <h3>Builders</h3>
              <p>
                Leverage our offline censorship resistant decentralized stack to
                build impactful solutions for your community.
              </p>
            </div>
          </div>
          <div className="image">
            <div className="overlay"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infrastructure;
