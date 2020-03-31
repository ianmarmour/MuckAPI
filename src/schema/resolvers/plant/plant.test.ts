import * as AWSMock from "aws-sdk-mock";
import * as AWS from "aws-sdk"; 
import { name } from "./plant";

describe("name", () => {
    it("Should get name from DynamoDB Item", async() => {
        AWSMock.setSDKInstance(AWS);
        AWSMock.mock('DynamoDB.DocumentClient', 'get', function (){
            return new Promise((resolve, _reject) => { 
                resolve({Item: { name: "Foo"}})
            });
        });
        const dynamoDb = new AWS.DynamoDB.DocumentClient();

        expect(await name({id: "0000"}, {}, { db: dynamoDb }, {})).toEqual("Foo")

        AWSMock.restore('DynamoDB.DocumentClient');
    })
});

