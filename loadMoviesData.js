const path = require('path');
const { getJSONDataFromFile } = require('./file.js')
const dbModel = require('./dynamoCrud');

const movieData = getJSONDataFromFile(path.resolve(__dirname, 'movieData.json'));

const TABLE_NAME = 'Movies';

movieData.forEach((movie) => {
  const params = {
    TableName: TABLE_NAME,
    Item: { ...movie }
  };

  dbModel
    .create(params)
    .then(() => {
      console.log('Data written successfully:\n');
    })
    .catch((err) => {
      console.log("error ===>", err);
    });
});
