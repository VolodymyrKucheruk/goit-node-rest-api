import express from "express";
import validateBody from "../helpers/validateBody.js";
import {
  registerSchema,
  loginSchema,
  updateSubscriptionSchema,
} from "../models/usersSchema.js";
import { authenticate } from "../helpers/authenticate.js";
import {
  register,
  login,
  logout,
  current,
  updateSubscription,
} from "../controllers/usersControllers.js";

export const router = express.Router();

router.get("/current", authenticate, current);
router.post("/register", validateBody(registerSchema), register);
router.post("/login", validateBody(loginSchema), login);
router.post("/logout", authenticate, logout);
router.patch(
  "/subscription",
  authenticate,
  validateBody(updateSubscriptionSchema),
  updateSubscription
);
