"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
  const session = useSession();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", { email, password });
  };

  if (session.data) {
    router.push("/dashboard");
  } else {
    return (
      <section className="flex flex-col justify-center items-center gap-8">
        <h2 className="text-4xl">Login Page</h2>
        <div className="border-[1px] p-10 rounded-lg bg-[rgba(255,255,255,0.1)]">
          <form
            onSubmit={handleSubmit}
            className="flex justify-center items-center flex-col gap-2"
          >
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
              Login
            </button>
          </form>
        </div>
        <div className="flex flex-col gap-2">
          <button onClick={() => signIn("google")}>Login using Google</button>
          <button onClick={() => router.push("/dashboard/register")}>
            Register
          </button>
        </div>
      </section>
    );
  }
};

export default Login;
