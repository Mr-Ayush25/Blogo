import mongoose from "mongoose";

const connect = async () => {
  try {
    mongoose.connect(process.env.MONGO_ID);
  } catch (error) {
    throw new Error(error);
  }
};

export default connect;
