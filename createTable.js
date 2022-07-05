const dbModel = require("./dynamoCrud");

const TABLE_NAME = "Movies";

const params = {
  TableName: TABLE_NAME,
  KeySchema: [
    { AttributeName: "year", KeyType: "HASH" }, // hash = partition key
    { AttributeName: "title", KeyType: "RANGE" }, //range = sort key,
  ],
  AttributeDefinitions: [
    { AttributeName: "year", AttributeType: "N" }, //N = number
    { AttributeName: "title", AttributeType: "S" }, //S = string,
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 10,
    WriteCapacityUnits: 10,
  }
};

dbModel
  .createTable(params)
  .then(() => console.log("table created."))
  .catch((err) => console.log("table not created", err));
