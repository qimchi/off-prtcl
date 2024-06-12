import React from "react";
import "./Features.scss";
import CardOne from "./CardOne";
import CardTwo from "./CardTwo";
import CardThree from "./CardThree";

const Features = () => {
  return (
    <section className="features max-w-[90%] lg:max-w-[80%] mx-auto py-20 lg:py-40">
      <h2 className="text-center lg:text-5xl text-4xl leading-tight text-[#5573A0] mb-20">
        The internet is a critical need, but it is <br /> becoming increasingly
        vulnerable.
      </h2>
      <div className="flex justify-between items-center gap-6 flex-col lg:flex-row">
        <CardOne />
        <CardTwo />
        <CardThree />
      </div>
    </section>
  );
};

export default Features;
