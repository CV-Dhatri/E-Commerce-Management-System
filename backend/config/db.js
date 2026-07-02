const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("DEBUG - MONGO_URI value:", process.env.MONGO_URI);
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected`);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;