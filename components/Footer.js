
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img
                  width={300}
                  className="w-[50px] h-[50px]"
                  height={300}
                  alt="Logo Image"
                  src="/icon1.svg"
                />
                <span className="text-lg font-bold">Sigma Fusion</span>
              </div>
              <p className="text-gray-400">
                Building digital experiences that matter.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <nav className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white">
                  Home
                </a>
                <a
                  href="#Services"
                  className="block text-gray-400 hover:text-white"
                >
                  Services
                </a>
                <a
                  href="#Portfolio"
                  className="block text-gray-400 hover:text-white"
                >
                  Portfolio
                </a>
                <a
                  href="#aboutUs"
                  className="block text-gray-400 hover:text-white"
                >
                  About
                </a>
              </nav>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <p>contact@sigmafusion.com</p>
                <p>+91 9256308961</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  LinkedIn
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">GitHub</span>
                  GitHub
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  Twitter
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2025 sigmafusion. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
