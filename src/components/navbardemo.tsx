"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import GirlBoyImg from "../../public/images/coderpad-video-interview-illustration.png";
import Image from "next/image";

export function NavbarDemo() {
  return (
    // w-[90%] h-[550px] bg-[#1d1d1d] ml-[70px] mt-10 rounded-3xl
    <div className="w-full">
  <div className="relative flex items-center justify-center">
    <Navbar className="top-2" />
  </div>
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
</div>


  );
}
function Navbar({
  className,
}: {
  className?: string;
}) {
  const [active, setActive] = useState<
    string | null
  >(null);
  return (
    <div className={cn("", className)}>
      <Menu setActive={setActive}>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Platform"
        >
          <div className="flex flex-col-2 gap-2 text-sm w-[900px]">
            <div className="bg-[#252425] w-[250px] h-[400px] text-white ">
              <HoveredLink
                href="/"
                className=" flex flex-col"
              >
                <h1 className="font-bold text-xl mt-7 ml-5">
                  Screen
                </h1>
                <p className="mt-7 ml-5">
                  Move candidates forward <br />
                  with confidence with fair,{" "}
                  <br />
                  fast and accurate coding <br />
                  assessments.
                </p>
                <button className=" bg-[#1d1d1d] rounded-full border border-red-700 w-[160px] h-10 cursor-pointer mt-7 ml-5">
                  Discover Screen
                </button>
                <ul className="space-y-3 mt-6 ml-5">
                  <li>Gamified assessments</li>
                  <li>Test reporting</li>
                  <li>Cheating prevention</li>
                  <li>Question quality</li>
                </ul>
              </HoveredLink>
            </div>
            <div className="bg-[#252425] w-[250px] h-[400px] text-white ">
              <HoveredLink
                href="/"
                className=" flex flex-col"
              >
                <h1 className="font-bold text-xl mt-7 ml-5">
                  Interview
                </h1>
                <p className="mt-7 ml-5">
                  See how candidates code,
                  communicate and <br />
                  collaborate with 360° <br />
                  technical interviews.{" "}
                </p>
                <button className=" bg-[#1d1d1d] rounded-full border border-red-700 w-[160px] h-10 cursor-pointer mt-7 ml-5">
                  Discover Interview
                </button>
                <ul className="space-y-3 mt-6 ml-5">
                  <li>Gamified assessments</li>
                  <li>Test reporting</li>
                  <li>Cheating prevention</li>
                  <li>Question quality</li>
                </ul>
              </HoveredLink>
            </div>
            <div className="bg-[#252425] w-[250px] h-[400px] text-white">
              <HoveredLink
                href="/"
                className=" flex flex-col"
              >
                <h1 className="font-bold text-xl mt-7 ml-5">
                  Map
                </h1>
                <p className="mt-7 ml-5">
                  Identify your team’s <br />
                  strengths and weaknesses <br />
                  and track them over time.
                </p>
                <button className=" bg-[#1d1d1d] rounded-full border border-red-700 w-[160px] h-10 cursor-pointer mt-12 ml-5">
                  Discover Map
                </button>
                <ul className="space-y-3 mt-6 ml-5">
                  <li>Gamified assessments</li>
                  <li>Test reporting</li>
                  <li>Cheating prevention</li>
                  <li>Question quality</li>
                </ul>
              </HoveredLink>
            </div>
            <div className="bg-[#252425] w-[250px] h-[400px] text-white">
              <HoveredLink
                href="/"
                className=" flex flex-col"
              >
                <h1 className="font-bold text-xl mt-7 ml-5">
                  Play
                </h1>
                <p className="mt-7 ml-5">
                  Engage your team and <br />
                  sharpen their skills with <br />
                  fun technical challenges
                </p>
                <button className=" bg-[#1d1d1d] rounded-full border border-red-700 w-[160px] h-10 cursor-pointer mt-12 ml-5">
                  Discover Play
                </button>
              </HoveredLink>
            </div>
          </div>
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Use Cases"
        >
          <div className="flex flex-col space-y-4 text-sm ">
            <HoveredLink href="/">
              Data Science
            </HoveredLink>
            <HoveredLink href="/">
              Full Stack Developer
            </HoveredLink>
          </div>
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Resources"
        >
          <div className="flex gap-10">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/">
                Sandbox
              </HoveredLink>
              <HoveredLink href="/">
                Blog
              </HoveredLink>
              <HoveredLink href="/">
                State of Tech Hiring 2024
              </HoveredLink>
              <HoveredLink href="/">
                Webinars
              </HoveredLink>
            </div>
            <div className="flex flex-col space-y-3">
              <HoveredLink href="/">
                Docs
              </HoveredLink>
              <HoveredLink href="/">
                Interview Questions
              </HoveredLink>
              <HoveredLink href="/">
                Testimonials
              </HoveredLink>
            </div>
          </div>
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="For Candidates"
        ></MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Pricing"
        ></MenuItem>
        <button className="border border-white rounded-full  w-[150px] h-[40px] mt-2 bg-[#1d1d1d]  ">
          Request demo
        </button>
        <button className="border border-white rounded-full  w-[150px] h-[40px] mt-2 bg-[#1d1d1d]">
          Sign up free
        </button>
        <div className="ml-6 hidden lg:block">
          <a className="w-full" href="">
            <button
              className="mt-2   inline-flex items-center justify-center whitespace-nowrap text-lg font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 
            focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded bg-gradient-to-b
              text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200 h-10 px-4 py-2 group w-32"
            >
              Login
              <svg
                className="ml-2 -mr-1 w-5 h-5 group-hover:translate-x-1 transition"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </a>
        </div>
      </Menu>
    </div>
  );
}

