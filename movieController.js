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

export async function update(req, res, next) {
  try {
    await movieService.update(parseInt(req.params.year), req.params.title, req.body);
    res.json({ msg: "data updated." });
  } catch (e) {
    console.log(e);
    next(e);
  }
}

export async function remove(req, res, next) {
  try {
    const year = parseInt(req.params.year);
    const title = req.params.title;

    const data = await movieService.remove(year, title);

    res.json({ data });
  } catch (err) {
    next(err);
  }
}