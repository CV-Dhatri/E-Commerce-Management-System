const dotenv = require("dotenv");
const connectDB = require("./config/db");

const Category = require("./models/Category");
const Product = require("./models/Product");

dotenv.config();

const seedData = async () => {
  try {

    await connectDB();

    await Product.deleteMany({});
    await Category.deleteMany({});

    const electronics =
      await Category.create({
        name: "Electronics",
        description: "Electronic Products"
      });

    await Product.create([
      {
        name: "iPhone 15",
        description: "Apple Mobile",
        price: 70000,
        category: electronics._id,
        stockQuantity: 50,
        imageUrl: "iphone.jpg"
      },
      {
        name: "Samsung S24",
        description: "Samsung Mobile",
        price: 65000,
        category: electronics._id,
        stockQuantity: 30,
        imageUrl: "samsung.jpg"
      }
    ]);

    console.log("Seed Data Inserted");

    process.exit();

  } catch (error) {

    console.log(error);

    process.exit(1);

  }
};

seedData();