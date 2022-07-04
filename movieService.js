import * as movieDB from "./movieDao";

export function fetchAll() {
  return movieDB
    .fetchAll()
    .then((res) => res.Items)
    .catch((err) => console.log(err));
}

export function create(params) {
  return movieDB
    .create(params)
    .then(() => {})
    .catch((err) => console.log(err));
}

