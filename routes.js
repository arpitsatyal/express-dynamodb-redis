import express from "express";
import { create, fetchAll } from "./movieController";

const router = new express.Router();

router.get("/movies", fetchAll);
router.post("/movies", create)

export default router;
