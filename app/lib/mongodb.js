import mongoose from "mongoose";
import { env } from "process";

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(env.MONGODB_URL);
      console.log("db connected");
    }
  } catch (error) {
    console.log(error);
  }
};
export default connectDB;
