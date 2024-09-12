import sequelize from "../../config/database";
import { Model, DataTypes } from "sequelize";
import { v4 as uuidV4 } from "uuid";

class TeaProduct extends Model {
  public id!: string;
  public name!: string;
  public type!: string;
  public stockQuantity!: number;
  public pricePerKg!: number;
  public supplierId!: string; // FK to Supplier
}

TeaProduct.init(
  {
    id: {
      type: DataTypes.STRING,
      defaultValue: uuidV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stockQuantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pricePerKg: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    supplierId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "TeaProduct",
  }
);

// Todo : After defining the Schema of this Model , we can export this Model

export default TeaProduct;
