import React from "react";
import "./EcoSystem.scss";
import offlinepayLogo from "../../../../assets/offlinepay-logo.svg";
import fernwehLogo from "../../../../assets/fernweh-logo.svg";
import oracleSocialLogo from "../../../../assets/oraclesocial-logo.svg";
import arrow from "../../../../assets/arrow.svg";
import diffuseLogo from "../../../../assets/diffuse-logo.svg";

const data = [
  {
    logo: offlinepayLogo,
    title: "OfflinePay",
    description:
      "OfflinePay enables P2P payments, micro-financing, and yield savings accounts to support the unbanked.",
    buttonLabel: "Payments",
    buttonLink: "https://memebase.cheezburger.com/",
  },
  {
    logo: fernwehLogo,
    title: "Fernweh",
    description:
      "Fernweh is a fully offline end-to-end encrypted communication platform.",
    buttonLabel: "Messaging",
    buttonLink: "https://memebase.cheezburger.com/",
  },
  {
    logo: oracleSocialLogo,
    title: "Oracles Social",
    description:
      "lorA social platform to track social points, participate in quests, and engage in governance within the Offline ecosystem.em",
    buttonLabel: "onchain quests",
    buttonLink: "https://memebase.cheezburger.com/",
  },
  {
    logo: diffuseLogo,
    title: "Diffuse",
    description:
      "A hyper-local community platform for verifiably authentic news and alerts.",
    buttonLabel: "news alerts",
    buttonLink: "https://memebase.cheezburger.com/",
  },
];

const EcoSystem = () => {
  return (
    <section className="ecosystem">
      <div className="max-w-[90%] lg:max-w-[80%] mx-auto">
        <h2 className="lg:text-5xl text-4xl leading-tight mb-16">
          Ecosystem Products
        </h2>
        <div className="grid xl:grid-cols-4 lg:grid-cols-2 gap-10 mb-10">
          {data.map(
            ({ logo, title, description, buttonLabel, buttonLink }, index) => (
              <a
                href={buttonLink}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="h-full"
              >
                <div
                  className={`rounded-xl p-8 text-dark transition-all duration-500 ease-linear h-full card`}
                  key={index}
                >
                  <img src={logo} alt={title} className="w-[35px] mb-4" />
                  <h3 className="text-2xl font-medium mb-4 title">{title}</h3>
                  <p className="description mb-8 lg:min-h-[100px]">
                    {description}
                  </p>

                  <button className="primary-btn dark-outlined uppercase text-sm">
                    {buttonLabel}
                  </button>
                </div>
              </a>
            )
          )}
        </div>
        <a
          href="https://memebase.cheezburger.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-[#5573A0] p-6 rounded-xl flex justify-between items-center">
            <p>
              Don’t see a product you want to use? Get in touch to request apps
              or submit grant proposals to build them.
            </p>
            <img src={arrow} alt="arrow" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default EcoSystem;
