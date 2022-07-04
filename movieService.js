import * as movieDB from "./movieDao";
import redisClient from './redisClient';

const movieParentKey = 'movie';
const redisCacheTime = 60;

export function fetchAll() {
  return new Promise((resolve, reject) => {
    redisClient.get(movieParentKey, (err, result) => {
      if(err) {
        reject(err);
      }
      if(result) {
        resolve(JSON.parse(result));
      } else {
        return movieDB
        .fetchAll()
        .then((res) => {
          redisClient.setex(movieParentKey, redisCacheTime, JSON.stringify(res.Items))
          resolve(res.Items);
        })
        .catch((err) => console.log(err));
      }
    })
  })
}

export function fetchByYear(year) {
  return movieDB
    .fetchByYear(year)
    .then((res) => res.Items)
    .catch((err) => console.log(err));
}

export function create(params) {
  return movieDB
    .create(params)
    .then(() => {})
    .catch((err) => console.log(err));
}

