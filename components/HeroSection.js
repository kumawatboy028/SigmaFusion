"use-client";
import React from "react";

const HeroSection = () => {
  return (
    <>
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Turning Your Ideas into Engaging Digital Products
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                We specialize in creating custom solutions across a wide range
                of platforms, including Android and iOS apps, websites, web
                applications, cloud solutions, computer vision technologies, IoT
                devices, and AI/ML-driven systems. Whatever your needs, we
                ensure cutting-edge innovation tailored to grow alongside your
                business.
              </p>
              <div className="flex gap-4">
                <a
                  href="#Portfolio"
                  className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg hover:bg-blue-700"
                >
                  View Our Work
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <img src="/hero-illustration.svg" alt="Hero-banner" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
