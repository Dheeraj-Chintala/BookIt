import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import experienceRoutes from "./routes/experienceRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import promoRoutes from "./routes/promoRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/experiences", experienceRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/promo", promoRoutes);

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is running",
    timestamp: new Date().toISOString(),
  });
});

// Root
app.get("/", (req, res) => {
  res.send("BookIt Backend API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🌍 Server running on port ${PORT}`));
