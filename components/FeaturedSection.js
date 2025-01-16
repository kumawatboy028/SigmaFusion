import { Brain, Cloud, Cpu, Database, Eye, Smartphone } from "lucide-react";
import React from "react";

const FeaturedSection = () => {
  return (
    <div id="Portfolio" className="pt-[30px]">
      <>
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Personal Portfolio",
                  description:
                    "Developed a dynamic and interactive personal portfolio to showcase projects and skills.",
                  tech: ["React", "Next.js", "Tailwind CSS"],
                  image: "/personal-portfolio.png",
                  icon: <Brain className="w-12 h-12 text-blue-500" />,
                },
                {
                  title: "IoT Smart Face Recognition Door Lock",
                  description:
                    "Built a smart door lock system using Arduino Uno R3 chipset with MicroPython for face recognition and MQTT for communication.",
                  tech: ["MicroPython", "Arduino", "MQTT"],
                  image: "/iot-lock.png",
                  icon: <Cpu className="w-12 h-12 text-purple-500" />,
                },
                {
                  title: "Cloud Infrastructure for Android Emulators",
                  description:
                    "Designed and deployed a scalable cloud-based server for enterprise-grade Android emulation using Docker and Kubernetes.",
                  tech: ["AWS", "Docker", "Kubernetes"],
                  image: "/cloud-emu.png",
                  icon: <Cloud className="w-12 h-12 text-blue-400" />,
                },
                {
                  title: "Real-Time Object Detection App",
                  description:
                    "Created an advanced computer vision application for real-time object detection and tracking.",
                  tech: ["Python", "OpenCV", "TensorFlow", "Yolo"],
                  image: "/cvobjectdetect.jpeg",
                  icon: <Eye className="w-12 h-12 text-green-500" />,
                },
                {
                  title: "Cross-Platform Attendace Management App",
                  description:
                    "Developed a high-performance cross-platform Attendace Management web & mobile application with seamless functionality on WEB, iOS and Android.",
                  tech: ["React Native", "Firebase", "Redux"],
                  image: "/xplatform.png",
                  icon: <Smartphone className="w-12 h-12 text-red-500" />,
                },
                {
                  title: "AI-Powered WhatsApp Business Tool",
                  description:
                    "Engineered an AI-driven tool to enhance WhatsApp Business capabilities, including automation and analytics.",
                  tech: ["NodeJS", "Python", "PyTorch", "FastAPI"],
                  image: "/whatsapp-AI.png",
                  icon: <Database className="w-12 h-12 text-indigo-500" />,
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button className="bg-white text-blue-600 px-6 py-2 rounded-full transform -translate-y-4 hover:translate-y-0 transition-transform duration-300">
                        View Details
                      </button>
                    </div> */}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-gray-50 rounded-lg">
                        {project.icon}
                      </div>
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm hover:bg-blue-200 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* <div className="mt-12 text-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700">
                View All Projects
              </button>
            </div> */}
          </div>
        </section>
      </>
    </div>
  );
};

export default FeaturedSection;
