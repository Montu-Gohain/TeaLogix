import sequelize from "../../config/database";
import { Model, DataTypes } from "sequelize";

class OrderItem extends Model {
  public orderId!: number; // FK to Order
  public teaProductId!: number; // FK to TeaProduct
  public quantity!: number;
}

OrderItem.init(
  {
    orderId: {
      type: DataTypes.INTEGER,
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
