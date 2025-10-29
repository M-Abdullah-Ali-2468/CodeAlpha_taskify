import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import routes from "./routes/index.js";

// ✅ Load env first
dotenv.config();

// ✅ Connect to MongoDB
mongoose.connect(process.env.Mongo_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

const app = express();

// ✅ Middlewares
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use(express.json());
app.use(morgan("dev"));

// ✅ Routes
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the Taskify API 🚀",
  });
});

app.use("/api", routes);

// ✅ Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong on the server!" });
});

// ✅ Handle 404
app.use((req, res) => {
  res.status(404).json({ message: "Route not found!" });
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🔥 Server running on port ${PORT}`));
