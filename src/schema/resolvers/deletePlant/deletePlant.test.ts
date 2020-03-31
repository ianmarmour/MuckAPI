import * as AWSMock from "aws-sdk-mock";
import * as AWS from "aws-sdk"; 
import { deletePlant } from "./deletePlant";

describe("deletePlant", () => {
    it("Should return true if item sucessfully removed", async() => {
        AWSMock.setSDKInstance(AWS);
        AWSMock.mock('DynamoDB.DocumentClient', 'delete', function (){
            return new Promise((resolve, _reject) => { 
                resolve(true)
            });
        });
        const dynamoDb = new AWS.DynamoDB.DocumentClient();

        expect(await deletePlant({id: "0000"}, { plant: { id: "0000"}}, { db: dynamoDb }, {})).toEqual(true)

        AWSMock.restore('DynamoDB.DocumentClient');
    })
});

