import express from "express";
const router = express.Router();
import {
  createUserSkill,
  updateCC,
  getAllSkills,
} from "../controllers/skills.js";

router.get("/get", getAllSkills);
router.post("/create", createUserSkill);
router.put("/update", updateCC);

export default router;
