import sequelize from "../../config/database";
import { Model, DataTypes } from "sequelize";

class TeaProduct extends Model {
  public id!: number;
  public name!: string;
  public type!: string;
  public stockQuantity!: number;
  public pricePerKg!: number;
  public supplierId!: number; // FK to Supplier
}

TeaProduct.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
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
      type: DataTypes.INTEGER,
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
