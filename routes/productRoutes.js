const express = require("express");
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productControllers");

const productRouter = express.Router();

productRouter.get("/", getAllProducts);

productRouter.get("/:id", getProductById);

productRouter.post("/", createProduct);

productRouter.put("/:id", updateProduct);

productRouter.delete("/:id", deleteProduct);

module.exports = productRouter;
