import { Context } from "../../../context/context";
import { ApolloError } from "apollo-server";

const updatePlant = async (
  _parent: any,
  args: any,
  context: Context,
  _info: any
) => {
  const updateNameParams = {
    TableName: "PLANTS_TABLE",
    Key: { _id: args.plant.id.toString() },
    UpdateExpression: "set #a = :newName",
    ExpressionAttributeNames: { "#a": "name" },
    ExpressionAttributeValues: {
      ":newName": args.plant.name
    }
  };

  try {
    await context.db.update(updateNameParams).promise();
  } catch (error) {
    throw new ApolloError(
      `Could not update Plant using ID: ${args.plant.id}`,
      "CAN_NOT_UPDATE_PLANT_BY_ID"
    )
    console.error(error);
  }

  const updateSoilParams = {
    TableName: "PLANTS_TABLE",
    Key: { _id: args.plant.id.toString() },
    UpdateExpression: "set soil = :newSoil",
    ExpressionAttributeValues: {
      ":newSoil": args.plant.soil
    }
  };

  try {
    await context.db.update(updateSoilParams).promise();
  } catch (error) {
    throw new ApolloError(
      `Could not update Soil using Plant ID: ${args.plant.id}`,
      "CAN_NOT_UPDATE_SOIL_BY_PLANT_ID"
    )
    console.error(error);
  }

  const getParams = {
    TableName: "PLANTS_TABLE",
    Key: { _id: args.plant.id.toString() }
  };

  try {
    const getPlantResponse: any = await context.db.get(getParams).promise();
    return getPlantResponse.Item;
  } catch (error) {
    console.error(error);
  }
};

export { updatePlant };
