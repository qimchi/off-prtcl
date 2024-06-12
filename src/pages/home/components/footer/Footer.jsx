import React from "react";
// import arrow from "../../../../assets/btn-arrow.svg";
// import discord from "../../../../assets/discord.svg";
import twitter from "../../../../assets/twitter.svg";
// import medium from "../../../../assets/medium.svg";
import AnimatedLogo from "../../../../components/animated-logo/AnimatedLogo";

const links = (
  <ul className="list-none flex gap-6 text-white">
    <a
      href="https://memebase.cheezburger.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <li>News</li>
    </a>
    <a
      href="memebase.cheezburger.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <li>Careers</li>
    </a>
    <a
      href="https://memebase.cheezburger.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      {" "}
      <li>Privacy Policy</li>
    </a>
  </ul>
);

const socialMedia = (
  <div className="flex gap-4">
    {/* <a
      href="https://memebase.cheezburger.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={discord} alt="discord" />
    </a> */}
    <a
      href="https://x.com/offlineprotocol"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={twitter} alt="twitter" />
    </a>
    {/* <a
      href="https://memebase.cheezburger.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={medium} alt="medium" />
    </a> */}
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-[#4989A7] p-10 rounded-xl max-w-[99%] mx-auto lg:mb-6 mb-2">
      <div className="flex justify-between items-center border-b border-solid border-white pb-10">
        <iframe
          src="https://embeds.beehiiv.com/e37215fa-14c1-4912-ae65-ffbff161696f?slim=true"
          data-test-id="beehiiv-embed"
          height="52"
          title="newsletter subscribe"
        ></iframe>
        {/* <div className="border border-white border-solid rounded-full p-2 w-full lg:max-w-[300px] flex items-center min-w-[280px]">
          <input
            type="email"
            name="email"
            id="email"
            className="w-full outline-none border-none search-bar pl-2 text-white"
            style={{ background: "transparent" }}
            placeholder="Subscribe to our newsletter"
          />
          <button className="bg-white p-3 rounded-full">
            <img src={arrow} alt="arrow" />
          </button>
        </div> */}
        <div className="hidden lg:block">{socialMedia}</div>
        <div className="hidden lg:block">{links}</div>
      </div>
      <div className="lg:hidden flex justify-center pt-10">{socialMedia}</div>
      <div className="flex justify-center items-center min-h-[500px]">
        <div>
          <AnimatedLogo forFooter />
        </div>
      </div>
      <div className="flex justify-center lg:hidden">{links}</div>
    </footer>
  );
};

export default Footer;
