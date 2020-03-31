import * as AWSMock from "aws-sdk-mock";
import * as AWS from "aws-sdk"; 
import { plants } from "./plants";

describe("plants", () => {
    it("Should get name from DynamoDB Item", async() => {
        AWSMock.setSDKInstance(AWS);
        AWSMock.mock('DynamoDB.DocumentClient', 'scan', function (){
            return new Promise((resolve, _reject) => { 
                resolve({Items: [{ id: "0", name: "Foo"}, {id: "1", name: "Bar"}, {id: "2", name: "Bang"}]})
            });
        });
        const dynamoDb = new AWS.DynamoDB.DocumentClient();

        expect(await plants({}, {}, { db: dynamoDb }, {})).toEqual([{"id": "0", "name": "Foo"}, {"id": "1", "name": "Bar"}, {"id": "2", "name": "Bang"}])

        AWSMock.restore('DynamoDB.DocumentClient');
    })
});
