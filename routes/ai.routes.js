import express from "express";
import { explainProblem, giveHints, solveProblem ,debugProb, testUser ,askUser } from "../controllers/ai.controller.js";

const router = express.Router();

router.post("/explain", explainProblem);
router.post("/hints", giveHints);
router.post("/solve", solveProblem);
router.post("/debug",debugProb);
router.post("/Test",testUser);
router.post("/ask",askUser);
export default router;
