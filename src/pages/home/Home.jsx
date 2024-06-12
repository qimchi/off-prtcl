import React from "react";
import NavigationBar from "../../components/NavigationBar";
import "./Home.scss";
import Hero from "./components/hero/Hero";
import Features from "./components/features/Features";
import Infrastructure from "./components/infrastructure/Infrastructure";
import EcoSystem from "./components/ecosystem/EcoSystem";
import JoinUs from "./components/join-us/JoinUs";
import Footer from "./components/footer/Footer";
// import NewFeatures from "./components/features/NewFeatures";

const Home = () => {
  return (
    <>
      <div className="max-w-[99%] mx-auto home">
        <div className="home-contents">
          <NavigationBar />
          <Hero />
          {/* <NewFeatures /> */}
          <Features />
          <Infrastructure />
          <EcoSystem />
          <JoinUs />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
