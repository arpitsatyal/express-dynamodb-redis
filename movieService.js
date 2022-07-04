import * as movieDB from "./movieDao";
import redisClient from "./redisClient";

const movieParentKey = "movie";
const redisCacheTime = 60;

export function fetchAll() {
  return new Promise((resolve, reject) => {
    redisClient.get(movieParentKey, (err, result) => {
      if (err) {
        reject(err);
      }
      if (result) {
        resolve(JSON.parse(result));
      } else {
        return movieDB
          .fetchAll()
          .then((res) => {
            redisClient.setex(
              movieParentKey,
              redisCacheTime,
              JSON.stringify(res.Items)
            );
            resolve(res.Items);
          })
          .catch((err) => console.log(err));
      }
    });
  });
}

export function fetchByYear(year) {
  return new Promise((resolve, reject) => {
    redisClient.get(`${movieParentKey}:${year}`, (err, result) => {
      if (err) reject(err);
      if (result) {
        resolve(JSON.parse(result));
      } else {
        return movieDB
          .fetchByYear(year)
          .then((res) => {
            redisClient.setex(
              `${movieParentKey}:${year}`,
              redisCacheTime,
              JSON.stringify(res.Items)
            );
            resolve(res.Items);
          })
          .catch((err) => console.log(err));
      }
    });
  });
}

export function create(params) {
  return movieDB.create(params).catch((err) => console.log(err));
}

export function update(year, body) {
  return movieDB.update(year, body).catch((err) => console.log(err));
}

export async function remove(year) {
  const data = await movieDB.remove(year);
  console.log("after delete", data);
  return data;
}
