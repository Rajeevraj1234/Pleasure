import React from "react";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { MdOutlineSecurity } from "react-icons/md";
import { SlGraph } from "react-icons/sl";

const WhyGoWithUs = () => {
  return (
    <div className="xl:h-[600px] xl:w-[1900px] mt-20 ">
      <div className="text-center h-[20%] text-[3rem] font-semibold mb-20 text-[#808080]">
        <h1>
          “ Why should <span className="text-[#FADA5E] font-bold">You</span> go
          ahead with <span className="text-[#FADA5E] font-bold">Me ?</span> ”
        </h1>
      </div>
      <div className="grid grid-cols-3 h-[80%] mx-[9rem]">
        <div className="flex w-[450px] h-[250px]">
          <div className="text-[9rem] w-1/2 flex justify-center items-center">
            <VscWorkspaceTrusted />
          </div>
          <div className="w-1/2 flex justify-start items-center ">
            <div className="">
              <h1 className="text-3xl font-semibold">Trust</h1>
              <p className="text-sm my-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maxime, veritatis.
              </p>
              <button className="bg-[#FADA5E] font-semibold text-sm px-4 py-2 rounded-md">
                More{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="flex w-[500px] h-[250px]">
          <div className="text-[10rem] w-1/2 flex justify-center items-center">
            <SlGraph />
          </div>
          <div className="w-1/2 flex justify-start items-center ">
            <div className="">
              <h1 className="text-3xl font-semibold">Growth</h1>
              <p className="text-sm my-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maxime, veritatis.
              </p>
              <button className="bg-[#FADA5E] font-semibold text-sm px-4 py-2 rounded-md">
                More{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="flex w-[500px] h-[250px]">
          <div className="text-[10rem] w-1/2 flex justify-center items-center">
            <MdOutlineSecurity />
          </div>
          <div className="w-1/2 flex justify-start items-center ">
            <div className="">
              <h1 className="text-3xl font-semibold">Security</h1>
              <p className="text-sm my-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maxime, veritatis.
              </p>
              <button className="bg-[#FADA5E] font-semibold text-sm px-4 py-2 rounded-md">
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
