"use client";
import React from "react";
import InfoCard from "./Card";
import { Spacer } from "@nextui-org/react";
import { techList, teamMembers } from "@/constants";
import ProfileCard from "./DiscoverPeople";
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
                <p className="text-2xl md:text-3xl text-black font-semibold font-poppins mb-9">
                  Discover People
                </p>

                <div className="flex items-center justify-center lg:flex-row flex-col space-x-4 space-y-4 p-2">
                  {teamMembers.map((member, index) => (
                    <ProfileCard
                      key={index}
                      imageUrl={member.imageUrl}
                      role={member.role}
                      name={member.name}
                      description={member.description}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center mt-[20vh]">
            {techList.map((user) => (
              <>
                <InfoCard
                  key={user.id}
                  avatarUrl={user.avatarUrl}
                  fullName={user.fullName}
                  username={user.username}
                  bio={user.bio}
                  hashtags={user.hashtags}
                  emoji={user.emoji}
                  followingCount={user.followingCount}
                  followersCount={user.followersCount}
                />
                <Spacer y={5} />
                <Spacer x={5} />
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechContent;
