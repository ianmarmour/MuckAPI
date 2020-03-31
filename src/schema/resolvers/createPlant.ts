import { Context } from "../../context/context";

const createPlant = async (
  _parent: any,
  args: any,
  context: Context,
  _info: any
) => {
  const putParams = {
    TableName: "PLANTS_TABLE",
    Item: {
      id: args.plant.id,
      name: args.plant.name,
      soil: {
        _id: args.plant.soil._id,
        brand: args.plant.soil.brand,
        moistureLevel: args.plant.soil.moistureLevel
      }
    }
  };

  try {
    const putPlantResponse: any = await context.db.put(putParams).promise();
  } catch (error) {
    console.error(error);
  }

  const getParams = {
    TableName: "PLANTS_TABLE",
    Key: { id: args.plant.id }
  };

  try {
    const getPlantResponse: any = await context.db.get(getParams).promise();

    return getPlantResponse.Item;
  } catch (error) {
    console.error(error);
  }
};

export { createPlant };
