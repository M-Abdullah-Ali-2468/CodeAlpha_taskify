import express from "express";
import { registerUser } from "../controllers/userController";

const router = express.Router();

//Divert to the registerUser controller to create the user
router.post("/register",registerUser);

export default router;
