"use client";
import Link from "next/link";
import React, { useState } from "react";
import DarkModeToggle from "../DarkModeToggle";
import { signOut, useSession } from "next-auth/react";

const NavBar = () => {
  const session = useSession();
  const [showNavigation, setShowNavigation] = useState(false);

  const links = [
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 3,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 6,
      title: "Dashboard",
      url: "/dashboard",
    },
  ];

  return (
    <nav className="py-5 px-10 md:px-12 xl:px-20 flex justify-between items-center">
      <Link
        className="font-bold text-2xl md:text-4xl"
        href="/"
        onClick={() => setShowNavigation(false)}
      >
        Blogo
      </Link>
      {/* Implementing Mobile Nav */}
      <div
        className="flex px-3 py-1 border-[2px] rounded-full items-center gap-2 cursor-pointer md:hidden"
        onClick={() => setShowNavigation((prev) => !prev)}
      >
        <span className="text-md font-semibold">Menu</span>
        <div className="relative hover:rotate-90 hover:translate-y-0.5 transition-all duration-200 ">
          <span>&#9679;</span>
          <span>&#9679;</span>
        </div>
      </div>
      {showNavigation && (
        <div className="absolute right-0 top-[10%] bg-[#111111] bottom-0 w-screen z-50 flex justify-center items-center">
          <span
            className="absolute cursor-pointer bottom-5 left-[48%] h-6 w-6 text-md  flex justify-center items-center "
            onClick={() => setShowNavigation(false)}
          >
            close
          </span>
          <div className="h-[80%] w-[80%] rounded-md shadow-[4.0px_8.0px_8.0px_rgba(255,255,255,0.50)]  text-black p-5 bg-[rgba(0,0,0,0.8)] flex flex-col justify-center gap-1">
            {links.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                className="h-[10%] text-white hover:text-black uppercase transition-all duration-200 ease-in-out font-medium hover:bg-slate-100 hover:shadow-[4.0px_8.0px_8.0px_rgba(255,255,255,0.50)] rounded-xl flex items-center justify-center"
                onClick={() => setShowNavigation(false)}
              >
                {link.title}
              </Link>
            ))}
            {session.status === "authenticated" && (
              <Link
                href="/dashboard/login"
                className="flex justify-center mt-5"
              >
                <button
                  className="font-semibold rounded-full text-md w-content px-3 bg-[#3cb053] py-2 hover:bg-[#53e971] transition-all duration-150 ease-in-out"
                  onClick={() => {
                    signOut();
                    setShowNavigation(false);
                  }}
                >
                  Log Out
                </button>
              </Link>
            )}
          </div>
        </div>
      )}
      <div className="hidden md:flex justify-between items-center gap-5">
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
        {session.status === "authenticated" && (
          <Link href="/dashboard/login">
            <button
              className="font-semibold rounded-full text-md w-content px-3 bg-[#319345] py-2 hover:bg-[#277737] transition-all duration-150 ease-in-out"
              onClick={() => signOut()}
            >
              Log Out
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
