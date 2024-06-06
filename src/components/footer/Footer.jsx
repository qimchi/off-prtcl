import React from "react";
import logo from "../../assets/logo.svg";
import socialLinks from "../../SocialLints";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center py-14">
      <ul className="flex items-center gap-6 mb-10 md:mb-0 social-strip">
        {socialLinks.map(({ link, icon, label }, index) => (
          <li key={index}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <img src={icon} alt={label} />
            </a>
          </li>
        ))}
      </ul>
      <img
        src={logo}
        alt="Short swap logo"
        className="w-[10rem] mb-4 md:mb-0"
      />
      <p className="text-white text-xs">
        © 2024 ShortSwap. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
