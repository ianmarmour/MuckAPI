import * as AWSMock from "aws-sdk-mock";
import * as AWS from "aws-sdk"; 
import { updatePlant } from "./updatePlant";

describe("updatePlant", () => {
    it("Should return true if item sucessfully removed", async() => {
        AWSMock.setSDKInstance(AWS);
        
        // Return the previous Item
        AWSMock.mock('DynamoDB.DocumentClient', 'update', function (){
            return new Promise((resolve, _reject) => { 
                resolve({Item: { id: "0000", name: "testName", soil: { id: "0000", brand: "testBrand", moistureLevel: 10}}})
            });
        });

        AWSMock.mock('DynamoDB.DocumentClient', 'get', function (){
            return new Promise((resolve, _reject) => { 
                resolve({Item: { id: "0000", name: "testName", soil: { id: "0000", brand: "testBrand", moistureLevel: 10}}})
            })
        });

        const dynamoDb = new AWS.DynamoDB.DocumentClient();

        expect(await updatePlant({}, { plant: { id: "0000", name: "testName", soil: { id: "0000", brand: "testBrand", moistureLevel: 10}}}, { db: dynamoDb }, {})).toEqual({"id": "0000", "name": "testName", "soil": {"brand": "testBrand", "id": "0000", "moistureLevel": 10}})

        AWSMock.restore('DynamoDB.DocumentClient');
    })
});
