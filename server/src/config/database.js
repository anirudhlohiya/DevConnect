const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  // console.log(process.env.DB_CONNECTION_SECRET);
  await mongoose.connect(
     process.env.DB_CONNECTION_STRING
  );
};

module.exports = connectDB;