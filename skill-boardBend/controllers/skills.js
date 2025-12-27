import { createSkill, updateContent, getSkills } from "../models/skills.js";

export const getAllSkills = async (req, res) => {
  try {
    const data = await getSkills();
    if (data) {
      return res.status(200).json({ data });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const createUserSkill = async (req, res) => {
  try {
    const data = await createSkill(req);
    if (data) {
      return res.status(201).json({
        success: true,
        data,
        message: "Skill created successfully",
      });
    }
    return res.status(403).json({ message: "Something happened wrong" });
  } catch (error) {
    //console.log("Error from server", error);
    if (error.message.includes("Missing required fields")) {
      return res.status(400).json({ message: "Missing required fields" });
    }
    if (error.message.includes("The skill is already existed")) {
      return res.status(400).json({ message: error.message });
    }
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const updateCC = async (req, res) => {
  try {
    const data = await updateContent(req);
    if (data) {
      return res.status(200).json({
        success: true,
        data,
        message: "completedContent updated successfully",
      });
    }
    return res.status(403).json({ message: "Something happened wrong" });
  } catch (error) {
    //console.log("Error from server", error);
    if (error.message.includes("completedContent is mandatory")) {
      return res.status(400).json({ message: error.message });
    }
    return res.status(500).json({ error: "Internal server error" });
  }
};
