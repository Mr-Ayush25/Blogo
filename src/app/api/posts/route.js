import { Post } from "@/models/Post";
import connect from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const url = new URL(req.url);

  const username = url.searchParams.get("username");

  try {
    await connect();

    const posts = await Post.find(username && { username });

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (req) => {
  const body = await req.json();

  const newPost = new Post(body);
  try {
    await connect();

    await newPost.save();

    return new NextResponse("Post has been Created", { status: 201 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
