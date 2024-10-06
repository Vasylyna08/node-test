import { Router } from "express";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import {
  getAllProducts,
  getProductById,
  addProduct,
  deleteProductById,
} from "../controllers/products.js";

const productsRouter = Router();

productsRouter.get("/", ctrlWrapper(getAllProducts));

productsRouter.get("/:productId", ctrlWrapper(getProductById));

productsRouter.post("/", ctrlWrapper(addProduct));

productsRouter.delete("/:productId", ctrlWrapper(deleteProductById));

export default productsRouter;
