const dbModel = require("./dynamoCrud");

const TABLE_NAME = "Movies";

const params = {
  TableName: TABLE_NAME,
  KeySchema: [
    { AttributeName: "year", KeyType: "HASH" }, // hash = partition key
    // { AttributeName: "title", KeyType: "RANGE" }, //range = sort key,
  ],
  AttributeDefinitions: [
    { AttributeName: "year", AttributeType: "N" }, //N = number
    { AttributeName: "title", AttributeType: "S" }, //S = string,
    {
      AttributeName: "genre",
      AttributeType: "S",
    },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 10,
    WriteCapacityUnits: 10,
  },
  GlobalSecondaryIndexes: [
    // optional (list of GlobalSecondaryIndex)
    {
      IndexName: "secondary_index",
      KeySchema: [
        { AttributeName: "title", KeyType: "HASH" },
        {
          // Required HASH type attribute
          AttributeName: "genre",
          KeyType: "RANGE",
        },
      ],
      Projection: {
        // attributes to project into the index
        ProjectionType: "ALL", // (ALL | KEYS_ONLY | INCLUDE)
      },
      ProvisionedThroughput: {
        // throughput to provision to the index
        ReadCapacityUnits: 400,
        WriteCapacityUnits: 400,
      },
    },
  ],
};

dbModel
  .createTable(params)
  .then(() => console.log("table created."))
  .catch((err) => console.log("table not created", err));
