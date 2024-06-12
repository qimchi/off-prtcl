import React from "react";
import "./Hero.scss";
// import discordLogo from "../../../../assets/discord.svg";
// import mediumLogo from "../../../../assets/medium.svg";
import twitterLogo from "../../../../assets/twitter.svg";
import AnimatedLogo from "../../../../components/animated-logo/AnimatedLogo";

const Hero = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 gap-4 py-3 lg:min-h-[95vh] px-3 lg:px-0">
        <div className="bg-[#4989A7] rounded-lg lg:flex justify-start items-center px-6 relative order-2 lg:order-1 py-16 lg:py-0">
          <header className="mb-20 md:mb-0">
            <h1 className="text-white text-4xl lg:text-5xl font-thin">
              Payments, communication, & <br className="hidden lg:block" />{" "}
              information for <strong>everyone</strong>.
            </h1>
            <div className="flex gap-2 mt-8">
              <a
                href="https://x.com/offlineprotocol"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="primary-btn white large">
                  Join Airdrop
                </button>
              </a>
              <a
                href="https://x.com/offlineprotocol"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="primary-btn white-outlined large">
                  Learn More
                </button>
              </a>
            </div>
          </header>
          <div className="lg:absolute bottom-0 lg:right-[50%] lg:translate-x-[50%] w-[95%] border-t-2 border-solid border-white flex flex-wrap lg:flex-nowrap gap-8 lg:gap-10 justify-between items-center pr-8 pb-5 pt-5">
            <p className="text-white">
              Offline Protocol is a pioneering censorship resistant stack
              designed to address critical needs arising in the absence of
              constant connectivity.
            </p>
            <ul className="list-none flex items-center gap-6 social-list">
              {/* <li>
                <img
                  src={discordLogo}
                  alt="offline protocol discord"
                  className="w-9"
                />
              </li> */}
              {/* <li>
                <img
                  src={mediumLogo}
                  alt="offline protocol medium"
                  className="w-9"
                />
              </li> */}
              <li>
                <a
                  href="https://x.com/offlineprotocol"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={twitterLogo}
                    alt="offline protocol twitter"
                    className="w-9"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center items-center order-1 lg:order-2 py-10 lg:py-0 lg:min-h-[600px] lg:min-h-0">
          <AnimatedLogo />
        </div>
      </div>
    </>
  );
};

export default Hero;
