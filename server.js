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

// app.use(cors({
//   origin: (origin, callback) => {
//     callback(null, true); // allow any origin
//   },
//   credentials: true, // allow cookies
// }));

const allowedOrigins = [
  "https://shipsy-frontend-two.vercel.app"
];
app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (mobile apps, Postman, etc.) only in development
    if (!origin && isDevelopment) {
      return callback(null, true);
    }

    // Check if the origin is in our allowed list
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    // Reject unauthorized origins
    const msg = `The CORS policy for this site does not allow access from the specified Origin: ${origin}`;
    return callback(new Error(msg), false);
  },
  credentials: true, // Essential for cookies
  methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: [
    'Content-Type',
    'Authorization',
    'Cookie',
    'X-Requested-With',
    'Accept',
    'Origin'
  ],
  exposedHeaders: ['Set-Cookie'],
  optionsSuccessStatus: 200,
  preflightContinue: false
}));

// Additional headers for cookie support
app.use((req, res, next) => {
  const origin = req.headers.origin;

  // Only set CORS headers if origin is allowed
  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
    res.header("Access-Control-Allow-Credentials", "true");
  }

  // Security headers
  res.header("X-Content-Type-Options", "nosniff");
  res.header("X-Frame-Options", "DENY");
  res.header("X-XSS-Protection", "1; mode=block");

  next();
});

// Handle preflight requests explicitly
app.options('*', (req, res) => {
  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, Cookie, X-Requested-With, Accept, Origin");
    res.status(200).end();
  } else {
    res.status(403).end();
  }
});



app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
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
