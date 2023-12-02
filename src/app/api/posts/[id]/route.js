import { Post } from "@/models/Post";
import connect from "@/utils/connect";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id } = params;
  try {
    await connect();

    const post = await Post.findById(id);

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  const { id } = params;
  try {
    await connect();
    await Post.findByIdAndDelete(id);

    return new NextResponse("Post deleted", { status: 200 });
  } catch (error) {
    return new NextResponse("Post not Deleted", { status: 500 });
  }
}
