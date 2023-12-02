import Link from "next/link";
import React from "react";

const Portfolio = () => {
  return (
    <section className="flex flex-col gap-4 px-2 w-full">
      <h1 className="text-4xl font-semibold">Choose a Gallery</h1>
      <div className="flex gap-5 max-sm:py-4 flex-1 flex-col md:flex-row justify-center items-center">
        <Link
          className="relative border-4 border-gray-100 h-[400px] w-[310px] bg-[url('/illustration.png')] bg-cover hover:text-green-500 transition-all duration-150 ease-in-out"
          href="/portfolio/illustrations"
        >
          <span className="absolute bottom-3 right-3 font-semibold text-2xl">
            Illustrations
          </span>
        </Link>
        <Link
          className="relative border-4 border-gray-100 h-[400px] w-[310px] bg-[url('/websites.jpg')] bg-cover hover:text-green-500 transition-all duration-150 ease-in-out"
          href="/portfolio/websites"
        >
          <span className="absolute bottom-3 right-3 font-semibold text-2xl ">
            Websites
          </span>
        </Link>
        <Link
          className="relative border-4 border-gray-100 h-[400px] w-[310px] bg-[url('/apps.jpg')] bg-cover hover:text-green-500 transition-all duration-150 ease-in-out"
          href="/portfolio/applications"
        >
          <span className="absolute bottom-3 right-3 font-semibold text-2xl">
            Application
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Portfolio;
