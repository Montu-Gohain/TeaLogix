import { Router } from "express";
import {
  add_TeaProduct,
  Delete_TeaProduct,
  Edit_TeaProduct,
  get_TeaProducts,
} from "./TeaProductControllers";

const router = Router();

router.post("/add", add_TeaProduct);
router.get("/list", get_TeaProducts);
router.put("/edit", Edit_TeaProduct);
router.delete("/delete/:id", Delete_TeaProduct);

export default router;
