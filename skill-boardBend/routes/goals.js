import express from "express";
const router = express.Router();
import { createUserGoal } from "../controllers/goals.js";

router.post("/create", createUserGoal);

export default router;
