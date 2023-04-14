import mongoose from "mongoose";

const databaseUrl =
  process.env.DATABASE_URL || "mongodb://localhost:27017/schoolNode";

const connectDB = async () => {
  try {
    await mongoose.connect(databaseUrl);
    console.log("DB Connection Successful");
  } catch (error) {
    console.log("Some error has occured!");
    process.exit(1);
  }
};

export { connectDB };
