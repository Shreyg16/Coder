import Image from "next/image";
import React from "react";
import ByIg from "../../public/images/maxresdefault.jpg";
import Francois from "../../public/images/francois-red-150x150.png";
import Guillaume from "../../public/images/guillaume-red-150x150.png";
import Nathalie from "../../public/images/nathalie-red-2-150x150.png";

function Youtube() {
  return (
    <div className="w-full h-auto mt-20 bg-[#020817] border-t border-gray-700 px-4 sm:px-8 md:px-16 lg:px-32">
      <div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl mt-10 sm:mt-14 font-bold text-center">
          Watch the recording:
        </h2>
        <div className="flex justify-center mt-8 sm:mt-12">
          <Image
            src={ByIg}
            alt="Bg Image"
            className="cursor-pointer rounded-3xl w-full max-w-4xl h-auto"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row mt-10 ">
        <div className="lg:w-2/3">
          <h1 className="text-2xl sm:text-3xl font-bold text-center lg:text-left">
            About
          </h1>
          <p className="mt-5 text-base text-[#a3abb5] sm:text-lg leading-relaxed text-center lg:text-left">
            GenAI is now woven into many folks’
            day-to-day tasks. <br />
            Developers and recruiters are no
            exception. But, with <br /> change come
            questions.
          </p>
          <p className="mt-5 text-[#a3abb5] text-base sm:text-lg leading-relaxed text-center lg:text-left">
            <span className="font-bold">
              Recruiters want to know:
            </span>{" "}
            Is GenAI opening the door to <br /> increased
            cheating in interviews? <br />
            Should candidates have  <br />access to AI
            tools during live interviews and
            online  <br /> assessments?
            How can recruiters leverage AI to
            their <br /> advantage? Do recruiters need to
            act now to protect the <br /> integrity of
            their hiring process?
          </p>
          <p className="mt-5 text-[#a3abb5] text-base sm:text-lg leading-relaxed text-center lg:text-left">
            In this webinar, we’ll put AI in the
            🔥 hot seat 🔥 and explore <br /> how it’s
            reshaping candidates and recruiters’
            approach to <br /> technical interviews.
            We’ll challenge the fears around <br />
            cheating and offer fresh perspectives
            on how GenAI can <br /> enhance, rather than
            undermine, your recruitment process.
          </p>

          <h2 className="mt-8 text-xl font-bold text-center lg:text-left">
            Key discussion items:
          </h2>
          <ul className="mt-4 text-[#a3abb5] space-y-4 text-base sm:text-lg font-light text-center lg:text-left">
            <li>
              The impact of GenAI on the
              <span className="font-bold">
                increase in cheating:
              </span> <br />
              exploring trends and evidence
            </li>
            <li>
              The
              <span className="font-bold">
                transformation of technical
                interviews through
              </span> <br />
              AI and implications for fairness and
              integrity
            </li>
            <li>
              Practical approaches to
              <span className="font-bold">
                identifying and addressing <br />
                suspicious behavior
              </span>
              during the interview process
            </li>
            <li>
              Leveraging AI effectively to
              <span className="font-bold">
                build a solid, forward- <br />thinking 
                recruitment strategy
              </span>
                (use cases)
            </li>
          </ul>
        </div>

        <div className="lg:w-1/3 mt-16 lg:mt-0">
          <h1 className="text-2xl sm:text-3xl font-bold text-center lg:text-left">
            Guests
          </h1>
          <div className="space-y-10 mt-8 text-[#a3abb5] ">
            <div className="flex items-center space-x-4">
              <Image
                src={Francois}
                alt="François Gauthier"
                className="w-20 h-20 rounded-full"
              />
              <div>
                <h2 className="text-xl font-bold">
                  François Gauthier
                </h2>
                <p className="text-sm">
                  Dir. of Talent Acquisition
                </p>
                <span className="text-sm">
                  Ubisoft
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Image
                src={Guillaume}
                alt="Guillaume"
                className="w-20 h-20 rounded-full"
              />
              <div>
                <h2 className="text-xl font-bold">
                  Guillaume
                </h2>
                <p className="text-sm">CEO</p>
                <span className="text-sm">
                  TechCorp
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Image
                src={Nathalie}
                alt="Nathalie"
                className="w-20 h-20 rounded-full"
              />
              <div>
                <h2 className="text-xl font-bold">
                  Nathalie
                </h2>
                <p className="text-sm">
                  AI Specialist
                </p>
                <span className="text-sm">
                  InnovateAI
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Youtube;
