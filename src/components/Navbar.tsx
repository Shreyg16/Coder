// components/Navbar.tsx
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import GirlBoyImg from "../../public/images/coderpad-video-interview-illustration.png";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState<
    string | null
  >(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (menu: string) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  return (
    <>
      <nav className="bg-black font-regular border-b border-gray-600 shadow-md sticky top-0 z-50 h-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <svg
              className="logo logo-coderpad-logomark w-[25px] h-[25px] bg-gray-700 -mt-1 rounded-md"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 103 103"
            >
              <title>CoderPad</title>
              <rect
                width="103"
                height="103"
                fill=""
                rx="18.935"
              ></rect>
              <path
                fill="#fff"
                className="inner-mark"
                d="m41.918 68.776 11.296-34.552h7.88l-11.38 34.552h-7.796ZM21.94 51.411l15.942 
              8.705v8.364L13.758 55.678v-8.356L37.882 34.52v8.896l-15.941 7.995ZM81.52 51.411l-16.223-7.995V34.52l24.265 12.802v8.356L65.297 68.48v-8.364l16.224-8.705Z"
              ></path>
            </svg>
            <div className="flex-shrink-0 text-lg font-bold cursor-pointer -ml-[90px]">
              CoderPad
            </div>

            {/* Desktop Menu */}
            <div className="hidden text-[15px] md:flex space-x-6 ">
              <div className="relative group">
                <button
                  onClick={() =>
                    toggleDropdown("platform")
                  }
                  className="text-gray-600  hover:text-slate-300 focus:outline-none"
                >
                  Platform
                </button>
                {dropdown === "platform" && (
                  <div className="absolute left-0 mt-2 w-40 bg-black border border-gray-600 shadow-lg rounded-md">
                    <Link
                      href="/platform/feature1"
                      className="block px-4 py-2 text-gray-700 hover:text-slate-300"
                    >
                      Screen
                    </Link>
                    <Link
                      href="/platform/feature2"
                      className="block px-4 py-2 text-gray-700 hover:text-slate-300"
                    >
                      Interview
                    </Link>
                    <Link
                      href="/platform/feature2"
                      className="block px-4 py-2 text-gray-700 hover:text-slate-300"
                    >
                      Map
                    </Link>
                    <Link
                      href="/platform/feature2"
                      className="block px-4 py-2 text-gray-700 hover:text-slate-300"
                    >
                      Play
                    </Link>
                  </div>
                )}
              </div>

              <div className="relative group">
                <button
                  onClick={() =>
                    toggleDropdown("useCases")
                  }
                  className="text-gray-600  hover:text-slate-300 focus:outline-none"
                >
                  Use Cases
                </button>
                {dropdown === "useCases" && (
                  <div className="absolute left-0 mt-2 w-48 bg-black border border-gray-600 shadow-lg rounded-md">
                    <Link
                      href="/use-cases/industry1"
                      className="block px-4 py-2 text-gray-700 hover:text-slate-300"
                    >
                      Data Science
                    </Link>
                    <Link
                      href="/use-cases/industry2"
                      className="block px-4 py-2 text-gray-700 hover:text-slate-300"
                    >
                      Full Stack Developer
                    </Link>
                  </div>
                )}
              </div>

              <div className="relative group">
                <button
                  onClick={() =>
                    toggleDropdown("resources")
                  }
                  className="text-gray-600  hover:text-slate-300 focus:outline-none"
                >
                  Resources
                </button>
                {dropdown === "resources" && (
                  <div className="absolute left-0 mt-2 w-48 bg-black border border-gray-600 shadow-lg rounded-md">
                    <Link
                      href="/resources/blog"
                      className="block px-4 py-2 text-gray-700 hover:text-slate-300"
                    >
                      Sandbox
                    </Link>
                    <Link
                      href="/resources/help-center"
                      className="block px-4 py-2 text-gray-700 hover:text-slate-300"
                    >
                      Blog
                    </Link>
                    <Link
                      href="/resources/help-center"
                      className="block px-4 py-2 text-gray-700 hover:text-slate-300"
                    >
                      Interview Questions
                    </Link>
                    <Link
                      href="/resources/help-center"
                      className="block px-4 py-2 text-gray-700 hover:text-slate-300"
                    >
                      Webinars
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/"
                className="text-gray-600  hover:text-slate-300"
              >
                For Candidates
              </Link>

              <Link
                href="/"
                className="text-gray-600  hover:text-slate-300"
              >
                Pricing
              </Link>
            </div>

            {/* Buttons */}
            <div className="hidden text-sm md:flex space-x-4 ">
              <button className="bg-transparent border border-gray-800 text-slate-300  px-8 py-1 rounded-full hover:text-gray-600">
                Request Demo
              </button>
              <button className="bg-transparent border border-gray-800 text-slate-300 px-8 py-1 rounded-full hover:text-gray-600">
                Sign Up Free
              </button>
              <button className="text-white  bg-blue-600  px-10 rounded ">
                Login
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none"
              >
                {isOpen ? (
                  <FaTimes size={24} />
                ) : (
                  <FaBars size={24} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-black shadow-md">
            <div className="space-y-4 py-4">
              <button
                onClick={() =>
                  toggleDropdown("platform")
                }
                className="block w-full text-left px-4 py-2 text-gray-600  hover:text-slate-300"
              >
                Platform
              </button>
              {dropdown === "platform" && (
                <div className="space-y-2 ml-4">
                  <Link
                    href="/platform/feature1"
                    className="block px-4 py-2 text-gray-700"
                  >
                    Screen
                  </Link>
                  <Link
                    href="/platform/feature2"
                    className="block px-4 py-2 text-gray-700"
                  >
                    Interview
                  </Link>
                  <Link
                    href="/platform/feature2"
                    className="block px-4 py-2 text-gray-700"
                  >
                    Map
                  </Link>
                  <Link
                    href="/platform/feature2"
                    className="block px-4 py-2 text-gray-700"
                  >
                    Play
                  </Link>
                </div>
              )}

              <button
                onClick={() =>
                  toggleDropdown("useCases")
                }
                className="block w-full text-left px-4 py-2 text-gray-600  hover:text-slate-300"
              >
                Use Cases
              </button>
              {dropdown === "useCases" && (
                <div className="space-y-2 ml-4">
                  <Link
                    href="/use-cases/industry1"
                    className="block px-4 py-2 text-gray-700"
                  >
                    Data Science
                  </Link>
                  <Link
                    href="/use-cases/industry2"
                    className="block px-4 py-2 text-gray-700"
                  >
                    Full Stack Developer
                  </Link>
                </div>
              )}

              <button
                onClick={() =>
                  toggleDropdown("resources")
                }
                className="block w-full text-left px-4 py-2  text-gray-600  hover:text-slate-300"
              >
                Resources
              </button>
              {dropdown === "resources" && (
                <div className="space-y-2 ml-4">
                  <Link
                    href="/resources/blog"
                    className="block px-4 py-2 text-gray-700"
                  >
                    Sandbox
                  </Link>
                  <Link
                    href="/resources/help-center"
                    className="block px-4 py-2 text-gray-700"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/resources/help-center"
                    className="block px-4 py-2 text-gray-700"
                  >
                    Interview Questions
                  </Link>
                  <Link
                    href="/resources/help-center"
                    className="block px-4 py-2 text-gray-700"
                  >
                    Webinars
                  </Link>
                </div>
              )}

              <Link
                href="/resources"
                className="block px-4 py-2 text-gray-600  hover:text-slate-300"
              >
                For Candidates
              </Link>
              <Link
                href="/resources"
                className="block px-4 py-2 text-gray-600  hover:text-slate-300"
              >
                Pricing
              </Link>

              <div className="px-4 space-y-2">
                <button className="block w-full bg-transparent border border-gray-800 text-slate-300 px-4 py-2 rounded-full hover:text-gray-600">
                  Request Demo
                </button>
                <button className="block w-full bg-transparent border border-gray-800 text-slate-300 px-4 py-2 rounded-full hover:text-gray-600">
                  Sign Up Free
                </button>
                <button className="block w-full text-white  bg-blue-600 px-4 py-2 rounded">
                  Login
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
      <div className="flex flex-col-reverse md:flex-row items-center text-center md:text-left px-4 md:px-10 lg:px-20 lg:w-full">
        <div className="flex flex-col items-center md:items-start">
          <p className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-snug">
            AI in the Hot Seat: How <br />
            GenAI Is Changing the <br />
            Cheating Game in Tech <br />
            Hiring
          </p>
          <p className="text-white text-lg sm:text-xl mt-6 cursor-pointer">
            On-Demand Webinar
          </p>
        </div>
        <div className="flex justify-center md:justify-end mt-10 md:mt-0">
          <Image
            src={GirlBoyImg}
            alt="Girl & Boy Image"
            className="w-[300px] sm:w-[400px] md:w-[480px] h-auto mt-10 ml-20"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
