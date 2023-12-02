import Image from "next/image";
import React from "react";

const Footer = () => {
  const foot = ["/1.png", "/2.png", "/3.png", "/4.png"];
  return (
    <footer className="relative p-2 w-full flex justify-evenly items-center bottom-0">
      <h2>2023 Ayush. All rights Reserved</h2>
      <div className="flex gap-5 items-center">
        {foot.map((img) => (
          <Image key={img} src={img} alt="foot" width={15} height={15} />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
