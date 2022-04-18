import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll/modules";

export const Main = () => {
  
  return (
    <div name="home" className="w-full h-screen bg-slate-900">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-blue-500">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Philip Fabros
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Web Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I’m a Web developer (Backend) specializing in building server-side web
          logic and integration of the work front-end developers do. I work
          daily to utilize computer programming language in the development of a
          number of technical projects and assignments.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-500 hover:border-blue-500">
            View Work
            <Link
                  to="skills"
                  smooth={true}
                  duration={500}
                ></Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 ">
             
              </HiArrowNarrowRight>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
