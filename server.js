import express from "express"
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config({ path: "./.env" });

// Connect to MongoDB
connectDB();
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
