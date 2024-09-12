import { Request, Response } from "express";
import Supplier from "./SupplierModel";
import { orderType, Suppiler_ } from "../../types/types";
import { UniqueConstraintError } from "sequelize";

export const addSupplier = async (req: Request, res: Response) => {
  try {
    const new_supplier = await Supplier.create(req.body);

    const response = await Supplier.findOne({
      where: { id: new_supplier.id },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    res.send({
      type: "success",
      message: "Supplier Added Successfully",
      item: response,
    });
  } catch (error) {
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
      message: `Suppiler can't be created due to ${error}`,
    });
  }
};

export const GetSuppliers = async (req: Request, res: Response) => {
  try {
    const { page = 0, limit = 5, sortBy = "name", orderBy = "ASC" } = req.query;

    const order_: orderType = [[sortBy as string, orderBy as "ASC" | "DESC"]];
    const offset = (page as number) * (limit as number);

    const { rows: supplierList, count } = await Supplier.findAndCountAll({
      limit: Number(limit),
      offset,
      order: order_,
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    res.json({
      totalItems: count,
      totalPages: Math.ceil(count / (limit as number)),
      currentPage: page as number,
      items: supplierList,
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export const EditSupplier = async (req: Request, res: Response) => {
  try {
    const update_payload: Suppiler_ = req.body;
    const id = update_payload.id;

    const respnse = await Supplier.update(update_payload, {
      where: {
        id: id,
      },
    });

    res.send({
      type: "success",
      message: "Supplier updated successfully",
      response_code: respnse,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      type: "failure",
      message: `Suppiler can't be created due to ${error}`,
    });
  }
};
export const DeleteSupplier = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // Assuming the supplier ID is passed in params

    const deleted = await Supplier.destroy({
      where: { id },
    });

    if (deleted) {
      return res.status(200).json({
        type: "success",
        message: "Supplier deleted successfully",
      });
    } else {
      return res.status(404).json({
        type: "failure",
        message: "Supplier not found",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      type: "failure",
      message: `Suppiler can't be created due to ${error}`,
    });
  }
};
