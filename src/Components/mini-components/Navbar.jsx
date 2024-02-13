import { useState } from "react";
import {motion} from "framer-motion"

const Navbar = () => {
  const [isToggle, setIsToggle] = useState(false);
 
  const handleOpen = () =>{
    setIsToggle(!isToggle);
  }
  const handleClose = () =>{
    setIsToggle(!isToggle);
  }
  return (
    <>
      <nav className="fixed w-full px-4 py-4 flex justify-between items-center bg-transparent z-[99]">
        <a
          className="text-3xl font-bold leading-none tracking-tighter"
          href="#"
        >
          .raj
        </a>
        <div 
        onClick={handleOpen}
        className="lg:hidden">
          <button className="navbar-burger flex items-center text-black p-3">
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title> menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2  lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
          <li>
            <a
              className="text-[16px] text-black font-semibold hover:underline "
              href="#"
            >
              Home
            </a>
          </li>
          <li className="text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <a
              className="text-[16px] text-black hover:underline   font-semibold"
              href="#about"
            >
              About Us
            </a>
          </li>
          <li className="text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <a
              className="text-[16px] text-black font-semibold hover:underline "
              href="#"
            >
              Services
            </a>
          </li>
          <li className="text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <a
              className="text-[16px] text-black font-semibold hover:underline "
              href="#"
            >
              Pricing
            </a>
          </li>
          <li className="text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <a
              className="text-[16px] text-black font-semibold hover:underline "
              href="#"
            >
              Contact
            </a>
          </li>
        </ul>

        <a
          className="hidden lg:inline-block py-2 px-6 bg-[#FADA5E]  text-[16  px] text-black font-semibold rounded-xl transition duration-200"
          href="#"
        >
          Sign up
        </a>
      </nav>
      {/* ===============================================  MOBILE  =========================================================== */}
      {isToggle && (
        <div className=" relative z-[106] ">
          <div className="fixed inset-0 bg-gray-800 opacity-25" />
          <nav className="fixed top-0 right-0 bottom-0  flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
            <div className="flex items-end mb-8 ">
              <button 
              onClick={handleClose}
              className="">
                <svg
                  className="h-6 w-6 text-black  font-semibold cursor-pointer hover:underline "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* finding this one */}
            <div className="">
              <ul>
                <li className="mb-1">
                  <a
                    className="block p-4 text-[20px]  font-semibold text-black  hover:bg-[#8A9A5B] hover:text-white rounded"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-[20px]  font-semibold text-black  hover:bg-[#8A9A5B] hover:text-white rounded"
                    href="#"
                  >
                    About Us
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-[20px] font-semibold text-black  hover:bg-[#8A9A5B] hover:text-white rounded"
                    href="#"
                  >
                    Services
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-[20px] font-semibold text-black  hover:bg-[#8A9A5B] hover:text-white rounded"
                    href="#"
                  >
                    Pricing
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-[20px] font-semibold text-black  hover:bg-[#8A9A5B] hover:text-white rounded"
                    href="#"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-auto">
              <div className="pt-6">
                <a
                  className="block px-4 py-3 mb-2 leading-loose text-lg text-center text-black font-semibold bg-[#FADA5E]  rounded-xl"
                  href="#"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
