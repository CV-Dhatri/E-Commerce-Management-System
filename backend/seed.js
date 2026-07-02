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

    const electronics = await Category.create({
      name: "Electronics",
      description: "Electronic Products",
    });

    const fashion = await Category.create({
      name: "Fashion",
      description: "Fashion Products",
    });

    const books = await Category.create({
      name: "Books",
      description: "Books Collection",
    });
    const home = await Category.create({
  name: "Home & Kitchen",
  description: "Home Appliances and Kitchen Essentials",
});
const sports = await Category.create({
  name: "Sports",
  description: "Sports Equipment",
});

const beauty = await Category.create({
  name: "Beauty",
  description: "Beauty and Personal Care",
});

const grocery = await Category.create({
  name: "Grocery",
  description: "Daily Grocery Essentials",
});

    await Product.insertMany([
      {
  name: "OnePlus 12",
  description: "OnePlus Flagship Smartphone",
  price: 62000,
  category: electronics._id,
  stockQuantity: 40,
  imageUrl: "/uploads/oneplus12.jpg",
},
{
  name: "MacBook Air M3",
  description: "Apple MacBook Air M3 13-inch",
  price: 125000,
  category: electronics._id,
  stockQuantity: 15,
  imageUrl: "/uploads/macbook-air.jpg",
},
{
  name: "Dell Inspiron 15",
  description: "Dell Core i7 Laptop",
  price: 68000,
  category: electronics._id,
  stockQuantity: 20,
  imageUrl: "/uploads/dell-inspiron.jpg",
},
{
  name: "Sony WH-1000XM5",
  description: "Noise Cancelling Wireless Headphones",
  price: 28000,
  category: electronics._id,
  stockQuantity: 30,
  imageUrl: "/uploads/sony-headphones.jpg",
},
{
  name: "Apple Watch Series 9",
  description: "Advanced Smart Watch",
  price: 42000,
  category: electronics._id,
  stockQuantity: 25,
  imageUrl: "/uploads/apple-watch.jpg",
},
{
  name: "Adidas Sneakers",
  description: "Comfortable Everyday Sneakers",
  price: 4800,
  category: fashion._id,
  stockQuantity: 60,
  imageUrl: "/uploads/adidas-shoes.jpg",
},
{
  name: "Men's Hoodie",
  description: "Winter Cotton Hoodie",
  price: 1200,
  category: fashion._id,
  stockQuantity: 80,
  imageUrl: "/uploads/hoodie.jpg",
},
{
  name: "Blue Jeans",
  description: "Slim Fit Denim Jeans",
  price: 1800,
  category: fashion._id,
  stockQuantity: 70,
  imageUrl: "/uploads/jeans.jpg",
},
{
  name: "Leather Wallet",
  description: "Premium Genuine Leather Wallet",
  price: 950,
  category: fashion._id,
  stockQuantity: 120,
  imageUrl: "/uploads/wallet.jpg",
},
{
  name: "Atomic Habits",
  description: "Best Selling Self Improvement Book",
  price: 650,
  category: books._id,
  stockQuantity: 150,
  imageUrl: "/uploads/atomic-habits.jpg",
},
{
  name: "Rich Dad Poor Dad",
  description: "Personal Finance Best Seller",
  price: 550,
  category: books._id,
  stockQuantity: 120,
  imageUrl: "/uploads/rich-dad.jpg",
},
{
  name: "Clean Code",
  description: "A Handbook of Agile Software Craftsmanship",
  price: 899,
  category: books._id,
  stockQuantity: 90,
  imageUrl: "/uploads/clean-code.jpg",
},
{
  name: "Mixer Grinder",
  description: "750W Kitchen Mixer Grinder",
  price: 3200,
  category: home._id,
  stockQuantity: 35,
  imageUrl: "/uploads/mixer-grinder.jpg",
},
{
  name: "Microwave Oven",
  description: "23L Convection Microwave Oven",
  price: 10500,
  category: home._id,
  stockQuantity: 18,
  imageUrl: "/uploads/microwave.jpg",
},
{
  name: "Dinner Set",
  description: "24 Piece Ceramic Dinner Set",
  price: 2500,
  category: home._id,
  stockQuantity: 40,
  imageUrl: "/uploads/dinner-set.jpg",
},
{
  name: "Vacuum Cleaner",
  description: "Bagless Vacuum Cleaner",
  price: 7200,
  category: home._id,
  stockQuantity: 22,
  imageUrl: "/uploads/vacuum-cleaner.jpg",
},
{
  name: "Cricket Bat",
  description: "English Willow Cricket Bat",
  price: 4500,
  category: sports._id,
  stockQuantity: 50,
  imageUrl: "/uploads/cricket-bat.jpg",
},
{
  name: "Football",
  description: "Professional Size 5 Football",
  price: 1200,
  category: sports._id,
  stockQuantity: 80,
  imageUrl: "/uploads/football.jpg",
},
{
  name: "Yoga Mat",
  description: "Non-Slip Exercise Yoga Mat",
  price: 950,
  category: sports._id,
  stockQuantity: 65,
  imageUrl: "/uploads/yoga-mat.jpg",
},
{
  name: "Face Wash",
  description: "Deep Cleansing Face Wash",
  price: 299,
  category: beauty._id,
  stockQuantity: 150,
  imageUrl: "/uploads/face-wash.jpg",
},
      {
        name: "iPhone 15",
        description: "Apple iPhone 15",
        price: 70000,
        category: electronics._id,
        stockQuantity: 50,
        imageUrl: "/uploads/iphone15.jpg",
      },
      {
        name: "Samsung S24",
        description: "Samsung Galaxy S24",
        price: 65000,
        category: electronics._id,
        stockQuantity: 30,
        imageUrl: "/uploads/samsungs24.jpg",
      },
      {
        name: "Nike Running Shoes",
        description: "Comfortable running shoes",
        price: 5500,
        category: fashion._id,
        stockQuantity: 40,
        imageUrl: "/uploads/nike-shoes.jpg",
      },
      {
        name: "Harry Potter Book",
        description: "Harry Potter and the Philosopher's Stone",
        price: 800,
        category: books._id,
        stockQuantity: 100,
        imageUrl: "/uploads/harry-potter-book.jpg",
      },
      {
        name: "T-Shirt",
        description: "Cotton Round Neck T-Shirt",
        price: 600,
        category: fashion._id,
        stockQuantity: 75,
        imageUrl: "/uploads/tshirt.jpg",
      },
      {
        name: "Test Laptop",
        description: "Intel Core i7 Laptop",
        price: 50000,
        category: electronics._id,
        stockQuantity: 20,
        imageUrl: "/uploads/laptop.jpg",
      },
      {
        name: "iPhone 14",
        description: "Apple iPhone 14",
        price: 140000,
        category: electronics._id,
        stockQuantity: 10,
        imageUrl: "/uploads/iphone14.jpg",
      },
      {
        name: "Smart Watch",
        description: "Fitness Smart Watch",
        price: 4500,
        category: electronics._id,
        stockQuantity: 35,
        imageUrl: "/uploads/smartwatch.jpg",
      },
      {
        name: "Wireless Headphones",
        description: "Bluetooth Noise Cancelling Headphones",
        price: 3500,
        category: electronics._id,
        stockQuantity: 60,
        imageUrl: "/uploads/headphones.jpg",
      },
    ]);

    console.log("✅ Seed Data Inserted Successfully");

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedData();