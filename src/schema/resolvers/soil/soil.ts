import { Context } from "../../../context/context";

const brand = async (
  parent: any,
  _args: any,
  _context: Context,
  _info: any
) => {
  return parent.brand;
};

const moistureLevel = async (
  parent: any,
  _args: any,
  _context: Context,
  _info: any
) => {
  return parent.moistureLevel;
};

const soil = { brand: brand, moistureLevel: moistureLevel}

export { soil };
