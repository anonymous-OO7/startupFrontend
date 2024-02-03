import { Illustration } from "@/assets/images/Illustration";
import { Star } from "@/assets/images/Star";
import { Avatar, AvatarGroup } from "@nextui-org/react";

import React from "react";

const FrontContent = () => {
  return (
    <div className=" w-full flex justify-center items-center">
      <div className="  sm:w-[90%]">
        <div className="w-full md:flex  sm:justify-around ">
          <div className="md:w-[40%]  md:order-last flex justify-center items-center">
            <div className=" w-[60%] ">
              <Illustration className="w-[100%] h-[100%]" />
            </div>
          </div>

          <div className="md:w-1/2 ">
            <div className="text-lg sm:text-xl md:text-2xl lg:text-4xl text-black p-4">
              <span className="text-4xl  md:text-5xl lg:text-7xl font-normal font-poppins">
                Go beyond
              </span>{" "}
              <span className="text-4xl  md:text-5xl lg:text-7xl font-bold font-poppins">
                and
              </span>
              <br />
              <span className="text-4xl  md:text-5xl lg:text-7xl font-bold font-poppins">
                create your space
              </span>
            </div>
          </div>
        </div>
        <div className="text-left text-lg font-normal font-poppins text-black p-4">
          Turn your passion and knowledge into a thriving business. Help your
          audience get ahead in life
        </div>
        <button className="flex m-4 justify-center items-center px-3 py-5  w-[30%] hover:bg-black hover:text-white  rounded-full bg-[#333] text-white font-poppins  font-medium leading-[1.125rem]">
          Get started
        </button>

        <div className="flex  justify-start items-center px-4 mb-6">
          <AvatarGroup className="mr-2" isBordered max={3} total={10}>
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
            <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
          </AvatarGroup>

          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
      </div>
    </div>
  );
};

export default FrontContent;
