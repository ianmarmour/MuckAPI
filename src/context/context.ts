import { documentClient } from "../config/aws";

export interface Context {
  db: AWS.DynamoDB.DocumentClient;
}

const context: Context = {
  db: documentClient
};

export { context };
