"use client";
import React from "react";
import "./testimonials.css";
import TestimonialCard from "./TestimonialCard";
const Testimonials = () => (
  <div className="flex justify-center items-center">
    <div className=" w-[90%] ">
      <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
              People love using compass
            </h1>
            <div className="flex flex-wrap -m-4">
              <TestimonialCard
                text="Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland."
                authorName="Alper Kamu"
                authorTitle="DESIGNER"
                authorImage="https://dummyimage.com/107x107"
              />
              <TestimonialCard
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
                authorName="John Doe"
                authorTitle="Developer"
                authorImage="https://dummyimage.com/107x107"
              />

              <TestimonialCard
                text="Vestibulum ullamcorper mauris at ligula. Fusce fermentum odio nec arcu. Etiam bibendum elit eget erat."
                authorName="Jane Smith"
                authorTitle="Engineer"
                authorImage="https://dummyimage.com/107x107"
              />

              <TestimonialCard
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Nulla facilisi. Nullam mattis mi at metus"
                authorName="David Johnson"
                authorTitle="Manager"
                authorImage="https://dummyimage.com/107x107"
              />
            </div>
          </div>
        </section>
      </div>
      {/* eslint-disable  */}

      <script src="https://cdn.tailwindcss.com"></script>
      <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </div>
  </div>
);

export default Testimonials;
