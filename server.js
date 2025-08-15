import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/auth.route.js";
import { protect } from "./middleware/auth.middleware.js";
import orderRoutes from "./routes/ship.route.js";
import swagger from "./swagger.js";

dotenv.config({ path: "./.env" });

// Connect to MongoDB
connectDB();
const app = express();
const PORT = process.env.PORT || 8000;

swagger(app);
// Routes
app.use(express.json()); // Move JSON middleware before routes
app.use("/api/auth", authRoutes);
app.use("/api/order", protect, orderRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📄 Swagger docs: http://localhost:${PORT}/api-docs`);
});
