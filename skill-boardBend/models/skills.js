import db from "../config/db.js";

export const getSkills = async (req, res) => {
  try {
    const query = "select * from skills";
    const [result] = await db.query(query);
    return result;
  } catch (error) {
    throw error;
  }
};

export const createSkill = async (req, res) => {
  const { skillName, category, proficiency, totalContent } = req.body;
  if (!skillName || !category || !proficiency || !totalContent) {
    throw new Error("Missing require fields");
  }
  const exist = "select skillName from skills where skillName = ?";
  const value = [skillName];
  const query =
    "insert into skills(skillName, category, proficiency, totalContent) values(?,?,?,?)";
  const values = [skillName, category, proficiency, totalContent];
  try {
    const [existSkill] = await db.query(exist, value);
    if (existSkill.length > 0) {
      throw new Error("The skill is already existed");
    }
    const [result] = await db.query(query, values);
    return result;
  } catch (error) {
    throw error;
  }
};

export const updateContent = async (req, res) => {
  const { id, completedContent } = req.body;
  if (!completedContent) {
    throw new Error("completedContent is mandatory");
  }
  const query = "update skills set completedContent = ? where id = ?";
  const value = [completedContent, id];
  try {
    const [result] = await db.query(query, value);
    return result;
  } catch (error) {
    throw error;
  }
};
