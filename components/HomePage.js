"use client";
import React from "react";
import AboutUs from "@/components/AboutUsSection";
import HeroSection from "./HeroSection";
import ServiceSection from "./ServiceSection";
import Header from "./Header";
import ContactUsSection from "./ContactUsSection";
import Footer from "./Footer";
import FeaturedSection from "./FeaturedSection";
import ContactIcons from "./ContactIcons";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ServiceSection />
      <AboutUs />
      <ContactIcons />
      <FeaturedSection />
      {/* <BlogSection /> */}
      <ContactUsSection />
      <Footer />
    </div>
  );
};

export default HomePage;
