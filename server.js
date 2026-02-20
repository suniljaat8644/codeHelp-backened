import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

const app = express();
app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("ThinkCode AI backend running 🚀");
});

import aiRoutes from "./routes/ai.routes.js";
app.use("/api/ai", aiRoutes);

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
