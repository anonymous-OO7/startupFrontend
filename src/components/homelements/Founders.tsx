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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore repudiandae sed, cumque excepturi molestias consequatur
                incidunt rem amet doloremque minima qui vitae quibusdam
                doloribus deserunt, enim laborum est blanditiis ipsum.
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aspernatur, architecto iusto odit id eius omnis doloremque
                eaque, sit excepturi iure provident dignissimos quidem mollitia
                et nisi dolor obcaecati quia fugiat placeat rem accusamus
                molestias temporibus. Quas labore, a id repudiandae, voluptatum
                doloribus, iure provident architecto eligendi quia
                exercitationem et cupiditate!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Founders;
