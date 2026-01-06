import db from "../config/db.js";

export const createUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  const userRole = role === "admin" ? "admin" : "user";
  if (!name || !email || !password || !userRole) {
    throw new Error("Missing mandatory fields");
  }
  try {
    const exist = "select email from users where email = ?";
    const emailValue = [email];

    const [result1] = await db.query(exist, emailValue);
    if (result1.length > 0) {
      throw new Error("Email already exists");
    }
    const [result2] = await db.query(
      "insert into users(name, email, password, role) values(?, ?, ?, ?)",
      [name, email, password, userRole]
    );
    return result2;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new Error("Missing required fields");
  }
  const query =
    "select id, email, password from users where email = ? and password = ?";
  const values = [email, password];
  try {
    const [result] = await db.query(query, values);
    if (!result.length) {
      throw new Error("wrong credentials check your email or password");
    } else {
      return result;
    }
  } catch (error) {
    throw error;
  }
};
