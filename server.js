import express from "express"
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/auth.route.js"

dotenv.config({ path: "./.env" });

// Connect to MongoDB
connectDB();
const app = express();
const PORT = process.env.PORT || 8000;

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/order", protect, orderRoutes);

app.use(express.json());

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
