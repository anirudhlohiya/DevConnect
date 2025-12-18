const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    // Check if DB_CONNECTION_STRING is available
    if (!process.env.DB_CONNECTION_STRING) {
      throw new Error("DB_CONNECTION_STRING environment variable is not defined");
    }
    
    // console.log(process.env.DB_CONNECTION_SECRET);
    await mongoose.connect(
       process.env.DB_CONNECTION_STRING
    );
    
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Database connection error:", error.message);
    // Don't throw error in Vercel environment as it might cause cold start issues
    if (!process.env.VERCEL) {
      throw error;
    }
  }
};

module.exports = connectDB;