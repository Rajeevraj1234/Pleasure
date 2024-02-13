import { useEffect, useState } from "react";
import Landing from "./Sections/Landing";
import AboutFounder from "./Sections/AboutFounder";
import WhyGoWithUs from "./Sections/WhyGoWithUs";
import CountDown from "./Sections/CountDown";
import CallToAction from "./Sections/CallToAction";
import SignupSlider from "./mini-components/SignupSlider";
import Footer from "./mini-components/footer";
import { motion } from "framer-motion";
const Container = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);
  useEffect;
  return (
    <div className="overflow-hidden select-none">
      {isLoading && (
        <div className="fixed bg-black opacity-60 lg:opacity-80 h-full w-full flex justify-center items-center z-[110]">
          <img src="images/l.svg" className="w-[100px]" alt="" />
        </div>
      )}
      <SignupSlider />
      <Landing />
      <AboutFounder />
      <WhyGoWithUs />
      <CountDown />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Container;
