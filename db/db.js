const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
require("dotenv").config();

const uri =
  "mongodb+srv://samin:Y5LoffJX1tJGqrtR@cluster0.st6yhg5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("MongoDB connection established");
  } catch (error) {
    console.error("MongoDB connection failed", error);
    process.exit(1);
  }
};

module.exports = connectDB;
