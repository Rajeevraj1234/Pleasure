import React, { useState, useEffect } from "react";

function Countdown() {
  const [time, setTime] = useState({ hours: 0, minutes: 10, seconds: 0 });

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (time.hours === 0 && time.minutes === 0 && time.seconds === 0) {
        clearInterval(intervalId);
      } else {
        setTime((prevTime) => {
          if (prevTime.minutes === 0 && prevTime.seconds === 0) {
            return {
              hours: prevTime.hours - 1,
              minutes: 59,
              seconds: 59,
            };
          } else if (prevTime.seconds === 0) {
            return {
              ...prevTime,
              minutes: prevTime.minutes - 1,
              seconds: 59,
            };
          } else {
            return {
              ...prevTime,
              seconds: prevTime.seconds - 1,
            };
          }
        });
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [time]);

  const formatTime = (time) => {
    const hours = time.hours.toString().padStart(2, "0");
    const minutes = time.minutes.toString().padStart(2, "0");
    const seconds = time.seconds.toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="xl:h-[400px] xl:w-[1900px] mt-20 ">
      <div className="w-full flex justify-center items-center">
        <div className="bg-[#242323]  w-full h-[400px] flex items-center justify-center text-center  rounded-t-3xl  ">
          <div>
            <div className="text-center mx-2 sm:mx-0 h-[20%] text-[1.7rem] md:text-[2.5rem]  text-white tracking-tighter font-semibold">
              <h1>
                What are you  <span className="font-bold text-[#FADA5E]">WAITING</span> for ?
              </h1>
            </div>
            <p className="text-white text-lg font-semibold">Signup to get discount % </p>
            <p className="font-bold text-[4rem] sm:text-[5rem] md:text-[6rem]  my-5 text-white">{formatTime(time)}</p>
            <button className="bg-[#FADA5E] w-[200px] md:w-[500px] h-[60px] font-bold text-2xl  px-4 py-2 rounded-md">
              Signup{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Countdown;
