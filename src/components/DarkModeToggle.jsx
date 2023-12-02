"use client";

import { useTheme } from "@/context/ThemeContext";

const DarkModeToggle = () => {
  const { mode, toggleTheme } = useTheme();
  return (
    <div
      className="relative w-12 h-6 border-[2px] border-[#53c28b70] rounded-full flex items-center justify-between p-[2px] hover:cursor-pointer "
      onClick={toggleTheme}
    >
      <div className="scale-90">🌙</div>
      <div className="scale-90">🌞</div>
      <div
        className={`bg-[#53c28b] 
         absolute w-5 h-4 rounded-full ${
           mode === "light" ? "left-[2px]" : "right-[2px]"
         }`}
      />
    </div>
  );
};

export default DarkModeToggle;
