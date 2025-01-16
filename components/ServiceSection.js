"use client";
import { Camera, Cloud, Monitor, Smartphone, HardDrive } from "lucide-react";
import React from "react";

const ServiceSection = () => {
  return (
    <div id="Services" className="pt-[30px]">
      <>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Monitor className="h-12 w-12 text-blue-600" />,
                  title: "Web Development",
                  description:
                    "Building custom web applications with React, Next.js, and modern frameworks to create seamless and scalable digital experiences.",
                },
                {
                  icon: <Smartphone className="h-12 w-12 text-blue-600" />,
                  title: "Mobile App Development",
                  description:
                    "Developing native and cross-platform mobile apps using the latest technologies to bring your ideas to life on Android and iOS.",
                },
                {
                  icon: <Camera className="h-12 w-12 text-blue-600" />,
                  title: "AI/ML Solutions",
                  description:
                    "Leveraging Artificial Intelligence and Machine Learning to create intelligent systems that analyze data and automate processes.",
                },
                {
                  icon: <Camera className="h-12 w-12 text-blue-600" />,
                  title: "Computer Vision",
                  description:
                    "Implementing cutting-edge computer vision technologies for image recognition, object detection, and automated visual analysis.",
                },
                {
                  icon: <Cloud className="h-12 w-12 text-blue-600" />,
                  title: "Cloud Solutions",
                  description:
                    "Delivering cloud infrastructure and solutions for scalable, flexible, and secure data management and application hosting.",
                },
                {
                  icon: <HardDrive className="h-12 w-12 text-blue-600" />,
                  title: "IoT Solutions",
                  description:
                    "Designing and implementing IoT systems to connect and automate devices, collecting real-time data for smarter decision-making.",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
                >
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default ServiceSection;
