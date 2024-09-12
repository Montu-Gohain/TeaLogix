import { Model, DataTypes } from "sequelize";
import sequelize from "../../config/database";
import { v4 as uuidV4 } from "uuid";

class Supplier extends Model {
  public id!: string;
  public name!: string;
  public email!: string;
  public contact_no!: number;
  public country!: string;
}

Supplier.init(
  {
    id: {
      type: DataTypes.STRING,
      defaultValue: uuidV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    contact_no: {
      type: DataTypes.BIGINT,
      unique: true,
      allowNull: true,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Supplier",
  }
);

export default Supplier;
