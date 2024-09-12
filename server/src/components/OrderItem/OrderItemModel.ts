import sequelize from "../../config/database";
import { Model, DataTypes } from "sequelize";
import { v4 as uuidV4 } from "uuid";

class OrderItem extends Model {
  public orderId!: string; // FK to Order
  public teaProductId!: number; // FK to TeaProduct
  public quantity!: number;
}

OrderItem.init(
  {
    orderId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    teaProductId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "OrderItem",
  }
);

export default OrderItem;
