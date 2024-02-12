import React from "react";

const Landing = () => {
  return (
    <div className="xl:h-[900px] xl:w-[1900px]">
      <div className="h-full w-full flex ">
        <div className="w-1/2 h-full">
          <img
            src="images/island.jpg"
            className="object-cover h-full w-full"
            alt=""
          />
        </div>
        <div className="w-1/2 flex justify-center items-center z-[5]">
          <img src="images/relax.jpg" className="h-[550px] w-[390px]" alt="" />
        </div>
      </div>
      <div className="absolute inset-0 text-[20rem] text-center font-semibold tracking-wider text-[#8A9A5B] top-[-2%]">
        <h1 data-scroll data-scroll-section data-scroll-speed="-0.35">
          PLEASURE
        </h1>
      </div>
    </div>
  );
};

export default Landing;
