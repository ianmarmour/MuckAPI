import { Context } from "../../context/context";

const createPlant = (_parent: any, args: any, context: Context, _info: any) => {
  var params = {
    TableName: "PLANTS_TABLE",
    Item: {
      _id: args._id,
      name: args.name,
      soil: {
        _id: args.soil._id,
        brand: args.soil.brand,
        moistureLevel: args.soil.moistureLevel
      }
    }
  };

  const plant: any = context.db.put(params);

  return plant;
};

export { createPlant };
