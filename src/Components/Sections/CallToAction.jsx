import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";

const CallToAction = () => {
  return (
    <div className="xl:h-[850px] xl:w-[1900px] md:flex my-10">
      <div className="w-1/2 h-full hidden md:block overflow-hidden">
        <img src="images/CTA.jpg" className="" alt="" />
      </div>
      <div className="w-full md:w-1/2 flex justify-center md:justify-start items-center ">
        <div className="xl:mt-[8rem] text-center md:text-start">
          <h1 className=" text-[1.7rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[6rem] text-[#4d4b4b] font-bold mb-10">
            Want <span className="text-[#FADA5E]">us</span> to Contact{" "}
            <span className="text-[#FADA5E]">you ?</span>
          </h1>
          <div className="">
            <input
            required
              className="foucu:outline-none border-2 border-[#808080] rounded-lg w-[80%] md:w-[60%] h-full px-3 py-2 lg:px-3  lg:py-5 text-lg"
              type="email"  
              placeholder="Email"
            /> <br />
            <button className="bg-[#FADA5E] mt-10 w-[150px] lg:w-[200px] h-[45px] lg:h-[60px] font-bold text-[lg] lg:text-2xl px-3 py-1 lg:px-4 lg:py-2 rounded-md">
              Signup{" "}
            </button>
          </div>
        </div>
      </div>  
    </div>
  );
};
export default CallToAction;
