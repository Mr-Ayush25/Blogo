import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="flex flex-col h-screen p-4 md:px-12 lg:px-40 lg:py-4 items-center gap-3 md:gap-8">
      <div className="h-[300px] lg:h-[70%] w-full relative rounded-md overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/389818/pexels-photo-389818.jpeg?auto=compress&cs=tinysrgb"
          fill
          alt="About Img"
          className="object-cover h-full w-full grayscale hover:grayscale-0  transition-all duration-150 ease-in-out"
        />
        <div className="absolute bottom-4 ml-10 bg-[#3ab177d5] p-3 rounded-lg font-semibold">
          <h1 className="text-xl font-bold">Digital Storytellers</h1>
          <h2 className="text-md">
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-8 md:gap-16">
        <div className="flex flex-col gap-3">
          <h1 className="text-lg font-semibold">What Are We?</h1>
          <p className="text-white font-thin md:font-light">
            We are a dynamic and innovative web development team that
            specializes in crafting exceptional websites tailored specifically
            for businesses and enterprises.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-lg font-semibold">What We Do?</h1>
          <p className="text-white font-thin md:font-light">
            Our mission is to empower businesses to enhance their online
            presence and engagement through cutting-edge technologies and modern
            web design practices.
            <br /># Dynamic-Websites.
          </p>
        </div>
      </div>
      <Button url="/contact" title="Contact" />
    </section>
  );
};

export default About;
