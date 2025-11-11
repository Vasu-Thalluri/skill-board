import express from "express";
import dotenv from "dotenv";
//import db from "./config/db.js";
import app from "./routes/index.js"

dotenv.config();
//const app = express();

app.get("/", (req, res) => {
  res.send("SkillBoard API running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`🚀 Server running on port ${PORT}`);
});