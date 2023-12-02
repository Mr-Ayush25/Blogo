import connect from "@/utils/connect";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { User } from "@/models/User";

export const POST = async (req) => {
  const { name, email, password } = await req.json();

  await connect();

  const hashedPassword = await bcrypt.hash(password, 8);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });
  try {
    await newUser.save();
    return new NextResponse("User has been Created", { status: 201 });
  } catch (error) {
    return new NextResponse(err.message, { status: 500 });
  }
};
