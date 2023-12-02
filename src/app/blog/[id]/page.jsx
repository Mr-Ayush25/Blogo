import Image from "next/image";
import React from "react";

const BlogPost = async ({ params }) => {
  const { id: blogId } = params;
  const getData = async (id) => {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("failed to fetch data");
    }
    return res.json();
  };
  const blog = await getData(blogId);

  return (
    <section
      key={blog._id}
      className=" flex flex-col justify-start gap-5 px-10 md:px-28 md:py-8"
    >
      <div className="border-[1px] border-white shadow-xl flex flex-col p-5 rounded-lg">
        <div className=" flex flex-col gap-5 md:gap-10 md:items-center md:flex-row">
          <div className="flex flex-1 gap-2 flex-col">
            <h1 className="text-3xl font-medium">{blog.title}</h1>
            <div className="flex flex-col-reverse gap-3 md:flex-col">
              <p className="text-md font-light">{blog.desc}</p>
              <div className="flex justify-start gap-5 items-center">
                <div className="h-10 w-10 rounded-full bg-transparent flex justify-center items-center border-[2px] border-white">
                  <svg
                    className="feather feather-user"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <h3>{blog.username}</h3>
              </div>
            </div>
          </div>
          <div className="flex flex-1 min-h-[300px] relative rounded-lg overflow-hidden">
            <Image
              src={blog.img}
              fill
              priority
              alt="About Img"
              className="object-cover h-full w-full"
            />
          </div>
        </div>
        <div className="p-2">
          <p className="text-md font-thin">{blog.content}</p>
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
