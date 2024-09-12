import { Request, Response } from "express";
import Supplier from "./SupplierModel";

export const addSupplier = async (req: Request, res: Response) => {
  try {
    const response = await Supplier.create(req.body);

    // Todo : Let's exclude cratedAt and updatedAt fields from this response.

    const new_supplier = response.toJSON();

    delete new_supplier.createdAt;
    delete new_supplier.updatedAt;

    res.send({
      type: "success",
      message: "Supplier Added Successfully",
      data: new_supplier,
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export const GetSuppliers = (req: Request, res: Response) => {
  try {
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export const EditSupplier = (req: Request, res: Response) => {
  try {
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};
export const DeleteSupplier = (req: Request, res: Response) => {
  try {
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};
