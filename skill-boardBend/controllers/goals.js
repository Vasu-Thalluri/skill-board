import { createGoal } from "../models/goals.js";

export const createUserGoal = async (req, res) => {
  try {
    const result = await createGoal(req);
    if (result) {
      return res.status(201).json({
        success: true,
        result,
        message: "Goal created successfully",
      });
    }
    return res.status(403).json({ message: "Something happened wrong" });
  } catch (error) {
    //console.log("error from backend", error.message);
    if (error.message.includes("Missing required fields")) {
      return res.status(400).json({ message: "Missing required fields" });
    }
    return res.status(500).json({ error: "Internal server error" });
  }
};
