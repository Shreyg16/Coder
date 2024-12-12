import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Article() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <main className="w-full h-full bg-[#020817] border-t border-gray-700 ">
      <h1 className="text-5xl pl-8 md:pl-24 pt-10 text-center md:text-left">
        Our Latest Articles
      </h1>
      <div className="w-[100%] md:w-[90%] h-auto  mx-auto mt-10 rounded-3xl p-4">
        <Slider {...settings}>
          {data.map((d, index) => (
            <div
              key={index}
              className="bg-[#1d1d1d] h-[400px] rounded-3xl mt-5 p-4 flex flex-col items-center justify-between"
            >
              <div>
                <Image
                  src={d.img}
                  alt={d.title}
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
              </div>
              <div className="text-center mt-4">
                <p className="text-gray-400 font-semibold text-lg">
                  {d.title}
                </p>
                <a href="#">
                  <button className="mt-5 md:mt-7 font-bold bg-transparent border border-gray-500 text-slate-300 rounded-full h-10 w-full md:w-48">
                    Read
                    {/* <svg
                      className="ml-2 -mr-1 w-5 h-5 group-hover:translate-x-1 transition"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg> */}
                  </button>
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </main>
  );
}

const data = [
  {
    title: `9 Steps to Handling Suspicions of Cheating in Tech Hiring`,
    img: `https://coderpad.io/wp-content/uploads/2024/12/Blog-image-8-Steps-to-Handling-Suspicions-of-Cheating-in-Tech-Hiring-1-300x200.png`,
  },
  {
    title: `Anti-Cheating Recruitment Tool Comparison Chart`,
    img: `https://coderpad.io/wp-content/uploads/2024/12/Blog-image-Anti-Cheating-Tool-Comparison-Chart-2-300x200.png`,
  },
  {
    title: `“Anti-Cheat” Candidate Communication Templates`,
    img: `https://coderpad.io/wp-content/uploads/2024/12/templates--300x200.png`,
  },
  {
    title: `Checklist: What Makes for a Realistic Coding Assessment?`,
    img: `https://coderpad.io/wp-content/uploads/2024/12/blog-image-checklist-300x200.png`,
  },
  {
    title: `How Effective Is Your Cheating Prevention Strategy? A Self-Assessment Guide`,
    img: `https://coderpad.io/wp-content/uploads/2024/11/cp-blogimage-strategy-ok-300x200.png`,
  },
  {
    title: `Cheating Prevention in Technical Interviews: Balancing Hiring Integrity & Candidate Experience`,
    img: `https://coderpad.io/wp-content/uploads/2024/10/cp-blogimage-balance-ok-300x200.png`,
  },
  {
    title: `Best Practices for Proctoring in Technical Assessments Without Compromising Candidate Experience`,
    img: `https://coderpad.io/wp-content/uploads/2024/10/cp-blogimage-template-ai-balance-proctoring-and-cheating-300x200.png`,
  },
  {
    title: `GenAI for Technical Hiring: Friend or Foe?`,
    img: `https://coderpad.io/wp-content/uploads/2024/10/cp-blogimage-ai-robot-300x200.png`,
  },
  {
    title: `Why Do Candidates Cheat? Uncovering the Root Causes and How to Address Them`,
    img: `https://coderpad.io/wp-content/uploads/2024/09/cp-blogimage-template-sep-cheating-1-1-300x200.png`,
  },
  {
    title: `How to Build an Attractive Tech Employer Brand`,
    img: `https://coderpad.io/wp-content/uploads/2023/10/15-How-to-Build-an-Attractive-Tech-Employer-Brand-in-2023-300x200.png`,
  },
  {
    title: `CoderPad June releases`,
    img: `https://coderpad.io/wp-content/uploads/2024/07/cp-blogimage-template-july-300x200.png`,
  },
  {
    title: `Q&A: Musings of a CEO on Tech Interviews, Cheating and AI`,
    img: `https://coderpad.io/wp-content/uploads/2024/06/cp-software-amanda-interview-noai-bg-300x200.png`,
  },
];

export default Article;
