import React from "react";

const Landing = () => {
  return (
    <div className=" w-full px-3 lg:p-0 h-[600px] sm:h-[900px] md:h-[700px] lg:h-[1200px] lg:w-[100vw] 2xl:w-[100vw] 2xl:h-[900px] ">
      <div className="lg:h-full lg:w-full lg:flex ">
        <div className=" w-full  lg:w-1/2 lg:h-full">
          <img
            src="images/landing1.jpg"
            className="object-cover h-[500px] sm:h-[700px] md:h-[500px] relative translate-y-[30%] lg:translate-y-[0%] w-full lg:h-full lg:w-full"
            alt=""
          />
        </div>
        <div className="w-1/2 lg:flex justify-center items-center z-[5] hidden ">
          <img src="images/landing2.jpg" className="h-[500] w-[370px]  xl:h-[550px] xl:w-[390px]" alt="" />
        </div>
      </div>
      <div className="absolute inset-0 text-[3.9rem] sm:text-[6rem] md:text-[9rem] lg:text-[13rem] lg:ml-0 xl:text-[16rem] 2xl:text-[19rem] text-center font-semibold tracking-wider text-[#8A9A5B] top-[14%] sm:top-[5%] md:top-[5%] lg:top-[21%] xl:top-[10%] 2xl:top-[-2%]">
        <h1 data-scroll data-scroll-section data-scroll-speed="-0.35">
          BUSINESS
        </h1>
      </div>
    </div>
  );
};

export default Landing;
