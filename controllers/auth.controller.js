import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Register
export const registerUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Check if user exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        console.log(username, password)
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const user = new User({ username, password: hashedPassword });
        await user.save();

        // Generate token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

        // Store token in cookie
        res.cookie("_vercel_jwt", token, {
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
            httpOnly: true,
            secure: true,
            sameSite: "none",
        });

        res.status(201).json({
            message: "User registered successfully",
            _id: user._id,
            username: user.username
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
        console.log(username, password)
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
        res.cookie("_vercel_jwt", token, {
            maxAge: 7 * 24 * 60 * 60 * 1000,
            httpOnly: true,
            secure: true,
            sameSite: "none",
        })

        res.status(200).json({ _id: user._id, username: user.username });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const logout = async (_, res) => {
    try {
        res.clearCookie("_vercel_jwt", {
            httpOnly: true,
            secure: true,
            sameSite: "none",
        });

        res.status(200).json({ message: "Logged out successfully" })
    } catch (error) {
        console.error("Something went wrong");
    }
}