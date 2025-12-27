import { createUser } from "../models/user.js";

export const createUserController = async (req, res) => {
  try {
    const newUser = await createUser(req);
    if (newUser) {
      return res
        .status(201)
        .json({ message: "User created successfully", newUser });
    } else {
      return res.status(403).json({ message: "Something happened wrong" });
    }
  } catch (error) {
    //console.log("Error from backend", error.message);
    if (error.message.includes("Missing mandatory fields")) {
      return res.status(400).json({ message: "Missing mandatory fields" });
    } else if (error.message.includes("Email already exists")) {
      return res.status(400).json({ message: "Email already exists" });
    }
    return res.status(500).json({ error: "Internal server error" });
  }
};
