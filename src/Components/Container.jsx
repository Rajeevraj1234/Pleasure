import React from "react";
import Landing from "./Sections/Landing";
import AboutFounder from "./Sections/AboutFounder";
import WhyGoWithUs from "./Sections/WhyGoWithUs";
import CountDown from "./Sections/CountDown";
import CallToAction from "./Sections/CallToAction";
const Container = () => {
  return (
    <div>
      <Landing />
      <AboutFounder />
      <WhyGoWithUs />
      <CountDown />
      <CallToAction />
    </div>
  );
};

export default Container;
