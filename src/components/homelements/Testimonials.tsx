"use client";
import React from "react";
import InfoCard from "./Card";
import { Spacer } from "@nextui-org/react";

const Testimonials = () => (
  <div className="flex justify-center items-center">
    <div className=" w-[90%] ">
      <div className=" text-lg text-black py-4">
        <span className="text-xl font-normal font-poppins">Make a</span>{" "}
        <span className="text-xl font-bold font-poppins">
          meaningful impact in
        </span>
      </div>

      <div className="w-full flex justify-between">
        <button className=" px-4 py-2 rounded-full bg-white hover:bg-[#333]  text-black hover:text-white text-center font-poppins text-base ">
          Tech
        </button>
        <button className=" px-4 py-2 rounded-full bg-white hover:bg-[#333]  text-black hover:text-white text-center font-poppins text-base ">
          Product
        </button>
        <button className=" px-4 py-2 rounded-full bg-white hover:bg-[#333]  text-black hover:text-white text-center font-poppins text-base ">
          Career
        </button>
        <button className=" px-4 py-2 rounded-full bg-white hover:bg-[#333]  text-black hover:text-white text-center font-poppins text-base ">
          Data
        </button>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center mt-4">
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
);

export default Testimonials;
