import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-lg font-semibold font-poppins ">Compass</p>
            <p className="text-sm">© {new Date().getFullYear()} Compass</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-white font-poppins hover:text-blue-500">
              Home
            </a>
            <a href="#" className="text-white font-poppins hover:text-blue-500">
              About
            </a>
            <a href="#" className="text-white font-poppins hover:text-blue-500">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
