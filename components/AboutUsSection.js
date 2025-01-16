"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const autoScrollRef = useRef(null);

  const teamMembers = [
    {
      name: "Abhishek",
      role: "CEO",
      image: "/abhishek.jpeg",
      description:
        "Visionary leader with 7+ years of experience in full-stack development, system architecture, and driving innovation in technology.",
    },
    {
      name: "Ankit Kumawat",
      role: "COO / UI-UX Designer",
      image: "/ankit-kumawat.jpg",
      description:
        "An accomplished leader and expert in UI/UX design, specializing in crafting intuitive, user-centric interfaces and enhancing operational efficiency.",
    },
    {
      name: "Niraj Jangir",
      role: "Full Stack Developer",
      image: "/neeraj.jpg",
      description:
        "Dedicated developer passionate about building intuitive, accessible user experiences and seamless end-to-end solutions.",
    },
    {
      name: "Ankit Jangir",
      role: "Frontend Developer",
      image: "/ankit-jangir.jpg",
      description:
        "Skilled frontend developer with expertise in creating responsive, user-friendly interfaces and delivering high-quality web experiences.",
    },
    {
      name: "Mukul Gadhwal",
      role: "Researcher & All-Rounder",
      image: "/mukul.jpeg",
      description:
        "Dynamic researcher adept at handling diverse challenges, excelling in cross-domain tasks, and managing end-to-end project lifecycles.",
    },
    {
      name: "Deepak Dhaka",
      role: "Backend Developer & DevOps Engineer",
      image: "/deepak.jpeg",
      description:
        "Highly skilled in backend development and DevOps, with expertise in automating deployment, ensuring robust infrastructure, and managing complex systems.",
    },
  ];

  const updateVisibleSlides = () => {
    const width = window.innerWidth;
    if (width < 640) setVisibleSlides(1);
    else if (width < 1024) setVisibleSlides(2);
    else setVisibleSlides(3);
  };

  useEffect(() => {
    updateVisibleSlides();
    window.addEventListener("resize", updateVisibleSlides);
    return () => window.removeEventListener("resize", updateVisibleSlides);
  }, []);

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, [currentIndex, visibleSlides]);

  const startAutoScroll = () => {
    stopAutoScroll();
    autoScrollRef.current = setInterval(() => {
      nextSlide();
    }, 5000); // Auto scroll every 5 seconds
  };

  const stopAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleSlides >= teamMembers.length
        ? 0
        : prevIndex + visibleSlides
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? teamMembers.length - visibleSlides
        : prevIndex - visibleSlides
    );
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide(); // Swipe left
    }

    if (touchStart - touchEnd < -75) {
      prevSlide(); // Swipe right
    }
  };

  return (
    <div id="aboutUs" className="pt-[30px]">
      <section className="py-20    bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
          <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
            We&apos;re a versatile team specializing in AI/ML, IoT, computer vision,
            and full-stack development. From crafting sleek, user-friendly
            interfaces to building robust, scalable systems, we bring innovative
            solutions to life. With over 5 years of experience, we&apos;ve empowered
            businesses to elevate their digital and technological presence.
          </p>

          <div className="relative max-w-6xl mx-auto">
            {/* Carousel Container */}
            <div
              className="overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${
                    (currentIndex * 100) / visibleSlides
                  }%)`,
                }}
              >
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-4"
                  >
                    <div className="bg-white rounded-lg shadow-lg p-8 text-center group h-full">
                      <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden transform transition-transform duration-300 group-hover:scale-105">
                        <img
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        {member.name}
                      </h3>
                      <p className="text-blue-600 mb-2">{member.role}</p>
                      <p className="text-gray-600">{member.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={() => {
                prevSlide();
                startAutoScroll();
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={() => {
                nextSlide();
                startAutoScroll();
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>

            {/* Dots Navigation */}
            <div className="flex justify-center mt-8 gap-2">
              {Array.from({
                length: Math.ceil(teamMembers.length / visibleSlides),
              }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index * visibleSlides);
                    startAutoScroll();
                  }}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    Math.floor(currentIndex / visibleSlides) === index
                      ? "bg-blue-600"
                      : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
