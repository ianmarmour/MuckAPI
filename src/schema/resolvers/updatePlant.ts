import { Context } from "../../context/context";

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
    const updateNameResponse: any = await context.db
      .update(updateNameParams)
      .promise();
  } catch (error) {
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
    const updateSoilResponse: any = await context.db
      .update(updateSoilParams)
      .promise();
  } catch (error) {
    console.error(error);
  }

  const getParams = {
    TableName: "PLANTS_TABLE",
    Key: { _id: args.plant.id.toString() }
  };

  try {
    const getPlantResponse: any = await context.db.get(getParams).promise();
    console.log(getPlantResponse);
    return getPlantResponse.Item;
  } catch (error) {
    console.error(error);
  }
};

export { updatePlant };
