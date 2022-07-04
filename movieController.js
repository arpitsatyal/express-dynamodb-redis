import * as movieService from "./movieService";

export async function fetchAll(req, res, next) {
  try {
    const data = await movieService.fetchAll();
    res.json(data);
  } catch (e) {
    next(e);
  }
}

export async function fetchByYear(req, res, next) {
    const year = parseInt(req.params.year);
    try {
      const data = await movieService.fetchByYear(year);
      res.json(data);
    } catch (e) {
      next(e);
    }
  }
  
export async function create(req, res, next) {
  try {
    await movieService.create(req.body);
    res.json({ msg: "data inserted." });
  } catch (e) {
    next(e);
  }
}

