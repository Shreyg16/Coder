"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-white pt-3 text-lg  scroll-smooth hover:opacity-[0.9] dark:text-white "
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && children && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-[#1d1d1d] dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border text-white shadow-xl absolute"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative w-[1400px] h-[50px] rounded-xl dark:bg-black shadow-input flex justify-center space-x-4 px-8 mt-5 -ml-[50px] "
    >  
    <span>
    <svg className="logo logo-coderpad-logomark w-[30px] h-[30px] bg-[#4b4b4b]  rounded-md -ml-10 mt-2 " role="img" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 103 103"><title>CoderPad</title><rect width="103" height="103" fill="" rx="18.935"></rect><path fill="#fff" className="inner-mark" d="m41.918 68.776 11.296-34.552h7.88l-11.38 34.552h-7.796ZM21.94 51.411l15.942 
              8.705v8.364L13.758 55.678v-8.356L37.882 34.52v8.896l-15.941 7.995ZM81.52 51.411l-16.223-7.995V34.52l24.265 12.802v8.356L65.297 68.48v-8.364l16.224-8.705Z">
            </path>
            </svg>
        <h2 className=" text-2xl font-bold text-white -mt-8 mr-10 cursor-pointer ">CoderPad</h2>
      </span>
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-white ">
          {title}
        </h4>
        <p className="text-white text-sm max-w-[10rem] ">
          {description}
        </p>
      </div>
    </Link>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-white "
    >
      {children}
    </Link>
  );
};
