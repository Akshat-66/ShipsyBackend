import mongoose from "mongoose";
import dotenv from "dotenv";
import { Shipment } from "../models/shipment.model.js";
import { User } from "../models/user.model.js"; // Adjust path if needed
import bcrypt from "bcryptjs";

dotenv.config();

// MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

// Seed function
const seedUsers = async () => {
  try {
    await connectDB();

    // Clear existing data
    await User.deleteMany();
    await Shipment.deleteMany();

    // Create dummy shipments
    const shipments = await Shipment.insertMany([
      { shipmentName: "Electronics Package", status: "Pending", isInternational: false, basePrice: 500, weight: 10, ratePerKg: 50, destination: "Delhi" },
      { shipmentName: "Furniture Set", status: "In Transit", isInternational: true, basePrice: 2000, weight: 50, ratePerKg: 60, destination: "New York" },
      { shipmentName: "Books Shipment", status: "Delivered", isInternational: false, basePrice: 300, weight: 20, ratePerKg: 15, destination: "Mumbai" },
      { shipmentName: "Clothing Boxes", status: "Cancelled", isInternational: true, basePrice: 800, weight: 30, ratePerKg: 40, destination: "London" },
      { shipmentName: "Grocery Supplies", status: "Pending", isInternational: false, basePrice: 150, weight: 5, ratePerKg: 20, destination: "Bangalore" },
    ]);

    // Hash passwords
    const hashedPassword = await bcrypt.hash("password123", 10);

    // Create dummy users with hashed passwords
    const users = [
      { username: "akshat", password: hashedPassword, orders: [shipments[0]._id, shipments[2]._id] },
      { username: "rahul", password: hashedPassword, orders: [shipments[1]._id, shipments[3]._id] },
      { username: "sanya", password: hashedPassword, orders: [shipments[4]._id] },
    ];

    const createdUsers = await User.insertMany(users);
    console.log(`Inserted ${createdUsers.length} users with hashed passwords and orders`);

    mongoose.connection.close();
  } catch (err) {
    console.error(err);
    mongoose.connection.close();
  }
};

seedUsers();
