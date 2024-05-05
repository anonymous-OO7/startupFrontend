"use client";
import React from "react";
import InfoCard from "./Card";
import { Spacer } from "@nextui-org/react";

const TechContent = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className=" w-[80%] ">
          <div className=" text-lg text-black py-4">
            <span className="text-xl font-normal font-poppins">Make a</span>{" "}
            <span className="text-xl font-bold font-poppins">
              meaningful impact in
            </span>
          </div>

          <div className="flex flex-wrap justify-between my-4 ">
            <button className="w-auto sm:min-w-28 px-4 py-3 rounded-full bg-white hover:bg-[#333] text-black hover:text-white text-center font-poppins text-base mb-2 sm:mb-0">
              <p className="font-poppins font-normal text-base sm:text-xl">
                Data
              </p>
            </button>
            <button className="w-auto px-8 py-3 rounded-full bg-white hover:bg-[#333] text-black hover:text-white text-center font-poppins text-base mb-2 sm:mb-0">
              <p className="font-poppins font-normal text-xl">Network</p>
            </button>
            <button className="w-auto px-8 py-3 rounded-full bg-white hover:bg-[#333] text-black hover:text-white text-center font-poppins text-base mb-2 sm:mb-0">
              <p className="font-poppins font-normal text-xl">Deep Learning</p>
            </button>

            <button className="w-auto px-8 py-3 rounded-full bg-white hover:bg-[#333] text-black hover:text-white text-center font-poppins text-base mb-2 sm:mb-0">
              <p className="font-poppins font-normal text-xl">Web</p>
            </button>
            <button className="w-auto px-8 py-3 rounded-full bg-white hover:bg-[#333] text-black hover:text-white text-center font-poppins text-base mb-2 sm:mb-0">
              <p className="font-poppins font-normal text-xl">Algorithm</p>
            </button>
            <button className="w-auto px-8 py-3 rounded-full bg-white hover:bg-[#333] text-black hover:text-white text-center font-poppins text-base mb-2 sm:mb-0">
              <p className="font-poppins font-normal text-xl">Cybersecurity</p>
            </button>
          </div>

          <div className="flex items-center justify-center text-center mt-28">
            <div className="flex flex-col items-center justify-center rounded-tr-full rounded-bl-full w-full bg-white">
              <div className="flex flex-col p-2 m-2 max-w-7xl">
                <p className="text-xl md:text-3xl text-black font-medium font-poppins">
                  Discover People
                </p>

                <div className="flex items-center justify-center lg:flex-row flex-col space-x-4 space-y-4 p-2">
                  <div className="flex-col px-6 py-2 w-[90%] md:w-[50%] lg:w-1/4">
                    <div className="h-40 w-40 border-2 border-yellow-400 rounded-full overflow-hidden bg-gray-200">
                      <img
                        src="https://source.unsplash.com/300x300/?man"
                        alt=""
                        className=""
                      />
                    </div>

                    <p className="text-md text-white cursor-pointer w-[50%] bg-yellow-400 lg:rotate-90 mr-40 mt-8 lg:mb-16 pr-4 pl-1 py-1">
                      Designer
                    </p>
                    <p className=" font-poppins text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                      Amit Patel
                    </p>
                    <p className="text-left text-black m-2 font-poppins">
                      Software Engineer specializing in web development with
                      expertise in React.js and Node.js.
                    </p>
                  </div>
                  <div className="flex-col px-6 py-2 w-[90%] md:w-[50%] lg:w-1/4">
                    <div className="h-40 w-40 border-2 border-green-400 rounded-full overflow-hidden bg-gray-200">
                      <img
                        src="https://source.unsplash.com/300x300/?boy,girl"
                        alt=""
                        className=""
                      />
                    </div>

                    <div className="text-md text-white cursor-pointer w-[50%] bg-green-400 lg:rotate-90 mr-40 mt-8 lg:mb-16 pr-4 pl-1 py-1">
                      Front-end
                    </div>
                    <p className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                      Priya Sharma
                    </p>
                    <div className="text-left m-2 text-black">
                      Data Scientist with a focus on machine learning algorithms
                      and predictive analytics.
                    </div>
                  </div>
                  <div className="flex-col px-6 py-2 w-[90%] md:w-[50%] lg:w-1/4">
                    <div className="h-40 w-40 border-2 border-cyan-400 rounded-full overflow-hidden bg-gray-200">
                      <img
                        src="https://source.unsplash.com/300x300/?boy,man"
                        alt=""
                        className=""
                      />
                    </div>

                    <div className="text-md text-white cursor-pointer w-[50%] bg-cyan-400 lg:rotate-90 mr-40 mt-8 lg:mb-16 pr-4 pl-1 py-1">
                      CEO
                    </div>
                    <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                      Rajesh Singh
                    </div>
                    <div className="text-left m-2 text-black">
                      Cybersecurity Analyst specializing in penetration testing
                      and threat detection.
                    </div>
                  </div>
                  <div className="flex-col px-6 py-2 w-[90%] md:w-[50%] lg:w-1/4">
                    <div className="h-40 w-40 border-2 border-fuchsia-400 rounded-full overflow-hidden bg-gray-200">
                      <img
                        src="https://source.unsplash.com/300x300/?boy,man"
                        alt=""
                        className=""
                      />
                    </div>

                    <div className="text-md text-white cursor-pointer w-[50%] bg-fuchsia-400 lg:rotate-90 mr-40 mt-8 lg:mb-16 pr-4 pl-1 py-1">
                      Deployer
                    </div>
                    <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                      Sanjay Verma
                    </div>
                    <div className="text-left m-2 text-black">
                      Cloud Solutions Architect with extensive experience in
                      designing and implementing scalable cloud infrastructure
                      using AWS and Azure.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center mt-[20vh]">
            <InfoCard />
            <Spacer y={5} />
            <Spacer x={5} />

            <InfoCard />
            <Spacer y={5} />
            <Spacer x={5} />

            <InfoCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechContent;
