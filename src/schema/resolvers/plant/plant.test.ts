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

    it("Should throw Apollo Error", async() => {
        AWSMock.setSDKInstance(AWS);
        AWSMock.mock('DynamoDB.DocumentClient', 'get', function (){
            return new Promise((resolve, _reject) => { 
                resolve(new Error("Test DDB Error"))
            });
        });
        const dynamoDb = new AWS.DynamoDB.DocumentClient();

        try {
            await name({id: "0000"}, {}, { db: dynamoDb }, {})
        } catch (e) {
            expect(e.message).toBe('Could not get name for Plant using ID: 0000')
        }

        AWSMock.restore('DynamoDB.DocumentClient');
    })
});

