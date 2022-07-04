import express from "express";
import { create, fetchAll, fetchByYear } from "./movieController";

const router = new express.Router();

router.route("/movies").get(fetchAll).post(create);

router.get("/movies/:year", fetchByYear);

export default router;
