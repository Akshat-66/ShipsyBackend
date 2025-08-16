import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/auth.route.js";
import { protect } from "./middleware/auth.middleware.js";
import orderRoutes from "./routes/ship.route.js";
import cors from "cors";
import cookieParser from "cookie-parser"
dotenv.config({ path: "./.env" });

// Connect to MongoDB
connectDB();
const app = express();
const PORT = process.env.PORT || 8000;

app.use(cookieParser())

// Allow all origins (*)
app.use(cors({
  origin: "https://shipsy-frontend-two.vercel.app/",
  credentials: true
}));

// Make sure cookies are sent properly
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// Routes
app.use(express.json()); // Move JSON middleware before routes
app.use("/api/auth", authRoutes);
app.use("/api/order", protect, orderRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📄 Swagger docs: http://localhost:${PORT}/api-docs`);
});
