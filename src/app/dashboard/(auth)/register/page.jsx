"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Register = () => {
  const router = useRouter();
  const [err, setErr] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      res.status === 201 &&
        router.push(
          "/dashboard/login?success=Account has been created Successful"
        );
    } catch (error) {
      setErr(true);
    }
  };
  return (
    <section className="flex justify-center items-center h-screen">
      <div className="flex justify-center items-center flex-col gap-10  bg-[rgba(255,255,255,0.1)] border-[1px] p-10 rounded-md">
        <h2 className="text-4xl font-bold">Register</h2>
        <form
          onSubmit={handleSubmit}
          className="flex justify-center items-center flex-col gap-2"
        >
          <input
            className="p-2 rounded-md bg-transparent border-[3px] border-gray-200 outline-none"
            type="text"
            id="username"
            placeholder="username"
            required
            autoComplete="on"
          />
          <input
            className="p-2 rounded-md bg-transparent border-[3px] border-gray-200 outline-none"
            type="text"
            id="email"
            placeholder="email"
            required
            autoComplete="on"
          />
          <input
            className="p-2 rounded-md bg-transparent border-[3px] border-gray-200  outline-none"
            type="text"
            id="password"
            placeholder="password"
            required
          />

          <button
            type="submit"
            className="mt-3 rounded-md font-semibold hover:rounded-full text-lg w-content px-14 bg-[#319345] py-2 hover:bg-[#277737] transition-all duration-150 ease-in-out border-white border-[1px]"
          >
            Register
          </button>
        </form>
        {err && "Something Went Wrong"}
        <Link href="/dashboard/login">Already have an account? Log-in</Link>
      </div>
    </section>
  );
};

export default Register;
