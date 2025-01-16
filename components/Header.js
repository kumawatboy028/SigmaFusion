import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img
              width={300}
              className="w-[50px] h-[50px]"
              height={300}
              alt="Logo Image"
              src="/icon1.svg"
            />
            <span className="text-xl font-bold">
              <span className="text-[#00B8B9]">S</span>
              <span className="text-[#F7931E]">I</span>
              <span className="text-[#E31E63]">G</span>
              <span className="text-[#8C4E9E]">M</span>
              <span className="text-[#333333]">A</span>
              &nbsp;
              <span className="text-[#00B8B9]">F</span>
              <span className="text-[#F7931E]">U</span>
              <span className="text-[#E31E63]">S</span>
              <span className="text-[#8C4E9E]">I</span>
              <span className="text-[#333333]">O</span>
              <span className="text-[#00B8B9]">N</span>
            </span>
          </div>

          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Home
            </a>
            <a href="#Services" className="text-gray-600 hover:text-blue-600">
              Services
            </a>
            <a href="#Portfolio" className="text-gray-600 hover:text-blue-600">
              Portfolio
            </a>
            <a href="#aboutUs" className="text-gray-600 hover:text-blue-600">
              About
            </a>
            {/* <a href="#" className="text-gray-600 hover:text-blue-600">
              Blog
            </a> */}
            <a href="#ContactUs" className="text-gray-600 hover:text-blue-600">
              Contact
            </a>
          </nav>
          <a
            href="#ContactUs"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          >
            Hire Us
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
