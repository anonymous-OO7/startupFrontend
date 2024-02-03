import React from "react";
import Image from "next/image";

const Founders = () => (
  <div className="flex justify-center items-center">
    <div
      style={{ offsetPosition: "normal" }}
      className="text-zinc-800 px-4 m-auto"
    >
      <h1 className="text-black text-4xl font-extrabold text-center mt-20">
        Management Team
      </h1>

      <div className=" mt-30  flex flex-col lg:flex-row justify-center items-center gap-4 p-4 ">
        <div className="   flex justify-center items-center">
          <div className="  p-5 lg:w-[30vw] rounded-lg shadow-md  ">
            <div className="flex justify-center">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIOXvW4lrYo-jhQjiDc0dPns-T5TpNmIg-CPW6jm-ZqA&s"
                width={80} // Set the width as needed
                height={80} // Set the height as needed
                className="rounded-full"
                alt="Ankush Bhan"
              />
            </div>
            <div className="text-center mt-4 ">
              <h2 className="text-black text-lg font-semibold font-poppins">
                Mohit
              </h2>
              <h3 className="text-black text-base pb-3 font-poppins">
                Founder & Director
              </h3>
              <p className="text-black text-sm text-justify font-poppins">
                A motorbike enthusiast, who enjoys adventure sport started his
                career with Public Relations from where he stepped into the
                Equipment Renting industry in 2002. For over 18 years, he has
                been servicing this industry both in India and Overseas. Gaurav
                holds a BCom (Hons) degree from Sri Ram College of Commerce
                –Delhi and a Masters degree in Business Management from Mumbai
                University.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className=" p-5 lg:w-[30vw]  rounded-lg shadow-md">
            <div className="flex justify-center">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIOXvW4lrYo-jhQjiDc0dPns-T5TpNmIg-CPW6jm-ZqA&s"
                width={80} // Set the width as needed
                height={80} // Set the height as needed
                className="rounded-full"
                alt="Ankush Bhan"
              />
            </div>
            <div className="text-center mt-4">
              <h2 className="text-black text-lg font-semibold font-poppins">
                Gaurav
              </h2>
              <h3 className="text-black text-base pb-3 font-poppins">
                Founder & Director
              </h3>
              <p className="text-black text-sm text-justify font-poppins">
                An engineer from NIT (National Institute of Technology-
                Jamshedpur) and MBA from Symbiosis - Pune started his career
                with Mahindra Sintered Products. He also worked with Wipro
                Infotech before stepping into the equipment renting Industry in
                2004. Rohit is a swimming enthusiast
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Founders;
