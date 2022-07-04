const { DynamoDB } = require("aws-sdk");

const { DocumentClient } = DynamoDB;

const dynamoDB = new DynamoDB({
  endpoint: "http://localhost:8000",
  region: "us-east-1",
});

const dynamoDBDocClient = new DocumentClient({
  endpoint: "http://localhost:8000",
  region: "us-east-1",
});

module.exports = {
  dynamoDB,
  dynamoDBDocClient,
};
