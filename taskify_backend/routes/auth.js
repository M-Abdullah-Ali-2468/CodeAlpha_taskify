import express from "express";
import {z} from "zod";
import { validateRequest } from "zod-express-middleware";
import bcrypt from "bcryptjs";

const router  = express.Router();

router.post("/register", (req, res) => {
  
});