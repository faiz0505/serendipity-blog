// import { ErrorHandler } from "@/app/utils/utils";
import mongoose from "mongoose";
export const connectToDatabase = async () => {
  try {
    const username = process.env.DATABASE_USERNAME;
    const password = process.env.DATABASE_PASSWORD;

    const uri = `mongodb+srv://${username}:${password}@serendipity-database.lbp0v8p.mongodb.net/serendipity-database?retryWrites=true&w=majority&appName=serendipity-database`;
    mongoose.connect(uri);
    console.log("Connected to database");
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
