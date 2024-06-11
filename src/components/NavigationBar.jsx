import React, { useState } from "react";
import LogoImage from "../assets/logo-white.svg";
import GreenLogoImage from "../assets/logo-green.svg";
import "./NaivgationBar.scss";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

const navLinks = [
  {
    name: "Home ",
    internalLink: true,
    address: "/",
   
  },
  {
    name: "Oracles",
    externalLink: true,
    address: "https://offlineoracles.com",
  },
  {
    name: "About",
    internalLink: true,
    address: "/",
    
  },
  {
    name: "Docs",
    externalLink: true,
    address: "https://docs.offlineprotocol.com/",
    type: "external",
    
  },
];

const navList = (
  <ul className="flex flex-col lg:flex-row justify-start lg:justify-between items-start lg:items-center gap-8 lg:gap-14">
   {navLinks.map((item, index) => {
      if (item.internalLink) {
        return (
          <NavLink to={item.address}>
            <li
              key={index}
              className="text-white lg:text-[#4989A7] cursor-pointer"
            >
              {item.name}
            </li>
          </NavLink>
        );
      }
      if (item.externalLink) {
        return (
          <a href={item.address} target="_blank" rel="noopener noreferrer">
            <li
              key={index}
              className="text-white lg:text-[#4989A7] cursor-pointer"
            >
              {item.name}
            </li>
          </a>
        );
      }
      if (item.section) {
        return (
          <HashLink to={`/#${item.targetSection}`} smooth key={index}>
            <li
              key={index}
              className="text-white lg:text-[#4989A7] cursor-pointer"
            >
              {item.name}
            </li>
          </HashLink>
        );
      }

      return "";
    })}
  </ul>
);

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-10 navigation-bar transparent absolute top-0 left-0 w-full px-6 z-10">
      <div className="flex justify-between items-center">
        <HashLink to="/#top">
          <div className="flex items-center gap-3">
            <picture>
              <source media="(min-width:1024px)" srcSet={LogoImage} />
              <img src={GreenLogoImage} alt="Flowers" className="w-14" />
            </picture>
            <span className="text-white text-2xl hidden lg:block">
              Offline Protocol
            </span>
          </div>
        </HashLink>
        <div className="flex items-center gap-14">
          <div className="hidden lg:block">{navList}</div>
          <div className="items-center gap-4 hidden lg:flex">
            <button className="primary-btn lg:block large opacity-60" disabled>
              Launch App
            </button>
          </div>
        </div>
        <div className="flex items-center gap-8 lg:hidden">
          <button className="primary-btn large opacity-60" disabled>
            Launch App
          </button>
          <button
            className={`nav-button menu ${isOpen ? "opened" : ""} relative`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg width="100" height="35" viewBox="0 0 100 100">
              <path
                className="line line1"
                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
              />
              <path className="line line2" d="M 20,50 H 80" />
              <path
                className="line line3"
                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
              />
            </svg>
          </button>
        </div>
      </div>
      <motion.div
        className={`fixed left-0 w-full top-24 mt-2 lg:hidden overflow-hidden px-4 ${
          isOpen ? "fixed" : "hidden"
        }`}
      >
        <div
          className={`rounded-2xl px-6 border-4 border-[#ffffff1f] py-6 bg-[#4989a7] expanded-menu`}
        >
          <div className="lg:hidden">{navList}</div>
        </div>
      </motion.div>
    </div>
  );
};

// sfds

export default NavigationBar;
