"use client";
import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <section className="flex flex-col px-12 lg:px-32 gap-8">
      <h1 className="text-6xl text-center font-bold">{`Let's Keep in Touch`}</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="relative flex max-w-full h-[500px] flex-1 justify-center">
          <Image
            src="/contact.png"
            height={400}
            width={500}
            alt="Contact Image"
            className="object-contain animate-pulse"
          />
        </div>
        <form className="flex flex-1 flex-col justify-center gap-2">
          <input
            className="p-2 rounded-md bg-transparent border-[3px] border-gray-200 outline-none"
            type="text"
            placeholder="name"
          />
          <input
            className="p-2 rounded-md bg-transparent border-[3px] border-gray-200 outline-none"
            type="text"
            placeholder="example@outlook.com"
          />
          <textarea
            placeholder="message here...."
            cols={25}
            rows={10}
            className="p-2 rounded-md bg-transparent border-[3px] border-gray-200 outline-none"
          ></textarea>
          <Button url="#" title="Submit" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
