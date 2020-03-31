import { Context } from "../../context/context";
import { v4 as uuidv4 } from "uuid";

const createPlant = async (
  _parent: any,
  args: any,
  context: Context,
  _info: any
) => {
  // Generate a UUID per Plant
  const guid = uuidv4();

  // DynamoDB Document Client Request Parameters
  const putPlantRequestParams = {
    TableName: "PLANTS_TABLE",
    Item: {
      id: guid,
      name: args.plant.name,
      soil: {
        id: args.plant.soil.id,
        brand: args.plant.soil.brand,
        moistureLevel: args.plant.soil.moistureLevel
      }
    }
  };

  try {
    await context.db.put(putPlantRequestParams).promise();
  } catch (error) {
    console.error(error);
    return {};
  }

  // DynamoDB Document Client Request Parameters
  const getPlantRequestParams = {
    TableName: "PLANTS_TABLE",
    Key: { id: guid }
  };

  try {
    const getPlantResponse: any = await context.db
      .get(getPlantRequestParams)
      .promise();

    return getPlantResponse.Item;
  } catch (error) {
    console.error(error);
    return {};
  }
};

export { createPlant };
