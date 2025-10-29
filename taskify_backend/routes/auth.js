import express from "express";
import {z} from "zod";
import { registerSchema, loginSchema } from "../libs/validate-schema.js";
import { validateRequest } from "zod-express-middleware";
import { registerUser, loginUser } from "../controllers/auth-controllers.js";  

const router  = express.Router();

//Register Route
router.post("/register",
    validateRequest({
      body: registerSchema,
    })
    , registerUser
  );


  //Login Route
  router.post("/login",
    validateRequest(
      {
        body: loginSchema,
      }
    ),
    loginUser
  );

  export default router;