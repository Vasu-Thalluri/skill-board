import db from "../config/db.js";

export const createGoal = async (req, res) => {
  const { goaltitle, description, targetdate, priority } = req.body;
  if ((!goaltitle, !description, !targetdate, !priority)) {
    throw new Error("Missing require fields");
  }
  const query =
    "insert into goals (goalTitle, description, targetDate, priority) values (?, ?, ?, ?)";
  const values = [goaltitle, description, targetdate, priority];
  try {
    const [result] = await db.query(query, values);
    return result;
  } catch (error) {
    throw error;
  }
};
