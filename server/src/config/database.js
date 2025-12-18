const mongoose = require("mongoose");

const connectDB = async () => {
  // console.log(process.env.DB_CONNECTION_SECRET);
  await mongoose.connect(
     "mongodb+srv://anirudh:fP1rYFUbgf90Krse@cluster0.bfqp3lz.mongodb.net/?appName=Cluster0"
  );
};

module.exports = connectDB;
