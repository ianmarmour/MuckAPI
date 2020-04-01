import { Context } from "../../../context/context";
import { ApolloError } from "apollo-server";

const name = async (parent: any, _args: any, context: Context, _info: any) => {
    const getRequestParams = {
      TableName: "SENSORS_TABLE",
      Key: { id: parent.id }
    };
  
    try {
      const getResponse: any = await context.db.get(getRequestParams).promise();
      return getResponse.Item.name;
    } catch (error) {
      throw new ApolloError(
        `Could not get name for Sensor using ID: ${parent.id}`,
        "CAN_NOT_FETCH_SENSOR_BY_ID"
      )
      console.error(error);
    }
};

const batteryLife = async (parent: any, _args: any, context: Context, _info: any) => {
    const getRequestParams = {
      TableName: "SENSORS_TABLE",
      Key: { id: parent.id }
    };
  
    try {
      const getResponse: any = await context.db.get(getRequestParams).promise();
      return getResponse.Item.batteryLife;
    } catch (error) {
      throw new ApolloError(
        `Could not get name for Sensor using ID: ${parent.id}`,
        "CAN_NOT_FETCH_SENSOR_BY_ID"
      )
      console.error(error);
    }
};

const sensor = { name: name, batteryLife: batteryLife };

export { sensor };