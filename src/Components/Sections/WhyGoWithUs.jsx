import React from "react";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { MdOutlineSecurity } from "react-icons/md";
import { SlGraph } from "react-icons/sl";

const WhyGoWithUs = () => {
  return (
    <div className="xl:h-[600px] xl:w-[1500px] 2xl:w-[1900px] mt-20 ">
      <div className="text-center h-[20%] text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-semibold mb-20 text-[#808080]">
        <h1>
          “ Why should <span className="text-[#FADA5E] font-bold">You</span> go
          ahead with <span className="text-[#FADA5E] font-bold">Me ?</span> ”
        </h1>
      </div>
      <div className="grid xl:grid-cols-3 h-[80%] mx-[2.5rem] sm:mx-[10rem] lg:mx-[25rem] xl:mx-[9rem]">
      <div className="flex w-[300px] sm:w-[500px] sm:h-[250px]">
          <div className="text-[5rem] sm:text-[10rem] w-1/2 flex justify-center items-center">
            <VscWorkspaceTrusted />
          </div>
          <div className="w-1/2 flex justify-start items-center ">
            <div className="">
              <h1 className="text-2xl sm:text-3xl font-semibold">Trust</h1>
              <p className="text-[10px] sm:text-sm py-2 sm:my-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maxime, veritatis.
              </p>
              <button className="bg-[#FADA5E] font-semibold text-sm px-2 py-1 sm:px-4 sm:py-2 rounded-md">
                More{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="flex w-[300px] sm:w-[500px] sm:h-[250px] my-10 sm:my-0">
          <div className="text-[5rem] sm:text-[10rem] w-1/2 flex justify-center items-center">
            <MdOutlineSecurity />
          </div>
          <div className="w-1/2 flex justify-start items-center ">
            <div className="">
              <h1 className="text-2xl sm:text-3xl font-semibold">Security</h1>
              <p className="text-[10px] sm:text-sm py-2 sm:my-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maxime, veritatis.
              </p>
              <button className="bg-[#FADA5E] font-semibold text-sm px-2 py-1 sm:px-4 sm:py-2 rounded-md">
                More{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="flex w-[300px] sm:w-[500px] sm:h-[250px]">
          <div className="text-[5rem] sm:text-[10rem] w-1/2 flex justify-center items-center">
            <SlGraph />
          </div>
          <div className="w-1/2 flex justify-start items-center ">
            <div className="">
              <h1 className="text-2xl sm:text-3xl font-semibold">Growth</h1>
              <p className="text-[10px] sm:text-sm py-2 sm:my-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maxime, veritatis.
              </p>
              <button className="bg-[#FADA5E] font-semibold text-sm px-2 py-1 sm:px-4 sm:py-2 rounded-md">
                More{" "}
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default WhyGoWithUs;
