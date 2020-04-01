import * as AWSMock from "aws-sdk-mock";
import * as AWS from "aws-sdk"; 
import { createPlant } from "./createPlant";

describe("createPlant", () => {
    it("Should return plant if succesfully created", async() => {
        AWSMock.setSDKInstance(AWS);
        AWSMock.mock('DynamoDB.DocumentClient', 'put', function (){
            return new Promise((resolve, _reject) => { 
                resolve(null)
            });
        });

        AWSMock.mock('DynamoDB.DocumentClient', 'get', function (){
            return new Promise((resolve, _reject) => { 
                resolve({Item: { id: "0000", name: "testName", soil: { id: "0000", brand: "testBrand", moistureLevel: 10}}})
            });
        });

        const dynamoDb = new AWS.DynamoDB.DocumentClient();

        expect(await createPlant({}, { plant: { id: "0000", name: "testName", soil: { id: "0000", brand: "testBrand", moistureLevel: 10}}}, { db: dynamoDb }, {})).toEqual({"id": "0000", "name": "testName", "soil": {"brand": "testBrand", "id": "0000", "moistureLevel": 10}})

        AWSMock.restore('DynamoDB.DocumentClient');
    })
});
