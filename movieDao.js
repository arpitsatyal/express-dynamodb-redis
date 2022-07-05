import * as dbModel from "./dynamoCrud";

const TABLE_NAME = "Movies";

/**
 * Fetch All Movies From DB.
 *
 * @returns {Promise}
 */
export function fetchAll() {
  const params = {
    TableName: TABLE_NAME
  };

  return dbModel.getAll(params);
}

/**
 * Fetch Movie By Year and Title.
 *
 * @param {*} filter
 * @returns {Promise}
 */
export function fetchByYear(filter) {
  const params = {
    TableName: TABLE_NAME,
    KeyConditionExpression: "#yr = :yyyy",
    ExpressionAttributeNames: {
      "#yr": "year",
    },
    ExpressionAttributeValues: {
      ":yyyy": filter,
    },
  };

  return dbModel.query(params);
}

/**
 * Fetch Movie By Year and Title.
 *
 * @param {*} filter
 * @returns {Promise}
 */
export function fetchByYearAndTitle(filter) {
  const params = {
    TableName: TABLE_NAME,
    Key: {
      year: filter.year,
      title: filter.title,
    },
  };

  return dbModel.get(params);
}

/**
 * Create/Add New Movie Info.
 *
 * @param {*} data
 * @returns {Promise}
 */
export function create(data) {
  const params = {
    TableName: TABLE_NAME,
    Item: { ...data },
  };

  return dbModel.create(params);
}

/**
 * Update Movie Info.
 *
 * @param {*} year
 * @param {*} title
 * @param {*} data {info}.
 * @returns
 */
export function update(year, data) {
  const params = {
    TableName: TABLE_NAME,
    Key: {
      year,
    },
    UpdateExpression: "set genre = :g",

    ExpressionAttributeValues: {
      ":g": data.genre,
    },
    ReturnValues: "UPDATED_NEW",
  };

  return dbModel.update(params);
}

/**
 * Delete Movie Info.
 *
 * @param {*} year
 * @param {*} title
 * @returns
 */
export function remove(year) {
  const params = {
    TableName: TABLE_NAME,
    Key: {
      year,
    },
  };

  return dbModel.remove(params);
}
