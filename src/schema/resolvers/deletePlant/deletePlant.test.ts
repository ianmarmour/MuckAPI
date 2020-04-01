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

    it("Should throw Apollo Error", async() => {
        AWSMock.setSDKInstance(AWS);
        AWSMock.mock('DynamoDB.DocumentClient', 'delete', function (){
            return new Promise((resolve, _reject) => { 
                resolve(new Error("Test DDB Error"))
            });
        });

        const dynamoDb = new AWS.DynamoDB.DocumentClient();

        try {
            await deletePlant({id: "0000"}, { plant: { id: "0000"}}, { db: dynamoDb }, {})
        } catch(e) {
            expect(e.message).toBe('Could not delete Plant using ID: 0000')
        }

        AWSMock.restore('DynamoDB.DocumentClient');
    })
});

