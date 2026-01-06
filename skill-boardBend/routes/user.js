import express from "express";
const router = express.Router();
import { createUserController, getUser } from "../controllers/user.js";

router.post("/register", createUserController);
router.post("/login", getUser);

export default router;
