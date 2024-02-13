import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

const SignupSlider = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const comeup = setTimeout(() => {
      setShow(true);
    }, 15000);
  }, []);

  const handleClick = () => {
    setShow(false);
  };

  return (
    <div>
      {show && (
        <>
          <div className="fixed h-[100vh] w-[100vw] bg-black opacity-75 z-[99]"></div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", delay: 0.1 }}
            className="fixed inset-0 h-[100vh] z-[100] w-[100vw] flex justify-center items-center"
          >
            <motion.div className="bg-white h-[470px] w-[550px] shadow-xl rounded-xl text-center mx-5 lg:mx-0">
              <h1 className="relative text-center mb-20 text-[4rem] font-bold tracking-tighter">
                Signup
                <span
                  onClick={handleClick}
                  className="absolute inset-0 m-2 text-[#808080] text-[2.5rem]"
                >
                  <IoMdClose />
                </span>
              </h1>
              <form action="">
                <input
                  required
                  className="focus:outline-none border-2 border-[#808080] rounded-lg w-[80%] px-3 py-3 text-lg"
                  type="email"
                  placeholder="Email"
                />
                <input
                required
                  className="focus:outline-none mt-5 border-2 border-[#808080] rounded-lg w-[80%] px-3 py-3 text-lg"
                  type="number"
                  placeholder="Phone number"
                />
                <br />
                <button
                  type="submit"
                  className="bg-[#FADA5E] border-2 border-black mt-10 w-[200px] h-[60px] font-bold text-2xl px-4 py-2 rounded-md"
                >
                  Signup
                </button>
              </form>
            </motion.div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default SignupSlider;
