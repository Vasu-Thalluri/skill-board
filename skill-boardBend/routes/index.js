import express from "express";
const app = express();
import user from "../routes/user.js";
import goal from "../routes/goals.js";

app.use(express.json());
app.use("/user", user);
app.use("/goal", goal);

export default app;
