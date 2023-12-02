import Image from "next/image";
import Link from "next/link";
import React from "react";

const Blog = async () => {
  const getData = async () => {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("failed to fetch data");
    }
    return res.json();
  };
  const data = await getData();

  return (
    <section className="flex flex-col items-start gap-20 p-5 md:px-20 lg:px-40 xl:px-60">
      {data.map((blog) => {
        return (
          <Link key={blog._id} href={`/blog/${blog._id}`}>
            <div className="flex md:even:flex-row-reverse flex-col gap-5 md:gap-10 md:items-center md:flex-row">
              <div className="flex flex-1 min-h-[250px] relative rounded-lg overflow-hidden">
                <Image
                  src={blog.img}
                  fill
                  alt="About Img"
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="flex flex-1 gap-2 flex-col">
                <h1 className="text-3xl font-medium">{blog.title}</h1>
                <p className="text-md font-light">{blog.desc}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </section>
  );
};

export default Blog;
