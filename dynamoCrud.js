const { dynamoDB, dynamoDBDocClient }  = require('./db')

/**
 * DynamoDB Common Get All Service.
 *
 * @param {*} params
 * @returns {Promise}
 */
 function getAll(params) {
  return new Promise((resolve, reject) => {
    dynamoDBDocClient.scan(params, (err, data) => {
      if (err) {
        return reject(err);
      }

      return resolve(data);
    });
  });
}

/**
 * DynamoDB Common Get Service.
 *
 * @param {*} params
 * @returns {Promise}
 */
function get(params) {
  return new Promise((resolve, reject) => {
    dynamoDBDocClient.get(params, (err, data) => {
      if (err) {
        return reject(err);
      }

      return resolve(data);
    });
  });
}

/**
 * DynamoDB Common Create Service.
 *
 * @param {*} params
 * @returns {Promise}
 */
function create(params) {
  return new Promise((resolve, reject) => {
    dynamoDBDocClient.put(params, (err, data) => {
      if (err) {
        return reject(err);
      }

      return resolve(data);
    });
  });
}

/**
 * DynamoDB Common Update Service.
 *
 * @param {*} params
 * @returns {Promise}
 */
function update(params) {
  return new Promise((resolve, reject) => {
    dynamoDBDocClient.update(params, (err, data) => {
      if (err) {
        return reject(err);
      }

      return resolve(data);
    });
  });
}

/**
 * DynamoDB Common Remove Service.
 *
 * @param {*} params
 * @returns {Promise}
 */
function remove(params) {
  return new Promise((resolve, reject) => {
    dynamoDBDocClient.delete(params, (err, data) => {
      if (err) {
        return reject(err);
      }

      return resolve(data);
    });
  });
}

/**
 * DynamoDB Common Query Service.
 *
 * @param {*} params
 * @returns {Promise}
 */
 function query(params) {
  return new Promise((resolve, reject) => {
    dynamoDBDocClient.query(params, (err, data) => {
      if (err) {
        return reject(err);
      }

      return resolve(data);
    });
  });
}

/**
 * DynamoDB Create Table Service.
 *
 * @param {*} params
 * @returns {Promise}
 */
 function createTable(params) {
  return new Promise((resolve, reject) => {
    dynamoDB.createTable(params, (err, data) => {
      if (err) {
        return reject(err);
      }

      return resolve(data);
    });
  });
}

/**
 * DynamoDB Remove Table Service.
 *
 * @param {*} params
 * @returns {Promise}
 */
function removeTable(params) {
  return new Promise((resolve, reject) => {
    dynamoDB.deleteTable(params, (err, data) => {
      if (err) {
        return reject(err);
      }

      return resolve(data);
    });
  });
}

module.exports = {
  createTable, removeTable, remove, update, create, query, get, getAll
}