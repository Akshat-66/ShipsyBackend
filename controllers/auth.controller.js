import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Helper to generate JWT
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// Register
export const registerUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ username, password: hashedPassword });
    await user.save();

    const token = generateToken(user._id);

    // Send token in response (Bearer token)
    res.status(201).json({
      message: "User registered successfully",
      _id: user._id,
      username: user.username,
      token: `Bearer ${token}`,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Login
export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = generateToken(user._id);

    res.status(200).json({
      _id: user._id,
      username: user.username,
      token: `Bearer ${token}`,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Logout (just a client-side action now)
export const logout = async (_, res) => {
  // With Bearer token, server can't "delete" token; client deletes it
  res.status(200).json({ message: "Logged out successfully" });
};
