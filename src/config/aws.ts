import AWS from "aws-sdk";

const documentClient: AWS.DynamoDB.DocumentClient = new AWS.DynamoDB.DocumentClient(
  {
    apiVersion: "2012-08-10"
  }
);

export { documentClient };
