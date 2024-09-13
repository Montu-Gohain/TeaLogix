import { Request, response, Response } from "express";
import TeaProduct from "./TeaProductModel";
import { UniqueConstraintError } from "sequelize";
import { orderType, TeaProduct_ } from "../../types/types";

export const add_TeaProduct = async (req: Request, res: Response) => {
  try {
    const teaproduct_data = req.body;
    const response = await TeaProduct.create(teaproduct_data);

    const newly_added_product = await TeaProduct.findOne({
      where: {
        id: response.id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    res.send({
      type: "success",
      message: "New Tea product added successfully.",
      item: newly_added_product,
    });
  } catch (error) {
    console.log(error);
    if (error instanceof UniqueConstraintError) {
      return res.status(400).json({
        message: "Validation error",
        errors: error.errors.map((err) => ({
          field: err.path,
          message: err.message,
        })),
      });
    }

    return res.status(500).send({
      type: "failure",
      message: error,
    });
  }
};
export const get_TeaProducts = async (req: Request, res: Response) => {
  try {
    const { limit = 5, page = 0, sortBy = "name", orderBy = "ASC" } = req.query;

    const offset = Number(page) * Number(limit);
    const order_: orderType = [[sortBy as string, orderBy as "ASC" | "DESC"]];

    const { rows: teaProducts, count } = await TeaProduct.findAndCountAll({
      limit: Number(limit),
      offset,
      order: order_,
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    res.send({
      totalItems: count,
      totalPages: Math.ceil(count / Number(limit)),
      currentPage: page,
      items: teaProducts,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      type: "failure",
      message: error,
    });
  }
};
export const Edit_TeaProduct = async (req: Request, res: Response) => {
  try {
    const update_payload: TeaProduct_ = req.body;

    const id = update_payload.id;
    const response = await TeaProduct.update(update_payload, {
      where: {
        id,
      },
    });

    res.send({
      type: "success",
      message: "Tea Product details udpated successfully",
      response_code: response,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      type: "failure",
      message: error,
    });
  }
};
export const Delete_TeaProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const response = await TeaProduct.destroy({
      where: {
        id,
      },
    });

    if (response) {
      res.send({
        type: "success",
        message: "Tea Product deleted successfuly.",
        response_code: response,
      });
    } else {
      res.send({
        type: "failure",
        message: "Product not found with this Id",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      type: "failure",
      message: error,
    });
  }
};
