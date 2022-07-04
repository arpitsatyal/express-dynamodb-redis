import express from "express";
import { create, fetchAll, fetchByYear, remove, update } from "./movieController";

const router = new express.Router();

router.route("/movies").get(fetchAll).post(create);

router.route("/movies/:year").get(fetchByYear)

router.put("/movies/:year/:title", update)
router.delete("/movies/:year/:title", remove)

export default router;
