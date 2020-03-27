import { Context } from "../../context/context";

const name = (_parent: any, args: any, context: Context, _info: any) => {
  const params = {
    TableName: "PLANTS_TABLE",
    Key: { _id: args.id }
  };

  const plant: any = context.db.get(params);

  return plant.name;
};

const soil = (_parent: any, args: any, context: Context, _info: any) => {
  const params = {
    TableName: "PLANTS_TABLE",
    Key: { _id: args.id }
  };

  const plant: any = context.db.get(params);

  return plant.soil;
};

export { name, soil };
