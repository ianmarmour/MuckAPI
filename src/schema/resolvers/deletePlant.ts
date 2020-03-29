import { Context } from "../../context/context";

const deletePlant = async (
  _parent: any,
  args: any,
  context: Context,
  _info: any
) => {
  const deleteParams = {
    TableName: "PLANTS_TABLE",
    Key: {
      _id: args.plant._id
    }
  };

  try {
    const deletePlantResponse: any = await context.db.delete(deleteParams).promise();
  } catch (error) {
    console.error(error);
    return false
  }

  return true
};

export { deletePlant };
