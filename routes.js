import express from "express";
import {
  create,
  fetchAll,
  fetchByYear,
  findByGenre,
  remove,
  update,
} from "./movieController";

const router = new express.Router();

router.route("/movies").get(fetchAll).post(create);

router.route("/movies/:year").get(fetchByYear).put(update).delete(remove);

router.get("/movies-genre", findByGenre);

export default router;
