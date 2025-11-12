// Importing the User model from models folder
import { User } from "../models/userModel";

// Controller function to handle user registration
export const registerUser = async (req, res) => {
  try {
    // 🧾 Destructure data from request body
    const { firstName, lastName, email, password } = req.body;

    // ⚠️ Check if any required field is missing
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All Fields Are Required!",
      });
    }

    // 🔍 Check if user with this email already exists
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "User Already Exist!",
      });
    }

    // 🧩 Create a new user instance
    const newUser = User.create({
      firstName,
      lastName,
      email,
      password,
    });

    // 💾 Save the new user to database
    (await newUser).save();

    // ✅ Send success response
    res.status(201).json({
      success: true,
      message: "User Registered Successfully!",
    });
  } catch (error) {
    // ❌ Handle unexpected errors
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
