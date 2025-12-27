import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import user from "../routes/user.js";
import goal from "../routes/goals.js";
import skill from "../routes/skills.js";

const app = express();
dotenv.config();
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  })
);

app.use(express.json());

app.use("/user", user);
app.use("/goal", goal);
app.use("/skill", skill);

export default app;
