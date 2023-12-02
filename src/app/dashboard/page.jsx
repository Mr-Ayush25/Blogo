"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useSWR from "swr";

const Dashboard = () => {
  const router = useRouter();
  const session = useSession();

  // using SWR to fetch data.
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user?.name}`,
    fetcher
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = document.querySelector("form");

    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    form.reset();

    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data?.user?.name,
        }),
      });
      mutate();
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (error) {
      console.log(error);
    }
  };
  if (session.status === "unauthenticated") {
    router.push("/dashboard/login");
  } else {
    return (
      <section className="flex p-5 flex-col md:flex-row md:overflow-hidden justify-evenly gap-20 items-center md:items-start">
        <div className="flex max-w-lg flex-col gap-4">
          {data && <h2 className="font-bold text-3xl">Your Posts</h2>}

          <div className="flex pt-1 px-1 w-full flex-col justify-start gap-4 items-start md:overflow-y-scroll overflow-x-hidden md:max-h-[500px] scrollbar-thin scrollbar-thumb-gray-600 scroll-smooth">
            {data?.map((post) => (
              <div
                className="relative flex justify-between flex-col items-start gap-2  md:flex-row"
                key={post._id}
              >
                <div className="relative h-[150px] w-[250px] rounded-md overflow-hidden">
                  <Image
                    src={post.img}
                    alt="Blog Img"
                    height={150}
                    width={250}
                    className="object-cover h-full w=full"
                  />
                </div>
                <div className="relative flex flex-col justify-start">
                  <h2 className="text-xl font-gray-200 font-semibold">
                    {post.title}
                  </h2>
                  <p className="text-md">{post.desc}</p>
                </div>
                <span
                  onClick={() => handleDelete(post._id)}
                  className="max-sm:absolute right-0 bottom-7 hover:cursor-pointer"
                >
                  ❌
                </span>
              </div>
            ))}
          </div>
        </div>
        <form
          id="form1"
          className="flex flex-1 flex-col gap-4 max-w-md"
          onSubmit={handleSubmit}
        >
          <h1 className="text-center text-3xl font-bold">Add new Post</h1>
          <input
            type="text"
            placeholder="Title"
            name="title"
            required
            className="p-2 bg-transparent border-[2px] border-gray-300
          outline-none rounded-md"
          />
          <input
            type="text"
            placeholder="Desc"
            name="desc"
            required
            className="p-2 bg-transparent border-[2px] border-gray-300
          outline-none rounded-md"
          />
          <input
            type="text"
            placeholder="Image"
            name="img"
            required
            className="p-2 bg-transparent border-[2px] border-gray-300
          outline-none rounded-md"
          />
          <textarea
            placeholder="Content"
            name="content"
            cols="30"
            rows="10"
            required
            className="p-2 bg-transparent border-[2px] border-gray-300
          outline-none rounded-md"
          ></textarea>
          <button
            type="submit"
            className="rounded-md font-semibold hover:rounded-full text-sm py-3 px-14  bg-[#319345] hover:bg-[#277737] transition-all duration-150 ease-in-out border-white border-[1px]"
          >
            Publish Post
          </button>
        </form>
      </section>
    );
  }
};

export default Dashboard;
