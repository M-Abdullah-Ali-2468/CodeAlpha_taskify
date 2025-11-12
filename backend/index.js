// ✅ Importing required modules
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './database/db.js';       // Custom DB connection file
import userRoutes from './routes/userRoutes.js'; // User-related API routes

// ✅ Load environment variables from .env file
dotenv.config();

// ✅ Initialize express app
const app = express();

// ✅ Middleware to parse JSON data from incoming requests
app.use(express.json());

// ✅ Define PORT (from .env or fallback to 5000)
const PORT = process.env.PORT || 5000;

// ✅ Connect to MongoDB database
connectDB();

// ✅ Test route (root endpoint)
app.get('/', (req, res) => {
  res.send('Welcome To !');
});

// ✅ All user-related routes will start from /api/users
app.use('/api/users', userRoutes);

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
