const express = require("express");
const connectDB = require("./config/database");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");

// Serve static files from the React app build directory
// This is for production when the frontend is built
const cors = require("cors");
app.use(cors());

app.use(express.json()); // middleware for json to js obj conversion
app.use(cookieParser());

// Serve static files from React build in production
// Only serve static files if we're not in a serverless environment
if (process.env.NODE_ENV === "production" && !process.env.VERCEL) {
  app.use(express.static(path.join(__dirname, "../../client/dist")));
}

const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");
const userRouter = require("./routes/user");

// Mount all routers
app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/", userRouter);

// Serve React app for any non-API routes in production
// Only serve static files if we're not in a serverless environment
if (process.env.NODE_ENV === "production" && !process.env.VERCEL) {
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../client/dist/index.html"));
  });
}

// For Vercel serverless functions, we don't need to listen on a port
// Vercel handles that for us
if (!process.env.VERCEL) {
  connectDB()
    .then(() => {
      console.log("Database connection established...");
      // Use PORT from environment variable or default to 7777
      const PORT = process.env.PORT || 7777;
      app.listen(PORT, () => {
        console.log(`Server is successfully listening on port ${PORT}...`);
      });
    })
    .catch((err) => {
      console.error("Database cannot be connected!!", err);
      process.exit(1); // Exit if database connection fails in local development
    });
} else {
  // For Vercel, just connect to database and export the app
  // Note: In a production Vercel app, you'd want to handle database connections differently
  console.log("Running in Vercel environment");
  // Connect to database in Vercel environment as well
  connectDB().catch(err => {
    console.error("Database connection error in Vercel:", err);
  });
}

module.exports = app;