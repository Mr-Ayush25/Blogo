import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      require: true,
    },
    email: {
      type: String,
      unique: true,
      require: true,
    },
    password: {
      type: String,
      unique: true,
      require: true,
    },
  },
  { timestamps: true }
);

export const User =
  mongoose.models.users || new mongoose.model("users", userSchema);
